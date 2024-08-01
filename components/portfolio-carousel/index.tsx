import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { projectsData } from "@/utils";
const PortFolioCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {projectsData.map((item, index) => (
          <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
            <Card className="p-0 rounded-md  overflow-hidden border-0 cursor-pointer">
              <CardContent className="flex aspect-square items-center justify-center p-0 overflow-hidden">
                <div className={`h-full w-full bg-cover bg-center hover:scale-110  transition-all ease duration-300`} style={{backgroundImage:`url('${item.banner}')`}}></div>
              </CardContent>
              <CardFooter className="p-0 flex flex-col justify-start items-start gap-y-1 mt-5">
                <h3 className="text-md font-medium text-[#130F49]">{item.title}</h3>
                <h3 className="text-2xl font-medium text-[#130F49]">{item.stake}</h3>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute -top-14 right-14 opacity-0">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default PortFolioCarousel;
