import AutoSizedText from "@/app/components/typography/auto-sized-text";
import ProseSection from "@/app/components/typography/content/prose-section";
import TextLink from "@/app/components/typography/text-link";
import Work from "@/app/sections/work";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gewoon Seba | Design",
  description: "Designer with a soft spot for code.",
};

export default function Design() {
  return (
    <div className="w-full space-y-10">
      <section>
        <AutoSizedText>
          <h1 className="text-primary leading-none font-semibold tracking-tighter whitespace-nowrap">
            Gewoon Seba.
          </h1>
        </AutoSizedText>
      </section>

      <ProseSection>
        <p>
          <span className="text-primary">Hey! I&apos;m Seba</span> – I&apos;m a
          product designer who thinks strategically, crafts beautiful
          interfaces, and loves building what I design. I thrive in fast-paced
          environments where I can wear multiple hats. Currently at{" "}
          <TextLink label="Smooved" href="https://www.smooved.be" />.{" "}
        </p>
      </ProseSection>

      <Work />

      <ProseSection title="Let's talk">
        <p>
          Got a cool project in mind? Just want to geek out about design? Drop
          me a line at{" "}
          <TextLink
            label="seba@gewoonseba.com"
            href="mailto:seba@gewoonseba.com?subject=Hi%20👋"
          />{" "}
          or book a meeting with me on{" "}
          <TextLink label="cal.com" href="https://cal.com/gewoonseba/30min" />
        </p>
      </ProseSection>
    </div>
  );
}
