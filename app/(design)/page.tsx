import { LinkRow } from "@/app/ui/link-row";
import Link from "next/link";

export default function Design() {
  return (
    <div>
      <section className="grid place-items-center ~py-8/20">
        <h1>Gewoon Seba.</h1>
      </section>
      <section className="~py-4/10">
        <p className="max-w-prose whitespace-pre-line">
          Hello! I'm Seba, a designer with a soft spot for code. Currently, I’m
          leading product at{" "}
          <Link
            className="transition-all duration-150 hover:text-neutral-100 hover:underline"
            href="https://www.smooved.be"
          >
            Smooved ↗
          </Link>
          . I believe that details matter, form is also a function and an
          excellent product sells itself. I’m driven by curiosity and a desire
          to continually improve my craft.<br></br> Nice to meet you.
        </p>
      </section>
      <section className="~py-4/10">
        <h2 className="pb-4">Experience</h2>
        <LinkRow className="border-t" header="Head of Product" byline="Smooved">
          <p className="uppercase text-neutral-100">current</p>
        </LinkRow>
        <LinkRow header="Product Designer" byline="In The Pocket">
          <p className="uppercase text-neutral-100">2021 - 2023</p>
        </LinkRow>
        <LinkRow header="Full stack engineer" byline="AE">
          <p className="uppercase text-neutral-100">2017 - 2021</p>
        </LinkRow>
      </section>
    </div>
  );
}
