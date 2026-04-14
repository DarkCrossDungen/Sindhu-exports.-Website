"use server";

import { createInquiry } from "../lib/db";

/**
 * Server Action to submit the wholesale form
 */
export async function submitWholesaleForm(formData) {
  const companyName = formData.get("companyName");
  const email = formData.get("email");
  const projectSpecs = formData.get("projectSpecs");

  if (!companyName || !email) {
    return { success: false, error: "Company Name and Email are required." };
  }

  const result = await createInquiry({
    companyName,
    email,
    projectSpecs
  });

  return result;
}

/**
 * Verifies the admin password server-side
 */
export async function verifyAdminPassword(password) {
  // We use the environment variable if set, otherwise a fallback
  const MASTER_PASSWORD = process.env.ADMIN_PASSWORD || "SINDHU2024";
  return password === MASTER_PASSWORD;
}
