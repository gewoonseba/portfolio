import verkeer from "@/public/img/noord/sebastian-stoelen-002.jpg";
import wash from "@/public/img/noord/sebastian-stoelen-005.jpg";
import bxl from "@/public/img/noord/sebastian-stoelen-007.jpg";
import bxl1 from "@/public/img/noord/sebastian-stoelen-010.jpg";
import bxl2 from "@/public/img/noord/sebastian-stoelen-011.jpg";
import bxl3 from "@/public/img/noord/sebastian-stoelen-021.jpg";
import bxl4 from "@/public/img/noord/sebastian-stoelen-022.jpg";
import station from "@/public/img/sebastian-stoelen-001.jpg";
import okn from "@/public/img/sebastian-stoelen-003.jpg";
import plant from "@/public/img/sebastian-stoelen-004.jpg";
import grg from "@/public/img/sebastian-stoelen-006.jpg";
import fre from "@/public/img/sebastian-stoelen-008.jpg";
import service from "@/public/img/sebastian-stoelen-009.jpg";
import auto from "@/public/img/sebastian-stoelen-012.jpg";
import kbt from "@/public/img/sebastian-stoelen-015.jpg";
import brief from "@/public/img/sebastian-stoelen-016.jpg";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gewoon Seba | Photos",
  description: "Designer with a soft spot for code.",
};
export default function Photos() {
  return (
    <section className="grid grid-cols-1 items-center gap-4 ~py-4/10 md:grid-cols-3">
      <div>
        <Image
          className="h-auto max-w-full rounded-1"
          src={station}
          alt=""
          placeholder="blur"
        ></Image>
      </div>
      <div>
        <Image
          className="h-auto max-w-full rounded-1"
          src={auto}
          alt=""
          placeholder="blur"
        ></Image>
      </div>
      <div>
        <Image
          className="h-auto max-w-full rounded-1"
          src={fre}
          alt=""
          placeholder="blur"
        ></Image>
      </div>

      <div>
        <Image
          className="h-auto max-w-full rounded-1"
          src={okn}
          alt=""
          placeholder="blur"
        ></Image>
      </div>

      <div>
        <Image
          className="h-auto max-w-full rounded-1"
          src={plant}
          alt=""
          placeholder="blur"
        ></Image>
      </div>
      <div>
        <Image
          className="h-auto max-w-full rounded-1"
          src={grg}
          alt=""
          placeholder="blur"
        ></Image>
      </div>

      <div>
        <Image
          className="h-auto max-w-full rounded-1"
          src={bxl}
          alt=""
          placeholder="blur"
        ></Image>
      </div>

      <div>
        <Image
          className="h-auto max-w-full rounded-1"
          src={bxl1}
          alt=""
          placeholder="blur"
        ></Image>
      </div>
      <div>
        <Image
          className="h-auto max-w-full rounded-1"
          src={bxl2}
          alt=""
          placeholder="blur"
        ></Image>
      </div>

      <div className="col-span-1 w-full rounded-1 md:col-span-2">
        <Image
          className="h-full w-full rounded-1 object-cover object-top"
          src={verkeer}
          alt=""
          placeholder="blur"
          style={{ aspectRatio: "3.08  / 1" }}
        ></Image>
      </div>

      <div>
        <Image
          className="h-auto max-w-full rounded-1"
          src={bxl3}
          alt=""
          placeholder="blur"
        ></Image>
      </div>

      <div>
        <Image
          className="h-auto max-w-full rounded-1"
          src={bxl4}
          alt=""
          placeholder="blur"
        ></Image>
      </div>

      <div className="col-span-1 w-full rounded-1 md:col-span-2">
        <Image
          className="h-full w-full rounded-1 object-cover object-top"
          src={wash}
          alt=""
          placeholder="blur"
          style={{ aspectRatio: "3.08  / 1" }}
        ></Image>
      </div>

      <div>
        <Image
          className="h-auto max-w-full rounded-1"
          src={service}
          alt=""
          placeholder="blur"
        ></Image>
      </div>

      <div>
        <Image
          className="h-auto max-w-full rounded-1"
          src={brief}
          alt=""
          placeholder="blur"
        ></Image>
      </div>
      <div>
        <Image
          className="h-auto max-w-full rounded-1"
          src={kbt}
          alt=""
          placeholder="blur"
        ></Image>
      </div>
    </section>
  );
}
