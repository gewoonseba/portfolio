import ProseSection from "@/app/components/sections/prose-section";
import AutoSizedText from "@/app/components/typography/auto-sized-text";
import Image from "next/image";

export const metadata = {
  title: "Smooved Leaver Dashboard UI Refresh | Gewoon Seba",
  description:
    "A UI refresh of the Smooved Leaver dashboard, built with Tailwind and DaisyUI.",
};

export default function SmooveedUIRefreshPage() {
  return (
    <article>
      <div className="pt-10 pb-20">
        <AutoSizedText>
          <h1 className="heading-tighter">Mover Dashboard</h1>
        </AutoSizedText>
        <p className="text-secondary uppercase-tight text-right">Smooved</p>
      </div>

      {/* MARK: Content*/}
      <div className="mx-auto grid grid-cols-1 gap-10 pb-20 md:grid-cols-[1fr_2fr]">
        <div className="space-y-10">
          <ProseSection title="TL;DR">
            <p>
              Designing and building an all-new dashboard and refreshed UI for
              Smooved. Built using Tailwind and DaisyUI.
            </p>
          </ProseSection>

          <ProseSection title="Role">
            <p>
              Product Designer <br />
              Design Engineer
            </p>
          </ProseSection>

          <ProseSection title="Tools & Technologies">
            <div className="grid grid-cols-2 gap-4">
              <p>
                Figma <br />
                Cursor <br />
                Angular
              </p>
              <p>
                Tailwind <br />
                DaisyUI
              </p>
            </div>
          </ProseSection>

          <ProseSection title="Timeline">
            <p>Early 2025</p>
          </ProseSection>
        </div>

        <div className="space-y-10">
          <ProseSection title="Context">
            <p>
              Smooved creates software to help movers manage their moving tasks,
              assisting new owners in setting up utility contracts and helping
              leavers close old ones. After feedback indicated leavers found the
              process confusing, we decided to redo their interface and align it
              with our recently refreshed brand identity.
            </p>
            <p>
              The UI refresh aimed to create a modern, distinctly Smooved
              experience while maintaining functionality at the forefront. We
              focused on mobile-friendly design since over 50% of our users
              access the web app on their phones.
            </p>
          </ProseSection>

          <ProseSection title="Technical Setup">
            <p>
              We implemented a CSS-only design system with Tailwind and DaisyUI
              to work with Angular. Rather than relying solely on utility
              classes, we introduced semantic variables for color, typography,
              and spacing to complement Tailwind&apos;s utility-based
              methodology.
            </p>
          </ProseSection>
        </div>
      </div>

      {/* MARK: Images */}
      <div className="grid grid-cols-1 grid-rows-6 gap-2 md:grid-cols-3 md:grid-rows-3">
        <div className="bg-btn-secondary-hover border-secondary relative aspect-square overflow-hidden rounded-md border md:col-span-2 md:aspect-auto">
          <Image
            src="/img/design/mover-redesign/mover-redesign-02.png"
            alt="Three mobile screens of the Smooved Mover Dashboard"
            fill
            className="object-cover"
          />
        </div>
        <div className="bg-btn-secondary-hover border-secondary relative row-span-2 overflow-hidden rounded-md border">
          <Image
            src="/img/design/mover-redesign/mover-redesign-01.png"
            alt="A halfway view of the Smooved Mover Dashboard"
            fill
          />
        </div>
        <div className="bg-btn-secondary-hover border-secondary relative row-span-2 overflow-hidden rounded-md border">
          <Image
            src="/img/design/mover-redesign/mover-redesign-06.png"
            alt="A mobile screen of the Smooved Mover Dashboard"
            fill
          />
        </div>
        <div className="bg-btn-secondary-hover border-secondary relative aspect-square overflow-hidden rounded-md border">
          <Image
            src="/img/design/mover-redesign/mover-redesign-05.png"
            alt="A mobile screen of the Smooved Mover Dashboard"
            fill
          />
        </div>
        <div className="bg-btn-secondary-hover border-secondary relative aspect-square overflow-hidden rounded-md border">
          <Image
            src="/img/design/mover-redesign/mover-redesign-04.png"
            alt="A mobile screen of the Smooved Mover Dashboard"
            fill
          />
        </div>
        <div className="bg-btn-secondary-hover border-secondary relative aspect-square overflow-hidden rounded-md border">
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
