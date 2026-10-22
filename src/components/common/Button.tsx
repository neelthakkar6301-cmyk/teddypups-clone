import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "whatsapp" | "ghost";
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
}

export default function Button({ children, variant = "primary", to, href, onClick, type = "button", className = "", disabled }: ButtonProps) {
  const cls = `btn btn--${variant} ${className}`.trim();
  if (to) return <Link className={cls} to={to}>{children}</Link>;
  if (href) {
    const external = /^https?:/.test(href);
    return (
      <a className={cls} href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return <button className={cls} type={type} onClick={onClick} disabled={disabled}>{children}</button>;
}
