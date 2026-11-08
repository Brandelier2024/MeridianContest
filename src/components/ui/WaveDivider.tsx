import React from "react";

interface WaveDividerProps {
  className?: string;
  swell?: boolean;
}

export function WaveDivider({ className = "", swell = true }: WaveDividerProps) {
  return (
    <div
      className={`m-wave ${className}`}
      aria-hidden="true"
      {...(swell ? { "data-8b-motion": "swell" } : {})}
    >
      <svg viewBox="0 0 2880 120" preserveAspectRatio="none">
        <path d="M0 60Q180 8 360 60T720 60T1080 60T1440 60T1800 60T2160 60T2520 60T2880 60V120H0Z" />
      </svg>
    </div>
  );
}

