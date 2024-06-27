import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="flex lg:flex-row flex-col justify-center items-center md:gap-x-[50px] gap-y-8 w-full xl:px-[121px] p-4 xl:py-[100px] bg-[#effbf8] min-h-screen"
      data-aos="fade-right"
    >
      <Hero />
      <div className="w-full">
        <Image
          className="object-contain"
          src="/hero.png"
          alt="hero image"
          height={800}
          width={800}
        />
      </div>
    </div>
  );
}
