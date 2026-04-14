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
