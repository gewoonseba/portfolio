import TextLink from "@/app/components/nav/text-link";
import ProseSection from "@/app/components/sections/prose-section";
import AutoSizedText from "@/app/components/typography/auto-sized-text";
import Image from "next/image";
import { PageHeader } from "@/app/components/sections/page-header";
import { ProjectLayout } from "@/app/components/sections/project-layout";
import { ProjectImageGallery, ProjectImage } from "@/app/components/data-view/project-image-gallery";

export const metadata = {
  title: "Partycam | Gewoon Seba",
  description:
    "A webapp to allow guests to share photos to a big screen in a party.",
};

export default function PartycamPage() {
  const projectImages: ProjectImage[] = [
    {
      src: "/img/design/partycam/partycam-01.png",
      alt: "A desktop screen of the PartyCam app"
    },
    {
      src: "/img/design/partycam/partycam-05.png",
      alt: "Mockups of the invitation"
    },
    {
      src: "/img/design/partycam/partycam-02.png",
      alt: "A mobile screen of the PartyCam app"
    },
    {
      src: "/img/design/partycam/partycam-03.png",
      alt: "The wordmark of the party"
    },
    {
      src: "/img/design/partycam/partycam-04.png",
      alt: "A mobile screen of the PartyCam app"
    }
  ];

  const sidebarContent = (
    <>
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
    </>
  );

  const mainContent = (
    <>
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
    </>
  );

  return (
    <article>
      <PageHeader title="PartyCam" subtitle="Personal" />

      {/* MARK: Content*/}
      <ProjectLayout sidebar={sidebarContent} content={mainContent} />

      {/* MARK: Images */}
      <ProjectImageGallery images={projectImages} />
    </article>
  );
}
