import clsx from "clsx";

export type TypographyVariant =
  | "Heading1"
  | "Heading2"
  | "Heading3"
  | "Heading4"
  | "Heading5"
  | "Paragraph1"
  | "Paragraph2"
  | "Caption"
  | "LinkMenu"
  | "Link";

export interface TypographyProps {
  variant: TypographyVariant;
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const variantStyles: Record<TypographyVariant, string> = {
  Heading1: "xl:text-9xl lg:text-8xl md:text-[80px] text-[32px]",
  Heading2: "lg:text-[120px] md:text-[64px] text-[50px]",
  Heading3: "lg:text-[100px] md:text-[80px] text-[50px]",
  Heading4: "font-semibold lg:text-5xl md:text-[32px] text-2xl font-mono",
  Heading5:
    "font-semibold lg:text-[32px] md:text-[27px] text-[22px]  font-mono",
  Paragraph1: "text-[12px] sm:text-[14px]",
  Paragraph2: "text-lg text-[var(--On-accent3)] font-mono font-medium",
  Caption: "text-sm text-[var(--On-accent1)] font-mono",
  LinkMenu: "text-[var(--Bg1)] md:text-[26px] text-[22px]",
  Link: "font-medium text-md",
};

const defaultElements: Record<TypographyVariant, React.ElementType> = {
  Heading1: "h1",
  Heading2: "h2",
  Heading3: "h3",
  Heading4: "h4",
  Heading5: "h5",
  Paragraph1: "p",
  Paragraph2: "p",
  Caption: "span",
  LinkMenu: "span",
  Link: "span",
};

export const Typography = ({
  variant,
  children,
  className,
  as,
}: TypographyProps) => {
  const Component = as || defaultElements[variant];

  return (
    <Component className={clsx(variantStyles[variant], className)}>
      {children}
    </Component>
  );
};
