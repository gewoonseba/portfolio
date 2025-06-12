import classNames from "classnames";

interface ProjectLayoutProps {
  sidebar: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}

export function ProjectLayout({ sidebar, content, className }: ProjectLayoutProps) {
  return (
    <div className={classNames(
      "mx-auto grid grid-cols-1 gap-10 pb-20 md:grid-cols-[1fr_2fr]",
      className
    )}>
      <div className="space-y-10">
        {sidebar}
      </div>
      <div className="space-y-10">
        {content}
      </div>
    </div>
  );
}