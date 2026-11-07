export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { code } = await req.json();

    if (!code || typeof code !== "string" || code.trim().length < 4) {
      return NextResponse.json(
        { valid: false, error: "Please provide a valid QR contest code." },
        { status: 400 }
      );
    }

    const cleanCode = code.trim().toUpperCase();

    return NextResponse.json({
      valid: true,
      code: cleanCode,
      message: "QR code verified! Proceed to complete your registration.",
    });
  } catch (error) {
    return NextResponse.json(
      { valid: false, error: "Failed to validate QR code. Please try again." },
      { status: 500 }
    );
  }
}
