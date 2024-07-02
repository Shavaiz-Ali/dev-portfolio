import AboutDetails from "@/components/about-details";
import Experience from "@/components/experience-cards";
import React from "react";

const About = () => {
  const cardData = [
    {
      id: 11,
      title: "YEARS OF EXPERIENCE",
      num: 1,
    },
    {
      id: 12,
      title: "PROJECTS COMPLETED",
      num: 20,
    },
    {
      id: 13,
      title: "HAPPY CLIENTS",
      num: 5,
    },
  ];
  return (
    <div className="w-full overflow-x-hidden">
      <div className="p-4 xl:px-[121px] lg:py-[100px]" data-aos="fade-right">
        <AboutDetails />
        <div className="grid grid-col-1 md:grid-cols-3 sm:grid-cols-2 my-16 sm:gap-x-8 gap-y-8">
          {cardData.map((item) => (
            <div
              className={`group py-12 flex justify-center items-center gap-y-2 rounded transition-all ease-in-out duration-300 ${
                item.id == 11
                  ? "bg-[#d3f4ec]"
                  : item.id == 12
                  ? "bg-[#fce8d4]"
                  : item.id == 13
                  ? "bg-[#e3f9e0]"
                  : ""
              } overflow-hidden`}
              key={item.id}
            >
              <div className="lg:group-hover:scale-125 group-hover:transition-all ease-linear duration-150 text-center">
                <p className="text-[2rem] text-[#130F49] font-bold">
                  {item.num}+
                </p>
                <p className="text-[12px] text-[#55527c] font-medium">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* experience cards  */}
      <div className="p-4 xl:px-[121px] lg:py-[100px] bg-[#f3f9ff]" data-aos="fade-left">
        <Experience />
      </div>
    </div>
  );
};

export default About;
