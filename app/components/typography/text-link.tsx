export default function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a className="text-link" href={href}>{children}</a>;
}