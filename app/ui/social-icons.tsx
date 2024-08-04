import { IconLink } from "@/app/ui/button/icon-link";
import { Instagram } from "@/app/ui/icons/instagram";
import { LinkedIn } from "@/app/ui/icons/linkedin";
import { ReadCV } from "@/app/ui/icons/readcv";
import classNames from "classnames";

export const SocialLinks = ({ className }: { className?: string }) => {
  return (
    <div className={classNames("flex gap-1", className)}>
      <IconLink href="https://www.instagram.com/gewoon.seba/">
        <Instagram />
      </IconLink>
      <IconLink href="https://read.cv/gewoon.seba">
        <ReadCV />
      </IconLink>
      <IconLink href="https://www.linkedin.com/in/sebastian-stoelen-43b605b4/">
        <LinkedIn />
      </IconLink>
    </div>
  );
};
