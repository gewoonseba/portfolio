import { LinkRow } from "@/app/ui/link-row";
import Link from "next/link";

export default function Design() {
  return (
    <div>
      <section className="grid place-items-center ~py-4/10">
        <h1>Gewoon Seba.</h1>
      </section>
      <section className="flex max-w-prose flex-col gap-2 ~py-4/10">
        <p>
          Hello! I'm Seba, a designer with a soft spot for code. Currently, I’m
          leading product at{" "}
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
          excellent product sells itself. I’m driven by curiosity and a desire
          to continually improve my craft.
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
        <LinkRow header="Full stack engineer" byline="AE">
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
    </div>
  );
}
