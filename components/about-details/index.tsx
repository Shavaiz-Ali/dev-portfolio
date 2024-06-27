import React from "react";
import { Button } from "../ui/button";

const AboutDetails = () => {
  const data = [
    {
      id: 11,
      title: "Age",
      age: 21,
    },
    {
      id: 12,
      title: "Born In",
      age: "Hunza, Pakistan",
    },
    {
      id: 13,
      title: "Mail",
      age: "shavaizali159@gmail.com",
    },
    {
      id: 14,
      title: "Phone",
      age: +9235548227998,
    },
  ];
  return (
    <div className="lg:flex items-start justify-between w-full lg:space-y-0 space-y-8">
      <div className="flex flex-col items-start justify-start w-full space-y-4">
        <p className="text-[1rem] text-[#55527c] font-semibold">
          - NICE TO MEET YOU!
        </p>
        <div className="space-y-2">
          <h3 className="text-4xl text-[#130F49] font-bold">Shavaiz Ali</h3>
          <span className="block text-[16px] text-[#130F49] font-medium">
            Web developer
          </span>
        </div>
        <Button className="h-12 w-40 bg-[#130F49] hover:bg-white border border-[#130F49] text-white hover:text-[#55527c] rounded text-[14px] font-medium">
          Got a project?
        </Button>
      </div>
      <div className="space-y-12">
        <div className="flex flex-col gap-y-6 text-[14px] text-[#55527c] font-medium">
          <p className="leading-7">
            Hello there! My name is{" "}
            <span className="text-[#ffaf5e]">Shavaiz Ali</span>. I am a web
            developer, and I&apos;m very passionate and dedicated to
            my work.
          </p>
          <p className="leading-7">
            With 1+ years experience as a professional a Web developer, I
            have acquired the skills and knowledge necessary to make your
            project a success. I enjoy every step of the code process, from
            discussion and collaboration.
          </p>
        </div>
        <div className="flex xl:flex-nowrap flex-wrap justify-start items-center sm:gap-x-8 gap-4">
          {data.map((item) => (
            <div className="flex flex-col items-start gap-y-1" key={item.id}>
              <p className="text-[14px] text-[#55527c] border-b-2 border-[#130F49] uppercase">
                {item.title}
              </p>
              <p className="text-[16px] text-[#130F49] font-bold  text-nowrap ">
                {item.age}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;
