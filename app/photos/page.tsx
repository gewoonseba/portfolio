import portfolioImg1 from "@/public/sebastian-stoelen-001.jpg";
import portfolioImg2 from "@/public/sebastian-stoelen-002.jpg";
import portfolioImg3 from "@/public/sebastian-stoelen-003.jpg";
import portfolioImg4 from "@/public/sebastian-stoelen-004.jpg";
import portfolioImg5 from "@/public/sebastian-stoelen-005.jpg";
import portfolioImg6 from "@/public/sebastian-stoelen-006.jpg";
import portfolioImg7 from "@/public/sebastian-stoelen-007.jpg";
import portfolioImg8 from "@/public/sebastian-stoelen-008.jpg";
import portfolioImg9 from "@/public/sebastian-stoelen-009.jpg";
import portfolioImg10 from "@/public/sebastian-stoelen-010.jpg";
import portfolioImg11 from "@/public/sebastian-stoelen-011.jpg";
import portfolioImg12 from "@/public/sebastian-stoelen-012.jpg";
import Image from "next/image";
export default function Photos() {
  return (
    <section className="grid grid-cols-1 items-center gap-4 ~py-4/10 md:grid-cols-3">
      <div>
        <Image
          className="rounded-lg h-auto max-w-full"
          src={portfolioImg1}
          alt=""
          placeholder="blur"
        ></Image>
      </div>
      <div>
        <Image
          className="rounded-lg h-auto max-w-full"
          src={portfolioImg2}
          alt=""
          placeholder="blur"
        ></Image>
      </div>
      <div>
        <Image
          className="rounded-lg h-auto max-w-full"
          src={portfolioImg3}
          alt=""
          placeholder="blur"
        ></Image>
      </div>

      <div>
        <Image
          className="rounded-lg h-auto max-w-full"
          src={portfolioImg4}
          alt=""
          placeholder="blur"
        ></Image>
      </div>
      <div>
        <Image
          className="rounded-lg h-auto max-w-full"
          src={portfolioImg5}
          alt=""
          placeholder="blur"
        ></Image>
      </div>
      <div>
        <Image
          className="rounded-lg h-auto max-w-full"
          src={portfolioImg6}
          alt=""
          placeholder="blur"
        ></Image>
      </div>

      <div>
        <Image
          className="rounded-lg h-auto max-w-full"
          src={portfolioImg7}
          alt=""
          placeholder="blur"
        ></Image>
      </div>
      <div>
        <Image
          className="rounded-lg h-auto max-w-full"
          src={portfolioImg8}
          alt=""
          placeholder="blur"
        ></Image>
      </div>
      <div>
        <Image
          className="rounded-lg h-auto max-w-full"
          src={portfolioImg9}
          alt=""
          placeholder="blur"
        ></Image>
      </div>
      <div>
        <Image
          className="rounded-lg h-auto max-w-full"
          src={portfolioImg10}
          alt=""
          placeholder="blur"
        ></Image>
      </div>
      <div>
        <Image
          className="rounded-lg h-auto max-w-full"
          src={portfolioImg11}
          alt=""
          placeholder="blur"
        ></Image>
      </div>
      <div>
        <Image
          className="rounded-lg h-auto max-w-full"
          src={portfolioImg12}
          alt=""
          placeholder="blur"
        ></Image>
      </div>
    </section>
  );
}
