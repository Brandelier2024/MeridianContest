import React from "react";

interface LiftTextProps {
  children: React.ReactNode;
  className?: string;
}

export function LiftText({ children, className = "" }: LiftTextProps) {
  return <span className={`m-lift ${className}`}>{children}</span>;
}

