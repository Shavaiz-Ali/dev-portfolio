/* eslint-disable react/jsx-key */

import { headerData } from "@/utils";
import HeaderMobile from "../header-mobile/index";
import HeaderPc from "../header-pc";
const Header = () => {
  return (
    <header className="lg:fixed lg:left-0 top-0 overflow-hidden">
      <div className="lg:hidden flex w-full justify-between items-center p-3">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#A5A6FF] font-bold">
          S.Ali
        </h1>
        <HeaderMobile headerData={headerData} />
      </div>
      <div>
        <div className="lg:flex hidden flex-col justify-between items-center h-[100vh] w-[300px]  py-[30px]">
          <HeaderPc headerData={headerData} />
        </div>
      </div>
    </header>
  );
};

export default Header;
