import { sql } from "@vercel/postgres";

// Function to handle Wholesale Inquiries
export async function createInquiry(data) {
  try {
    const { companyName, email, projectSpecs } = data;
    
    // Ensure table exists (simplified initialization)
    await sql`
      CREATE TABLE IF NOT EXISTS inquiries (
        id SERIAL PRIMARY KEY,
        company_name TEXT NOT NULL,
        email TEXT NOT NULL,
        project_specs TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Insert the lead
    const result = await sql`
      INSERT INTO inquiries (company_name, email, project_specs)
      VALUES (${companyName}, ${email}, ${projectSpecs})
      RETURNING *;
    `;
    
    return { success: true, data: result.rows[0] };
  } catch (error) {
    console.error("Database Error:", error);
    return { success: false, error: error.message };
  }
}

// Function to fetch inquiries (for the Admin Dashboard)
export async function getInquiries() {
  try {
    const { rows } = await sql`SELECT * FROM inquiries ORDER BY created_at DESC;`;
    return rows;
  } catch (error) {
    console.error("Fetch Error:", error);
    return [];
  }
}
