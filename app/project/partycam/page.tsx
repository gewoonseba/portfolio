import TextLink from "@/app/components/nav/text-link";
import ProseSection from "@/app/components/sections/prose-section";
import AutoSizedText from "@/app/components/typography/auto-sized-text";
import Image from "next/image";

export const metadata = {
  title: "Partycam | Gewoon Seba",
  description:
    "A webapp to allow guests to share photos to a big screen in a party.",
};

export default function PartycamPage() {
  return (
    <article>
      <div className="pt-10 pb-20">
        <AutoSizedText>
          <h1 className="heading-tighter">PartyCam</h1>
        </AutoSizedText>
        <p className="text-secondary uppercase-tight text-right">Personal</p>
      </div>

      {/* MARK: Content*/}
      <div className="mx-auto grid grid-cols-1 gap-10 pb-20 md:grid-cols-[1fr_2fr]">
        <div className="space-y-10">
          <ProseSection title="TL;DR">
            <p>
              A web app that allows guests to share pictures on the big screen
              at the party. Built with Next.js, Supabase and Tailwind.
            </p>
          </ProseSection>

          <ProseSection title="Role">
            <p>
              Product Designer <br />
              Engineer
            </p>
          </ProseSection>

          <ProseSection title="Tools & Technologies">
            <div className="grid grid-cols-2 gap-4">
              <p>
                Figma <br />
                Cursor <br />
                Next.js
              </p>
              <p>
                Tailwind <br />
                Supabase
              </p>
            </div>
          </ProseSection>

          <ProseSection title="Timeline">
            <p>Early 2025</p>
          </ProseSection>

          <ProseSection title="Links">
            <p>
              <TextLink
                type="external"
                label="GitHub"
                href="https://github.com/gewoonseba/party-cam"
              />
            </p>
          </ProseSection>
        </div>

        <div className="space-y-10">
          <ProseSection title="Context">
            <p>
              For my thirtieth birthday, I hosted a party with some friends. To
              make it special, I created PartyCam, a web app that allows guests
              to share pictures and quotes with everyone at the party. By
              scanning a QR code, guests could upload pictures that would then
              be displayed on a big screen.
            </p>
          </ProseSection>

          <ProseSection title="Technical Setup">
            <p>
              The application is built in Next.js, using Supabase as
              authentication provider, database and blob storage. The selection
              of pictures was random, but more recent uploads had a higher
              weight, increasing their chances of being chosen.
            </p>
            <p>I used Tailwind as the CSS framework.</p>
          </ProseSection>
        </div>
      </div>

      {/* MARK: Images */}
      <div className="grid grid-cols-1 grid-rows-6 gap-2 md:grid-cols-3 md:grid-rows-3">
        <div className="bg-btn-secondary-hover border-secondary relative aspect-square overflow-hidden rounded-md border md:col-span-2 md:aspect-auto">
          <Image
            src="/img/design/partycam/partycam-01.png"
            alt="A desktop screen of the PartyCam app"
            fill
            className="object-cover"
          />
        </div>
        <div className="bg-btn-secondary-hover border-secondary relative row-span-2 overflow-hidden rounded-md border">
          <Image
            src="/img/design/partycam/partycam-05.png"
            alt="Mockups of the invitation"
            fill
            className="object-cover"
          />
        </div>
        <div className="bg-btn-secondary-hover border-secondary relative row-span-2 overflow-hidden rounded-md border">
          <Image
            src="/img/design/partycam/partycam-02.png"
            alt="A mobile screen of the PartyCam app"
            fill
            className="object-cover"
          />
        </div>
        <div className="bg-btn-secondary-hover border-secondary relative aspect-square overflow-hidden rounded-md border">
          <Image
            src="/img/design/partycam/partycam-03.png"
            alt="The wordmark of the party"
            fill
            className="object-cover"
          />
        </div>
        <div className="bg-btn-secondary-hover border-secondary relative aspect-square overflow-hidden rounded-md border md:col-span-2 md:aspect-auto">
          <Image
            src="/img/design/partycam/partycam-04.png"
            alt="A mobile screen of the PartyCam app"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </article>
  );
}
