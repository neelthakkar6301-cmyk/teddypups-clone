import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  as?: "h1" | "h2";
  align?: "left" | "center";
  id?: string;
}

export default function SectionHeading({ eyebrow, title, subtitle, as: Tag = "h2", align = "left", id }: Props) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag id={id} className="section-heading__title">{title}</Tag>
      {subtitle && <p className="section-heading__sub">{subtitle}</p>}
    </header>
  );
}
