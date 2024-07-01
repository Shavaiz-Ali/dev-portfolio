import { experienceData } from "@/utils";
import ExperinceCard from "../about-experince-card";
import { Fragment } from "react";

const Experience = () => {
  return (
    <div className="flex flex-col items-start gap-y-8 w-full">
      <div className="flex flex-col items-start gap-y-3">
        <p className="text-[1rem] text-[#55527c] font-semibold">- Experience</p>
        <h3 className="text-4xl text-[#130F49] font-bold">
          Everything about me!
        </h3>
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 gap-6 w-full">
        {experienceData.map((item) => (
          <Fragment key={item.id}>
            <ExperinceCard item={item}/>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Experience;
