import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col items-start gap-y-[21px] lg:order-none order-1" >
      <h1 className="lg:text-5xl text-[35px] font-bold text-[#130F49] leading-[1.275]">
        Hi, I&apos;m <span className="text-[#A5A6FF]">Shavaiz!</span> Creative
        Coder Based in Pakistan
      </h1>
      <div className="w-[300px]">
        <p className="text-[14px] text-[#55527c]">
          I&apos;m a Pakistan based  front‑end developer with{" "}
          <span className="text-[#A5A6FF]">2+ years</span> of experience
        </p>
      </div>
      <div className="flex justify-center items-center gap-x-4">
        <Button className="h-12 w-44 bg-[#130F49] hover:bg-white !text-[#ffffff] hover:!text-[#55527c] border-0 hover:border border-black text-[14px] text-[400] rounded">
          Got a project?
        </Button>
        <Button className="h-12 w-32 hover:!bg-[#130F49] !bg-[#ffffff] border border-black hover:border-0 hover:text-white text-[#55527c] rounded text-[14px] text-[400] ">
          let&apos;s talk
        </Button>
      </div>
      <div className="flex flex-col gap-y-3 px-3 border-l-4 border-[#ff972d] mt-12">
        <Link className="text-[14px] text-[#130F49] hover:text-[#ff972d] font-semibold duration-150" href="#">+77 022 444 05 05</Link> 
        <Link className="text-[14px] text-[#130F49] hover:text-[#ff972d] font-semibold duration-150" href="#">support@elisc.com</Link> 
        <Link className="text-[14px] text-[#130F49] hover:text-[#ff972d] font-semibold duration-150" href="#">Ave Street Avenue, New York</Link> 
      </div>
    </div>
  );
};

export default Hero;
