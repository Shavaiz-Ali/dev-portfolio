"use client";

import Image from "next/image";
import React, { Fragment, useState } from "react";
import Link from "next/link";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { HeaderMobileProps } from "@/types";
const HeaderPc: React.FC<HeaderMobileProps> = ({ headerData }) => {
  // eslint-disable-next-line react/jsx-key
  const socialIcons = [<FaFacebookF />, <FaLinkedinIn />, <FaTwitter />];
  const [activeTab, setActiverTab] = useState(1);
  return (
    <Fragment>
      <div className="flex flex-col justify-center items-center gap-y-1">
        <div className="relative h-[80px] w-[80px] rounded-full border-[3px] border-[#a5a6ff]">
          <Image
            className="absolute w-full h-full object-contain object-center rounded-full"
            src="/profile.png"
            alt="profile image"
            fill
          />
        </div>
        <div className="relative flex justify-center items-center">
          <h1 className="text-xl font-bold text-[#130F49]">Shavaiz Ali</h1>
          <span className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] font-Gwendolyn text-5xl text-[#55527c44]">
            ShavaizAli
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-[21px]">
        {headerData.map((item) => (
          <Link
            className={`text-[14px] leading-[30px] text-[400] ${
              activeTab === item.id ? "text-[#a5a6ff]" : "text-[#55527c]"
            }`}
            href={item.path}
            key={item.id}
            onClick={() => setActiverTab(item.id)}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center gap-y-3">
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
    </Fragment>
  );
};

export default HeaderPc;
