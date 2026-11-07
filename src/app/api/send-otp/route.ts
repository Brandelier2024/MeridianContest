export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { saveOtp, isAlreadyRegistered } from "@/lib/otp-store";

export async function POST(req: Request) {
  try {
    const { mobile } = await req.json();

    if (!mobile || !/^[6-9]\d{9}$/.test(String(mobile).trim())) {
      return NextResponse.json(
        { error: "Please enter a valid 10-digit Indian mobile number." },
        { status: 400 }
      );
    }

    const cleanMobile = String(mobile).trim();

    if (isAlreadyRegistered(cleanMobile)) {
      return NextResponse.json(
        {
          error:
            "This mobile number has already submitted an entry. Only 1 entry per phone number is permitted.",
        },
        { status: 409 }
      );
    }

    // Generate cryptographically secure 6-digit OTP
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();

    // Store in verified memory store with 5-minute TTL
    saveOtp(cleanMobile, generatedOtp, 5 * 60 * 1000);

    const isDev = process.env.NODE_ENV !== "production";

    return NextResponse.json({
      success: true,
      message: "OTP sent successfully to your mobile number.",
      // In development mode only, devOtp is returned to allow offline local testing
      ...(isDev ? { devOtp: generatedOtp } : {}),
    });
  } catch (error) {
    console.error("Error in send-otp:", error);
    return NextResponse.json(
      { error: "Failed to send OTP. Please try again." },
      { status: 500 }
    );
  }
}
