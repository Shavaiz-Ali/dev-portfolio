"use client"
import Link from "next/link";
import React, { useState } from "react";
import { Sheet, SheetClose, SheetContent, SheetPortal, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { AlignJustify } from "lucide-react";
import { HeaderMobileProps } from "@/types";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const HeaderMobile: React.FC<HeaderMobileProps> = ({ headerData }) => {
  const [openSideBar, setOpenSideBar] = useState(false)
  // eslint-disable-next-line react/jsx-key
  const socialIcons = [<FaFacebookF />, <FaLinkedinIn />, <FaTwitter />];
  return (
    <Sheet open={openSideBar} onOpenChange={setOpenSideBar}>
      <SheetTrigger asChild>
        <Button className="xl:hidden bg-transparent text-[#000000] hover:bg-transparent" onClick={() => setOpenSideBar(true)}>
          <AlignJustify className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full">
        {/* <Link href={"#"} className="mr-6 ">
          <h1 className="text-4xl text-[#A5A6FF] font-bold">S.Ali</h1>
        </Link> */}
        
        <div className="flex flex-col justify-between py-6 h-full"> 
          <div className="flex flex-col gap-2 ">
            <div className="relative h-[80px] w-[80px] rounded-full border-[3px] border-[#a5a6ff]">
              <Image
                className="absolute w-full h-full object-contain object-center rounded-full"
                src="/profile.png"
                alt="profile image"
                fill
              /> 
            </div>
            {headerData.map((menuItem) => (
              <Link
                href={menuItem.path}
                className="w-full items-center py-2 text-lg font-semibold "
                key={menuItem.id}
                onClick={() =>  setOpenSideBar(false)}
              >
                {menuItem.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-center gap-y-3">
            <div className="flex justify-center items-center gap-x-4">
              {socialIcons.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center h-10 w-10 rounded-full bg-gray-100 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="text-center text-[14px] w-56 text-[#55527c]">
              Copyright © 2024 Shavaiz Ali. All rights reserved.{" "}
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default HeaderMobile;
