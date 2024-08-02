import classNames from "classnames";
import React from "react";

interface LinkRowProps {
  className?: string;
  header: string;
  byline: string;
  children: React.ReactNode;
}

export function LinkRow({ className, header, byline, children }: LinkRowProps) {
  return (
    <div
      className={classNames(
        "flex items-center justify-between border-b border-neutral-100/5 py-4",
        className,
      )}
    >
      <div className="flex-1">
        <h3>{header}</h3>
        <p className="text-smuppercase">{byline}</p>
      </div>
      <div className="ml-4 flex-shrink-0">{children}</div>
    </div>
  );
}
