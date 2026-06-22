import { createServerFn } from "@tanstack/react-start";
import * as fs from "fs/promises";
import * as path from "path";
import * as os from "os";

// Define the shape of our registration
export type Registration = {
  fullName: string;
  email: string;
  phoneNumber: string;
  state: string;
  typeOfSms: string;
  createdAt?: string;
};

// Use /tmp for serverless environments (like Vercel) which have read-only filesystems
const DB_PATH = process.env.VERCEL || process.env.NODE_ENV === "production" 
  ? path.join(os.tmpdir(), "appointments.json") 
  : path.resolve(process.cwd(), "appointments.json");

let fallbackMemoryDb: Registration[] = [];

export const submitRegistration = createServerFn({ method: "POST" })
  .validator((data: Registration) => data)
  .handler(async ({ data }) => {
    try {
      let currentData: Registration[] = [];
      try {
        const fileContent = await fs.readFile(DB_PATH, "utf-8");
        currentData = JSON.parse(fileContent);
      } catch (err) {
        // File doesn't exist, use fallback
        currentData = fallbackMemoryDb;
      }
      
      const newEntry = { ...data, createdAt: new Date().toISOString() };
      currentData.push(newEntry);
      fallbackMemoryDb = currentData; // keep in sync
      
      try {
        await fs.writeFile(DB_PATH, JSON.stringify(currentData, null, 2));
      } catch (writeErr) {
        console.warn("Could not write to file system, using memory fallback.");
      }
      
      return { success: true };
    } catch (error) {
      console.error("Failed to save registration:", error);
      throw error;
    }
  });

export const getRegistrationCount = createServerFn({ method: "GET" })
  .handler(async () => {
    try {
      const fileContent = await fs.readFile(DB_PATH, "utf-8");
      const data = JSON.parse(fileContent);
      return data.length;
    } catch (err) {
      return fallbackMemoryDb.length;
    }
  });
