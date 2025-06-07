"use client";

import { AutoSizedText } from "../auto-sized-text";

export default function Hero() {
  return (
    <div className="w-full">
      <AutoSizedText>
        <h1 className="text-primary leading-none font-semibold tracking-tighter whitespace-nowrap">
          Gewoon Seba.
        </h1>
      </AutoSizedText>
    </div>
  );
}
