import type { ReactNode } from "react";

interface Props { children: ReactNode; className?: string }

/** Centred, gutter-padded wrapper used by every inner page. */
export default function PageContainer({ children, className = "" }: Props) {
  return <div className={`page-wrap ${className}`.trim()}>{children}</div>;
}
