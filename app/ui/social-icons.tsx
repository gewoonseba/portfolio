import { IconLink } from "@/app/ui/button/icon-link";
import { Bluesky } from "@/app/ui/icons/bluesky";
import { LinkedIn } from "@/app/ui/icons/linkedin";
import { Threads } from "@/app/ui/icons/threads";
import classNames from "classnames";

export const SocialLinks = ({ className }: { className?: string }) => {
  return (
    <div className={classNames("flex gap-1", className)}>
      <IconLink href="https://www.threads.net/@gewoon.seba">
        <Threads />
      </IconLink>
      <IconLink href="https://bsky.app/profile/gewoonseba.com">
        <Bluesky />
      </IconLink>
      <IconLink href="https://www.linkedin.com/in/sebastian-stoelen-43b605b4/">
        <LinkedIn />
      </IconLink>
    </div>
  );
};
