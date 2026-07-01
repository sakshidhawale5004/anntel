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

export type ContactSubmission = {
  first: string;
  last: string;
  email: string;
  company: string;
  phone: string;
  interest: string;
  project: string;
  appointmentDate?: string;
  status?: string;
  createdAt?: string;
};

// Use /tmp for serverless environments (like Vercel) which have read-only filesystems
const DB_PATH = process.env.VERCEL || process.env.NODE_ENV === "production" 
  ? path.join(os.tmpdir(), "appointments.json") 
  : path.resolve(process.cwd(), "appointments.json");

const CONTACT_DB_PATH = process.env.VERCEL || process.env.NODE_ENV === "production" 
  ? path.join(os.tmpdir(), "contacts.json") 
  : path.resolve(process.cwd(), "contacts.json");

let fallbackMemoryDb: Registration[] = [
  {
    fullName: "Rahul Verma",
    email: "rahul@vermaconsulting.com",
    phoneNumber: "+91 99887 76655",
    state: "Maharashtra",
    typeOfSms: "otp",
    createdAt: new Date(Date.now() - 3600000 * 48).toISOString(),
  },
  {
    fullName: "Ananya Desai",
    email: "ananya.d@retailhub.in",
    phoneNumber: "+91 98112 23344",
    state: "Karnataka",
    typeOfSms: "promotional",
    createdAt: new Date(Date.now() - 3600000 * 12).toISOString(),
  }
];

let fallbackContactDb: ContactSubmission[] = [
  {
    first: "Vikram",
    last: "Sharma",
    email: "vikram@techsolutions.in",
    company: "TechSolutions India Pvt Ltd",
    phone: "+91 98765 43210",
    interest: "WhatsApp Business API",
    project: "Looking to automate order tracking and customer notifications for our e-commerce platform with 50k monthly active users.",
    appointmentDate: "2026-07-03T14:30",
    status: "Scheduled",
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
  },
  {
    first: "Priya",
    last: "Nair",
    email: "priya.nair@finvest.com",
    company: "Finvest Capital",
    phone: "+91 91234 56789",
    interest: "OTP Solutions",
    project: "Need enterprise-grade OTP verification with sub-second delivery for our mobile banking application.",
    appointmentDate: "2026-07-02T11:00",
    status: "New Appointment",
    createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
  }
];

// REGISTRATIONS
export const submitRegistration = createServerFn({ method: "POST" })
  .validator((data: Registration) => data)
  .handler(async ({ data }) => {
    try {
      let currentData: Registration[] = [];
      try {
        const fileContent = await fs.readFile(DB_PATH, "utf-8");
        currentData = JSON.parse(fileContent);
      } catch (err) {
        currentData = fallbackMemoryDb;
      }
      
      const newEntry = { ...data, createdAt: new Date().toISOString() };
      currentData.push(newEntry);
      fallbackMemoryDb = currentData;
      
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

export const getRegistrationsList = createServerFn({ method: "GET" })
  .handler(async (): Promise<Registration[]> => {
    try {
      const fileContent = await fs.readFile(DB_PATH, "utf-8");
      return JSON.parse(fileContent);
    } catch (err) {
      return fallbackMemoryDb;
    }
  });

// CONTACTS
export const submitContact = createServerFn({ method: "POST" })
  .validator((data: ContactSubmission) => data)
  .handler(async ({ data }) => {
    try {
      let currentData: ContactSubmission[] = [];
      try {
        const fileContent = await fs.readFile(CONTACT_DB_PATH, "utf-8");
        currentData = JSON.parse(fileContent);
      } catch (err) {
        currentData = fallbackContactDb;
      }
      
      const newEntry = { ...data, createdAt: new Date().toISOString() };
      currentData.push(newEntry);
      fallbackContactDb = currentData;
      
      try {
        await fs.writeFile(CONTACT_DB_PATH, JSON.stringify(currentData, null, 2));
      } catch (writeErr) {
        console.warn("Could not write to file system, using memory fallback.");
      }
      
      return { success: true };
    } catch (error) {
      console.error("Failed to save contact:", error);
      throw error;
    }
  });

export const getContactsList = createServerFn({ method: "GET" })
  .handler(async (): Promise<ContactSubmission[]> => {
    try {
      const fileContent = await fs.readFile(CONTACT_DB_PATH, "utf-8");
      return JSON.parse(fileContent);
    } catch (err) {
      return fallbackContactDb;
    }
  });

export const updateContactStatus = createServerFn({ method: "POST" })
  .validator((data: { index: number; status: string }) => data)
  .handler(async ({ data }) => {
    try {
      let currentData: ContactSubmission[] = [];
      try {
        const fileContent = await fs.readFile(CONTACT_DB_PATH, "utf-8");
        currentData = JSON.parse(fileContent);
      } catch (err) {
        currentData = fallbackContactDb;
      }
      if (currentData[data.index]) {
        currentData[data.index].status = data.status;
        fallbackContactDb = currentData;
        try {
          await fs.writeFile(CONTACT_DB_PATH, JSON.stringify(currentData, null, 2));
        } catch (writeErr) {
          console.warn("Could not write to file system, using memory fallback.");
        }
      }
      return { success: true };
    } catch (error) {
      console.error("Failed to update contact status:", error);
      throw error;
    }
  });

export const deleteContact = createServerFn({ method: "POST" })
  .validator((data: { index: number }) => data)
  .handler(async ({ data }) => {
    try {
      let currentData: ContactSubmission[] = [];
      try {
        const fileContent = await fs.readFile(CONTACT_DB_PATH, "utf-8");
        currentData = JSON.parse(fileContent);
      } catch (err) {
        currentData = fallbackContactDb;
      }
      if (currentData[data.index]) {
        currentData.splice(data.index, 1);
        fallbackContactDb = currentData;
        try {
          await fs.writeFile(CONTACT_DB_PATH, JSON.stringify(currentData, null, 2));
        } catch (writeErr) {
          console.warn("Could not write to file system, using memory fallback.");
        }
      }
      return { success: true };
    } catch (error) {
      console.error("Failed to delete contact:", error);
      throw error;
    }
  });

export const deleteRegistration = createServerFn({ method: "POST" })
  .validator((data: { index: number }) => data)
  .handler(async ({ data }) => {
    try {
      let currentData: Registration[] = [];
      try {
        const fileContent = await fs.readFile(DB_PATH, "utf-8");
        currentData = JSON.parse(fileContent);
      } catch (err) {
        currentData = fallbackMemoryDb;
      }
      if (currentData[data.index]) {
        currentData.splice(data.index, 1);
        fallbackMemoryDb = currentData;
        try {
          await fs.writeFile(DB_PATH, JSON.stringify(currentData, null, 2));
        } catch (writeErr) {
          console.warn("Could not write to file system, using memory fallback.");
        }
      }
      return { success: true };
    } catch (error) {
      console.error("Failed to delete registration:", error);
      throw error;
    }
  });
