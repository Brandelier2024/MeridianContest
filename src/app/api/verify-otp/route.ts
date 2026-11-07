export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { verifyOtpCode } from "@/lib/otp-store";

export async function POST(req: Request) {
  try {
    const { mobile, otpCode } = await req.json();

    if (!mobile || !/^[6-9]\d{9}$/.test(String(mobile).trim())) {
      return NextResponse.json(
        { verified: false, error: "Please enter a valid 10-digit Indian mobile number." },
        { status: 400 }
      );
    }

    if (!otpCode || typeof otpCode !== "string" || otpCode.trim().length !== 6) {
      return NextResponse.json(
        { verified: false, error: "Please enter a 6-digit OTP code." },
        { status: 400 }
      );
    }

    const cleanMobile = String(mobile).trim();
    const result = verifyOtpCode(cleanMobile, otpCode);

    if (!result.success) {
      return NextResponse.json(
        { verified: false, error: result.error || "Invalid OTP code." },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      verified: true,
      message: "Mobile number verified successfully.",
    });
  } catch (error) {
    console.error("Error in verify-otp:", error);
    return NextResponse.json(
      { verified: false, error: "Failed to verify OTP. Please try again." },
      { status: 500 }
    );
  }
}
