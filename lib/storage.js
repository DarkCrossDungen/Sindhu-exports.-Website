import { put } from "@vercel/blob";

/**
 * Upload an image or document to Vercel Blob Storage
 * @param {File} file - The file object from a form
 * @param {string} filename - Desired name for the file
 */
export async function uploadAsset(file, filename) {
  try {
    const blob = await put(`assets/${filename}`, file, {
      access: 'public', // Allows the web to see the image
    });
    return { success: true, url: blob.url };
  } catch (error) {
    console.error("Storage Error:", error);
    return { success: false, error: error.message };
  }
}
