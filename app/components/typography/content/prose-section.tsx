import H2Underline from "@/app/components/typography/h2-underline";

export default function ProseSection({
  title,
  children,
  className,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={className}>
      {title && <H2Underline>{title}</H2Underline>}
      <div className={`${title ? "mt-4" : ""} max-w-prose space-y-4`}>
        {children}
      </div>
    </section>
  );
}
