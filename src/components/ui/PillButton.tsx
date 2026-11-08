import React from "react";
import Link from "next/link";

interface PillButtonProps {
  children: React.ReactNode;
  variant?: "outline" | "solid";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  external?: boolean;
}

export function PillButton({
  children,
  variant = "outline",
  href,
  onClick,
  className = "",
  type = "button",
  external = false,
}: PillButtonProps) {
  const btnClass = variant === "solid" ? "m-btn-2" : "m-btn";
  const labelClass = variant === "solid" ? "m-btn-2__label" : "m-btn__label";

  const content = <span className={labelClass}>{children}</span>;

  if (href) {
    if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          onClick={onClick}
          className={`${btnClass} ${className}`}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} onClick={onClick} className={`${btnClass} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${btnClass} ${className}`}>
      {content}
    </button>
  );
}

