import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Smooved Leaver Dashboard UI Refresh | Gewoon Seba",
  description:
    "A UI refresh of the Smooved Leaver dashboard, built with Tailwind and DaisyUI.",
};

export default function SmooveedUIRefreshPage() {
  return (
    <article className="max-w-none pb-10">
      <div className="~py-4/10">
        <Link
          href="/"
          className="relative z-10 uppercase tracking-tight text-neutral-200 transition-all duration-150 ~text-sm/base hover:text-neutral-100 hover:underline"
        >
          ← Back to overview
        </Link>
        <h1 className="w-fit max-w-7xl leading-[0.8] ~text-[6rem/10rem] 2xl:-ml-4">
          Refreshed Mover Dashboard
        </h1>
        <p className="text-neutral-300 ~text- uppercase tracking-tight ~text-lg/xl">
          Smooved
        </p>
      </div>

      {/* MARK: Content*/}
      <div className="flex flex-row justify-start pb-12">
        <div className="grid max-w-screen-lg gap-10 py-10 md:grid-cols-[1fr,2fr]">
          <div className="6 flex max-w-prose flex-col gap-10 pb-12 md:pb-0">
            <section>
              <h2 className="border-b border-neutral-100/5 pb-2">TL;DR</h2>
              <div className="mt-4 space-y-4">
                <p>
                  Designing and building an all-new leaver web-app and refreshed
                  UI for Smooved. Set up using Tailwind and DaisyUI.
                </p>
              </div>
            </section>
            <section>
              <h2 className="border-b border-neutral-100/5 pb-2">Role</h2>
              <div className="mt-4 space-y-4">
                <p>
                  Product Designer <br />
                  Design Engineer
                </p>
              </div>
            </section>
            <section>
              <h2 className="border-b border-neutral-100/5 pb-2">
                Tools & Technologies
              </h2>
              <div className="mt-4 grid grid-cols-2 space-y-4 ~gap-2/6">
                <p>
                  Figma <br />
                  Cursor <br />
                  Angular <br />
                </p>
                <p>
                  Tailwind <br />
                  DaisyUI <br />
                </p>
              </div>
            </section>
            <section>
              <h2 className="border-b border-neutral-100/5 pb-2">Timeline</h2>
              <div className="mt-4 space-y-4">
                <p>Early 2025</p>
              </div>
            </section>
          </div>
          <div className="flex max-w-prose flex-col gap-10">
            <section>
              <h2 className="border-b border-neutral-100/5 pb-2">Context</h2>
              <div className="mt-4 space-y-4">
                <p>
                  Smooved creates software to help movers manage their moving
                  tasks, assisting new owners in setting up utility contracts
                  and helping leavers close old ones. After feedback indicated
                  leavers found the process confusing, we decided to redo their
                  interface and align it with our recently refreshed brand
                  identity.
                </p>
                <p>
                  The UI refresh aimed to create a modern, distinctly Smooved
                  experience while maintaining functionality at the forefront.
                  We focused on mobile-friendly design since over 50% of our
                  users access the web app on their phones.
                </p>
              </div>
            </section>
            <section>
              <h2 className="border-b border-neutral-100/5 pb-2">
                Technical Setup
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  We implemented a CSS-only design system with Tailwind and
                  DaisyUI to work with Angular. Rather than relying solely on
                  utility classes, we introduced semantic variables for color,
                  typography, and spacing to complement Tailwind&apos;s
                  utility-based methodology.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* MARK: Images */}
      <div className="grid grid-cols-1 grid-rows-6 pb-12 ~gap-4/6 md:grid-cols-3 md:grid-rows-3">
        <div className="relative aspect-square overflow-hidden rounded-1 bg-neutral-800 shadow-border md:col-span-2 md:aspect-auto">
          <Image
            src="/img/design/mover-redesign/mover-redesign-02.png"
            alt="Three mobile screens of the Smooved Mover Dashboard"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative row-span-2 overflow-hidden rounded-1 bg-neutral-800 shadow-border">
          <Image
            src="/img/design/mover-redesign/mover-redesign-01.png"
            alt="A halfway view of the Smooved Mover Dashboard"
            fill
          />
        </div>
        <div className="relative row-span-2 overflow-hidden rounded-1 bg-neutral-800 shadow-border">
          <Image
            src="/img/design/mover-redesign/mover-redesign-06.png"
            alt="A mobile screen of the Smooved Mover Dashboard"
            fill
          />
        </div>
        <div className="relative aspect-square overflow-hidden rounded-1 bg-neutral-800 shadow-border">
          <Image
            src="/img/design/mover-redesign/mover-redesign-05.png"
            alt="A mobile screen of the Smooved Mover Dashboard"
            fill
          />
        </div>
        <div className="relative aspect-square overflow-hidden rounded-1 bg-neutral-800 shadow-border">
          <Image
            src="/img/design/mover-redesign/mover-redesign-04.png"
            alt="A mobile screen of the Smooved Mover Dashboard"
            fill
          />
        </div>
        <div className="relative aspect-square overflow-hidden rounded-1 bg-neutral-800 shadow-border">
          <Image
            src="/img/design/mover-redesign/mover-redesign-03.png"
            alt="A mobile screen of the Smooved Mover Dashboard"
            fill
          />
        </div>
      </div>
    </article>
  );
}
