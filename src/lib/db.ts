import { createServerFn } from "@tanstack/react-start";
import * as fs from "fs/promises";
import * as path from "path";

// Define the shape of our registration
export type Registration = {
  fullName: string;
  email: string;
  phoneNumber: string;
  state: string;
  typeOfSms: string;
  createdAt?: string;
};

// Ensure path points to the root of our project
const DB_PATH = path.resolve(process.cwd(), "appointments.json");

export const submitRegistration = createServerFn({ method: "POST" })
  .validator((data: Registration) => data)
  .handler(async ({ data }) => {
    try {
      let currentData: Registration[] = [];
      try {
        const fileContent = await fs.readFile(DB_PATH, "utf-8");
        currentData = JSON.parse(fileContent);
      } catch (err) {
        // File doesn't exist, start with empty array
      }
      
      currentData.push({ ...data, createdAt: new Date().toISOString() });
      
      await fs.writeFile(DB_PATH, JSON.stringify(currentData, null, 2));
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
      return 0; // File doesn't exist or error, assume 0
    }
  });
