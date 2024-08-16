import obiwan from "@/public/img/obi-wan.gif";
import Image from "next/image";
export default function NotFound() {
  return (
    <div className="mt-5 flex flex-col items-center justify-center text-center">
      <Image
        className="h-auto max-w-full rounded-2"
        src={obiwan}
        alt=""
      ></Image>
      <p className="mt-2">This is not the page you are looking for.</p>
    </div>
  );
}
