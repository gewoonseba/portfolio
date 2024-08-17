import { ContactButton } from "@/app/ui/button/contact-button";
import { LinkRow } from "@/app/ui/link-row";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gewoon Seba | Design",
  description: "Designer with a soft spot for code.",
};

export default function Design() {
  return (
    <div>
      <section className="~py-4/10">
        <h1>Gewoon Seba.</h1>
      </section>
      <section className="flex max-w-prose flex-col gap-2 ~py-4/10">
        <p>
          Hello! I&apos;m Seba, a designer with a soft spot for code. Currently,
          I&apos;m leading product at{" "}
          <Link
            className="whitespace-nowrap transition-all duration-150 hover:text-neutral-100 hover:underline"
            href="https://www.smooved.be"
          >
            Smooved ↗
          </Link>
          .{" "}
        </p>
        <p>
          I believe that details matter, form is also a function and an
          excellent product sells itself. I&apos;m driven by curiosity and a
          desire to continually improve my craft.
        </p>
        <p>Nice to meet you.</p>
      </section>
      <section className="~py-4/10">
        <h2 className="pb-4">Experience</h2>
        <LinkRow className="border-t" header="Head of Product" byline="Smooved">
          <span className="uppercase tracking-tight text-neutral-100 ~text-sm/base">
            current
          </span>
        </LinkRow>
        <LinkRow header="Product Designer" byline="In The Pocket">
          <span className="uppercase tracking-tight text-neutral-100 ~text-sm/base">
            2021 - 2023
          </span>
        </LinkRow>
        <LinkRow header="Full Stack Engineer" byline="AE">
          <span className="uppercase tracking-tight text-neutral-100 ~text-sm/base">
            2017 - 2021
          </span>
        </LinkRow>
      </section>
      <section className="~py-4/10">
        <h2 className="pb-4">Projects</h2>
        <LinkRow
          className="border-t"
          header="Fednot Izimi"
          byline="Digital Product Design"
        >
          <Link
            href="https://www.inthepocket.com/work/izimi"
            className="uppercase tracking-tight text-neutral-100 transition-all duration-150 ~text-sm/base hover:text-neutral-100 hover:underline"
          >
            view case ↗
          </Link>
        </LinkRow>
        <LinkRow header="TP Vision Wave" byline="Digital Product Design">
          <Link
            href="https://www.inthepocket.com/work/tp-vision"
            className="uppercase tracking-tight text-neutral-100 transition-all duration-150 ~text-sm/base hover:text-neutral-100 hover:underline"
          >
            view case ↗
          </Link>
        </LinkRow>
        <LinkRow header="Multipharma" byline="Digital Product Design">
          <Link
            href="https://www.inthepocket.com/work/multipharma"
            className="uppercase tracking-tight text-neutral-100 transition-all duration-150 ~text-sm/base hover:text-neutral-100 hover:underline"
          >
            view case ↗
          </Link>
        </LinkRow>
      </section>
      <section className="flex max-w-prose flex-col items-start gap-2 ~py-4/10">
        <h2>Let&apos;s talk</h2>
        <p>
          For any inquiries, send me an e-mail over at{" "}
          <Link
            className="whitespace-nowrap transition-all duration-150 hover:text-neutral-100 hover:underline"
            href="mailto:seba@gewoonseba.com?subject=Hi%20👋"
          >
            seba@gewoonseba.com ↗
          </Link>{" "}
          or book a meeting with me on{" "}
          <Link
            className="whitespace-nowrap transition-all duration-150 hover:text-neutral-100 hover:underline"
            href="https://cal.com/gewoonseba/30min"
          >
            cal.com ↗
          </Link>
        </p>
        <ContactButton className="mt-2" />
      </section>
    </div>
  );
}
