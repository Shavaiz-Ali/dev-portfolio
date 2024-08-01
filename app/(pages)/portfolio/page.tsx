import PortFolioCarousel from "@/components/portfolio-carousel";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";

const Portfolio = () => {
  return (
    <div className="p-4 xl:px-[121px] lg:py-[100px]" data-aos="fade-right">
      <div className="relative flex flex-col gap-y-8 items-start">
        <div className="flex justify-between items-end flex-wrap sm:gap-y-0 gap-y-3 w-full">
          <div className="space-y-2">
            <span className="text-[1rem] text-[#55527c] font-semibold">
              - Services
            </span>
            <h3 className="text-4xl text-[#130F49] font-bold">My Services</h3>
          </div>
          <div className="flex gap-x-4">
            <Button className="h-12 w-12 rounded-full border border-[#130F49] text-[#130F49] flex justify-center items-center bg-white hover:bg-[#130f49] transition-[color] ease duration-300 hover:text-[#ffff]">
              <FaAngleLeft size={13}/>
            </Button>
            <Button className="h-12 w-12 rounded-full border border-[#130F49] text-[#130F49] flex justify-center items-center bg-white hover:bg-[#130f49] transition-[color] ease duration-300 hover:text-[#ffff]">
              <FaAngleRight size={13}/>
            </Button>
          </div>
        </div>
        <PortFolioCarousel />
      </div>
    </div>
  );
};

export default Portfolio;
