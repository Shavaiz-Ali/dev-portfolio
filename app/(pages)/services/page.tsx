import IntroductionVideoCard from "@/components/introduction-video-card";
import ServicesCard from "@/components/services-card";
import { servicesCard } from "@/types";
import { servicesData } from "@/utils";
import { Play } from "lucide-react";
import React, { Fragment } from "react";

const Services: React.FC = () => {
  return (
    <div
      className="w-full p-4 xl:px-[121px] lg:py-[100px]"
      data-aos="fade-right"
    >
      <div className="flex justify-between items-end flex-wrap sm:gap-y-0 gap-y-3 w-full">
        <div className="space-y-2">
          <span className="text-[1rem] text-[#55527c] font-semibold">
            - Services
          </span>
          <h3 className="text-4xl text-[#130F49] font-bold">My Services</h3>
        </div>
        <div className="border-b border-[#130F49] text-[#130F49] text-sm font-semibold">
          <a href="#">
            <span>shavaizali159@gmail.com</span>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-5 mt-8">
        {servicesData.map((service: servicesCard) => (
          <Fragment key={service.id}>
            <ServicesCard service={service} />
          </Fragment>
        ))}
      </div>

      {/* video player poster  */}
      <div className="mt-14">
        <IntroductionVideoCard />
      </div>
    </div>
  );
};

export default Services;
