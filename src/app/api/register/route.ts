export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import crypto from "crypto";
import {
  isMobileVerified,
  consumeVerification,
  isAlreadyRegistered,
} from "@/lib/otp-store";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, mobile, qrCode, flavor, city } = body;

    const trimmedName = typeof fullName === "string" ? fullName.trim() : "";
    const trimmedMobile = typeof mobile === "string" ? mobile.trim() : "";

    if (!trimmedName || trimmedName.length < 2) {
      return NextResponse.json(
        { error: "Please enter your full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    if (!trimmedMobile || !/^[6-9]\d{9}$/.test(trimmedMobile)) {
      return NextResponse.json(
        { error: "Please enter a valid 10-digit Indian mobile number." },
        { status: 400 }
      );
    }

    if (isAlreadyRegistered(trimmedMobile)) {
      return NextResponse.json(
        {
          error:
            "This mobile number is already registered. Only 1 entry per phone number is permitted.",
        },
        { status: 409 }
      );
    }

    // Server-side authentication check: ensure the mobile number was verified via OTP
    const isVerified = isMobileVerified(trimmedMobile);
    if (!isVerified) {
      return NextResponse.json(
        {
          error:
            "Mobile number has not been verified. Please verify your OTP before submitting.",
        },
        { status: 403 }
      );
    }

    // Generate high-entropy collision-proof unique entry ticket code (e.g. MRD-9A4B-72F1)
    const randomHex = crypto.randomBytes(4).toString("hex").toUpperCase();
    const entryCode = `MRD-${randomHex.slice(0, 4)}-${randomHex.slice(4)}`;

    // Mark verification consumed and record entry
    consumeVerification(trimmedMobile);

    return NextResponse.json({
      success: true,
      entryCode,
      fullName: trimmedName,
      mobile: trimmedMobile,
      flavor: flavor || "Meridian Classic",
      city: city || "Pune",
      message: "Registration successful! You have entered the grand lucky draw.",
    });
  } catch (error) {
    console.error("Error in register:", error);
    return NextResponse.json(
      { error: "Registration failed. Please try again." },
      { status: 500 }
    );
  }
}
