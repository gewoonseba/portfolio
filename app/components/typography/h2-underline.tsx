import classNames from "classnames";

export default function H2Underline({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2
      className={classNames(
        "uppercase-tight text-sm leading-none font-semibold",
        "text-primary border-secondary",
        "w-full border-b pb-4",
      )}
    >
      {children}
    </h2>
  );
}
