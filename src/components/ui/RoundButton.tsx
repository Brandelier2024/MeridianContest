import React from "react";
import Link from "next/link";

interface RoundButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  ariaLabel: string;
  ariaExpanded?: boolean;
  ariaControls?: string;
  external?: boolean;
}

export function RoundButton({
  children,
  href,
  onClick,
  className = "",
  ariaLabel,
  ariaExpanded,
  ariaControls,
  external = false,
}: RoundButtonProps) {
  if (href) {
    const isExternal =
      external ||
      href.startsWith("http") ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:");

    if (isExternal) {
      return (
        <a
          href={href}
          onClick={onClick}
          className={`m-round ${className}`}
          aria-label={ariaLabel}
          target={external || href.startsWith("http") ? "_blank" : undefined}
          rel={external || href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} onClick={onClick} className={`m-round ${className}`} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`m-round ${className}`}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
    >
      {children}
    </button>
  );
}

