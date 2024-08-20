import multipharma from "@/public/img/design/multipharma.jpg";
import Image from "next/image";

export function WorkCard() {
  return (
    <div>
      <Image
        className="h-auto max-w-full rounded-1 border border-neutral-100/5"
        src={multipharma}
        alt=""
        placeholder="blur"
      ></Image>
      <h4 className="mt-2">Multipharma</h4>
      <p className="~text-sm/base">2022 · In The Pocket</p>
    </div>
  );
}
