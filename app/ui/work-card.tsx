import { LinkButton } from "@/app/ui/button/link-button";
import multipharma from "@/public/img/design/multipharma.jpg";
import Image from "next/image";

interface WorkCardProps {
  title: string;
  byline: string;
  link?: string;
}

export function WorkCard({ title, byline, link }: WorkCardProps) {
  return (
    <div>
      <Image
        className="h-auto max-w-full rounded-1 border border-neutral-100/5"
        src={multipharma}
        alt=""
        placeholder="blur"
      ></Image>
      <div className="flex justify-between">
        <h4 className="mt-2">{title}</h4>
        {link && <LinkButton label="Read case" url={link} />}
      </div>
      <p className="~text-sm/base">{byline}</p>
    </div>
  );
}
