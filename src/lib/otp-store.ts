// Shared in-memory OTP & verification session store (supports Node.js / standalone)
interface OtpRecord {
  otp: string;
  expiresAt: number;
  attempts: number;
}

interface VerificationRecord {
  verifiedAt: number;
  expiresAt: number;
}

declare global {
  // eslint-disable-next-line no-var
  var __meridianOtpStore: Map<string, OtpRecord> | undefined;
  // eslint-disable-next-line no-var
  var __meridianVerifiedStore: Map<string, VerificationRecord> | undefined;
  // eslint-disable-next-line no-var
  var __meridianRegisteredMobiles: Set<string> | undefined;
}

const otpStore: Map<string, OtpRecord> =
  globalThis.__meridianOtpStore ?? new Map<string, OtpRecord>();

const verifiedStore: Map<string, VerificationRecord> =
  globalThis.__meridianVerifiedStore ?? new Map<string, VerificationRecord>();

const registeredMobiles: Set<string> =
  globalThis.__meridianRegisteredMobiles ?? new Set<string>();

if (process.env.NODE_ENV !== "production") {
  globalThis.__meridianOtpStore = otpStore;
  globalThis.__meridianVerifiedStore = verifiedStore;
  globalThis.__meridianRegisteredMobiles = registeredMobiles;
}

export function saveOtp(mobile: string, otp: string, ttlMs: number = 5 * 60 * 1000): void {
  otpStore.set(mobile, {
    otp,
    expiresAt: Date.now() + ttlMs,
    attempts: 0,
  });
}

export function verifyOtpCode(
  mobile: string,
  candidateOtp: string
): { success: boolean; error?: string } {
  const record = otpStore.get(mobile);

  if (!record) {
    return {
      success: false,
      error: "No OTP was requested for this mobile number, or it has expired.",
    };
  }

  if (Date.now() > record.expiresAt) {
    otpStore.delete(mobile);
    return { success: false, error: "OTP has expired. Please request a new one." };
  }

  if (record.attempts >= 5) {
    otpStore.delete(mobile);
    return {
      success: false,
      error: "Too many incorrect OTP attempts. Please request a new OTP.",
    };
  }

  record.attempts += 1;

  if (record.otp !== candidateOtp.trim()) {
    return {
      success: false,
      error: `Invalid OTP. Please check and try again (${5 - record.attempts} attempts remaining).`,
    };
  }

  // OTP is correct! Clear OTP and mark number verified for 15 minutes
  otpStore.delete(mobile);
  verifiedStore.set(mobile, {
    verifiedAt: Date.now(),
    expiresAt: Date.now() + 15 * 60 * 1000,
  });

  return { success: true };
}

export function isMobileVerified(mobile: string): boolean {
  const record = verifiedStore.get(mobile);
  if (!record) return false;
  if (Date.now() > record.expiresAt) {
    verifiedStore.delete(mobile);
    return false;
  }
  return true;
}

export function consumeVerification(mobile: string): void {
  verifiedStore.delete(mobile);
  registeredMobiles.add(mobile);
}

export function isAlreadyRegistered(mobile: string): boolean {
  return registeredMobiles.has(mobile);
}

