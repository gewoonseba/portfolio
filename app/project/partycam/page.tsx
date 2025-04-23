import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Partycam | Gewoon Seba",
  description:
    "A webapp to allow guests to share photos to a big screen in a party.",
};

export default function PartycamPage() {
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
          PartyCam
        </h1>
        <p className="text-neutral-300 ~text- uppercase tracking-tight ~text-lg/xl">
          Personal
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
                  A web app that allows guests to share pictures on the big
                  screen at the party. Build with Next.js, Supabase and
                  Tailwind.
                </p>
              </div>
            </section>
            <section>
              <h2 className="border-b border-neutral-100/5 pb-2">Role</h2>
              <div className="mt-4 space-y-4">
                <p>
                  Product Designer <br />
                  Engineer
                </p>
              </div>
            </section>
            <section>
              <h2 className="border-b border-neutral-100/5 pb-2">
                Tools & Technologies
              </h2>
              <div className="mt-4 grid grid-cols-2 items-start ~gap-2/6">
                <p>
                  Figma <br />
                  Cursor <br />
                  Next.js <br />
                </p>
                <p>
                  Tailwind <br />
                  Supabase <br />
                </p>
              </div>
            </section>
            <section>
              <h2 className="border-b border-neutral-100/5 pb-2">Timeline</h2>
              <div className="mt-4 space-y-4">
                <p>Early 2025</p>
              </div>
            </section>
            <section>
              <h2 className="border-b border-neutral-100/5 pb-2">Links</h2>
              <div className="mt-4 space-y-4">
                <p>
                  <Link
                    className="whitespace-nowrap transition-all duration-150 hover:text-neutral-100 hover:underline"
                    href="https://github.com/gewoonseba/party-cam"
                  >
                    GitHub ↗
                  </Link>
                </p>
                p
              </div>
            </section>
          </div>
          <div className="flex max-w-prose flex-col gap-10">
            <section>
              <h2 className="border-b border-neutral-100/5 pb-2">Context</h2>
              <div className="mt-4 space-y-4">
                <p>
                  For my thirtieth birthday, I hosted a party with some friends.
                  To make it special, I created PartyCam, a web app that allows
                  guests to share pictures and quotes with everyone at the
                  party. By scanning a QR code, guests could upload pictures
                  that would then be displayed on a big screen.
                </p>
              </div>
            </section>
            <section>
              <h2 className="border-b border-neutral-100/5 pb-2">
                Technical Setup
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  The application is built in Next.js, using Supabase as
                  authentication provider, database and blob storage. The
                  selection of pictures was random, but more recent uploads had
                  a higher weight, increasing their chances of being chosen.
                </p>
                <p>I used Tailwind as the CSS framework.</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* MARK: Images */}
      <div className="grid grid-cols-1 grid-rows-6 pb-12 ~gap-4/6 md:grid-cols-3 md:grid-rows-3">
        <div className="relative aspect-square overflow-hidden rounded-1 bg-neutral-800 shadow-border md:col-span-2 md:aspect-auto">
          <Image
            src="/img/design/partycam/partycam-01.png"
            alt="A desktop screen of the PartyCam app"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative row-span-2 overflow-hidden rounded-1 bg-neutral-800 shadow-border">
          <Image
            src="/img/design/partycam/partycam-05.png"
            alt="Mockups of the invitation"
            fill
          />
        </div>
        <div className="relative row-span-2 overflow-hidden rounded-1 bg-neutral-800 shadow-border">
          <Image
            src="/img/design/partycam/partycam-02.png"
            alt="A mobile screen of the PartyCam app"
            fill
          />
        </div>
        <div className="relative aspect-square overflow-hidden rounded-1 bg-neutral-800 shadow-border">
          <Image
            src="/img/design/partycam/partycam-03.png"
            alt="The wordmark of the party"
            fill
          />
        </div>
        <div className="relative aspect-square overflow-hidden rounded-1 bg-neutral-800 shadow-border md:col-span-2 md:aspect-auto">
          <Image
            src="/img/design/partycam/partycam-04.png"
            alt="A mobile screen of the PartyCam app"
            fill
          />
        </div>
      </div>
    </article>
  );
}
