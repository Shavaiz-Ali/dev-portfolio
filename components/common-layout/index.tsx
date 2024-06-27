import React from "react";
import Header from "../header";
import Animate from "../animate";

const CommonLayout = ({ children }: any) => {
  return (
    <Animate>
      <div className="relative w-full lg:flex mx-auto">
        <div className="lg:w-[280px] border-r border-[#55527c1a]">
          <Header />
        </div>
        <main className="lg:max-w-[calc(100%-280px)] w-full">{children}</main>
      </div>
    </Animate>
  );
};

export default CommonLayout;
