import Work from "@/app/sections/work";
import { ContactButton } from "@/app/ui/button/contact-button";
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
          I&apos;m Seba. I design things and I build things. Currently at{" "}
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
        <Work />
      </section>

      <section className="flex w-full flex-col items-start ~py-4/10">
        <h2 className="w-full border-b border-neutral-100/5 pb-4">
          Let&apos;s talk
        </h2>
        <p className="max-w-prose pt-4">
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
        <ContactButton className="mt-4" />
      </section>
    </div>
  );
}
