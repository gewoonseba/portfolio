import IconLink from "@/app/components/button/icon-link";
import Bluesky from "@/app/components/icons/bluesky";
import LinkedIn from "@/app/components/icons/linkedin";
import classNames from "classnames";

export default function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={classNames("flex gap-1", className)}>
      <IconLink href="https://bsky.app/profile/gewoonseba.com">
        <Bluesky />
      </IconLink>
      <IconLink href="https://www.linkedin.com/in/sebastian-stoelen-43b605b4/">
        <LinkedIn />
      </IconLink>
    </div>
  );
}
