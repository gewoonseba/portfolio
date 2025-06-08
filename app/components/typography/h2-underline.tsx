export default function H2Underline({
  children,
}: {
  children: React.ReactNode;
}) {
  return <h2 className="border-secondary w-full border-b pb-4">{children}</h2>;
}
