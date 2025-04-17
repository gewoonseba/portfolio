import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Smooved UI Refresh | Gewoon Seba",
  description:
    "A UI refresh of the Smooved Mover dashboard, built with Tailwind and DaisyUI.",
};

export default function SmooveedUIRefreshPage() {
  return (
    <article className="max-w-none">
      <div className="~py-4/10">
        <Link
          href="/"
          className="uppercase tracking-tight text-neutral-200 transition-all duration-150 ~text-sm/base hover:text-neutral-100 hover:underline"
        >
          ← Back to overview
        </Link>
        <h1 className="max-w-prose text-2xl">Refreshed Mover Dashboard</h1>
      </div>

      <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-2 shadow-border">
        <Image
          src="/img/design/ui-refresh.png"
          alt="Smooved UI Refresh"
          fill
          className="bg-neutral-800 object-cover"
          sizes="100vw"
          priority
        />
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-[2fr,1fr]">
        <div className="space-y-8">
          <section>
            <h2 className="border-b border-neutral-100/5 pb-2">About</h2>
            <div className="mt-4 space-y-4">
              <p>
                As Smooved&apos;s product offering grew, we needed to establish
                a more consistent and scalable design system. This refresh
                project aimed to improve the visual hierarchy, enhance
                readability, and create a more cohesive experience across all
                platform touchpoints.
              </p>
              <p>
                The new design system introduces a refined color palette,
                improved typography scales, and standardized component patterns.
                We focused on maintaining familiarity while modernizing the
                interface and improving accessibility.
              </p>
            </div>
          </section>

          <section>
            <h2 className="border-b border-neutral-100/5 pb-2">Process</h2>
            <div className="mt-4 space-y-4">
              <p>
                We started by auditing the existing interface, identifying
                inconsistencies and areas for improvement. Through collaborative
                workshops with the development team, we established new
                component guidelines that would be both visually appealing and
                technically efficient.
              </p>
              <p>
                The implementation was phased, starting with core components and
                gradually rolling out changes across the platform. This approach
                allowed us to gather user feedback and make adjustments while
                maintaining platform stability.
              </p>
            </div>
          </section>
        </div>

        <aside className="space-y-8">
          <section>
            <h2 className="border-b border-neutral-100/5 pb-2">
              Project Details
            </h2>
            <dl className="mt-4 space-y-2">
              <div>
                <dt className="uppercase tracking-tight text-neutral-200 ~text-sm/base">
                  Type
                </dt>
                <dd className="~text-base/md">Product Design</dd>
              </div>
              <div>
                <dt className="uppercase tracking-tight text-neutral-200 ~text-sm/base">
                  Client
                </dt>
                <dd className="~text-base/md">Smooved</dd>
              </div>
              <div>
                <dt className="uppercase tracking-tight text-neutral-200 ~text-sm/base">
                  Year
                </dt>
                <dd className="~text-base/md">2025</dd>
              </div>
              <div>
                <dt className="uppercase tracking-tight text-neutral-200 ~text-sm/base">
                  Role
                </dt>
                <dd className="~text-base/md">Lead Designer</dd>
              </div>
            </dl>
          </section>

          <section>
            <h2 className="border-b border-neutral-100/5 pb-2">Deliverables</h2>
            <ul className="mt-4 space-y-1">
              <li className="text-neutral-200 ~text-base/md">Design System</li>
              <li className="text-neutral-200 ~text-base/md">
                Component Library
              </li>
              <li className="text-neutral-200 ~text-base/md">
                Implementation Guidelines
              </li>
              <li className="text-neutral-200 ~text-base/md">Documentation</li>
            </ul>
          </section>
        </aside>
      </div>
    </article>
  );
}
