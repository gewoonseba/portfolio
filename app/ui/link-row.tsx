import React from "react";

interface LinkRowProps {
  header: string;
  byline: string;
  children: React.ReactNode;
}

export function LinkRow({ header, byline, children }: LinkRowProps) {
  return (
    <div className="border-gray-200 flex items-center justify-between border-b p-4">
      <div className="flex-1">
        <h3 className="text-gray-900 text-lg font-semibold">{header}</h3>
        <p className="text-gray-500 text-sm">{byline}</p>
      </div>
      <div className="ml-4 flex-shrink-0">{children}</div>
    </div>
  );
}
