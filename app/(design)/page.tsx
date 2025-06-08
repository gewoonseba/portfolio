import Work from "@/app/(design)/work";
import TextLink from "@/app/components/nav/text-link";
import ProseSection from "@/app/components/sections/prose-section";
import AutoSizedText from "@/app/components/typography/auto-sized-text";
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
          <TextLink
            type="external"
            label="Smooved"
            href="https://www.smooved.be"
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
          />{" "}
          or book a meeting with me on{" "}
          <TextLink
            type="external"
            label="cal.com"
            href="https://cal.com/gewoonseba/30min"
          />
        </p>
      </ProseSection>
    </div>
  );
}
