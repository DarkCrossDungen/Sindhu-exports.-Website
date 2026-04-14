import { getInquiries } from "../../lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await getInquiries();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
