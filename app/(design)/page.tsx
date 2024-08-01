import { LinkRow } from "@/app/ui/link-row";

export default function Design() {
  return (
    <div>
      <h1>Gewoon Seba.</h1>
      <p className="max-w-prose">
        Hi, I'm Seba! An allround Product Designer with expertise in viusal and
        interaction design, product management and engineering. Nice to meet
        you!
      </p>
      <LinkRow header="test" byline="byline">
        <p className="uppercase">Linky boy</p>
      </LinkRow>
    </div>
  );
}
