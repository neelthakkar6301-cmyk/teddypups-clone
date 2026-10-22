import type { ReactNode } from "react";

interface Props { children: ReactNode; className?: string; narrow?: boolean }

export default function PageContainer({ children, className = "", narrow }: Props) {
  return <div className={`container ${narrow ? "container--narrow" : ""} ${className}`.trim()}>{children}</div>;
}
