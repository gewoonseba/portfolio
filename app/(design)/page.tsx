import Work from "@/app/(design)/work";
import TextLink from "@/app/components/nav/text-link";
import ProseSection from "@/app/components/sections/prose-section";
import AutoSizedText from "@/app/components/typography/auto-sized-text";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gewoon Seba | Design",
  description: "Product engineer with a soft spot for design.",
};

export default function Design() {
  return (
    <div className="w-full space-y-10">
      <section className="pt-10 pb-20">
        <AutoSizedText>
          <h1 className="heading-tighter">Gewoon Seba.</h1>
        </AutoSizedText>
      </section>

      <ProseSection>
        <p>
          <span className="text-primary">Hey! I&apos;m Seba</span> – I&apos;m a
          product engineer and designer. I think strategically, design beautiful
          interfaces, and love building what I design. Since November 2025,
          I&apos;ve been working at{" "}
          <TextLink
            type="external"
            label="Companion.energy"
            href="https://companion.energy/"
          />
          .{" "}
        </p>
      </ProseSection>

      <Work />

      <ProseSection title="Let's talk">
        <p>
          Got a cool project in mind? Just want to geek out about design? Drop
          me a line at{" "}
          <TextLink
            type="external"
            label="seba@gewoonseba.com"
            href="mailto:seba@gewoonseba.com?subject=Hi%20👋"
          />
        </p>
      </ProseSection>
    </div>
  );
}
