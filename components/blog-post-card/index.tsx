/* eslint-disable @next/next/no-img-element */
"use client";

import { blogData } from "@/utils";
import React, { useState } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { DialogDetails } from "../experience-dialog";
const BlogPostCard = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [singleBlogData, setSingleBLogData] = useState<null | object>(null);

  const handleClick = (id: number) => {
    // console.log(id);
    const data = blogData[id];
    setSingleBLogData(data);
    setOpenDialog(true);
  };
  return (
    <>
      <div className="w-full sm:space-y-5 space-y-7">
        {blogData.map((blog, index) => (
          <>
            <div
              className="flex sm:flex-row flex-col items-start gap-4 w-full sm:h-[180px]"
              key={blog.id}
            >
              <img
                className=" h-full sm:w-auto w-full object-cover rounded-md"
                src={blog.banner}
                alt=""
              />
              <div className="flex flex-col gap-y-2">
                <h3 className="text-lg font-medium text-[#130F49] sm:line-clamp-none line-clamp-2">
                  {blog.title}
                </h3>
                <p className=" text-[14px] text-[#55527c] font-medium line-clamp-2 sm:line-clamp-3 leading-5">
                  {blog.description}
                </p>
                <div className="flex flex-wrap justify-between items-center w-full gap-3">
                  <div className="flex justify-center items-center gap-x-3 mt-3">
                    <MdOutlineDateRange />
                    <span>{blog.date}</span>
                  </div>
                  <button
                    onClick={() => handleClick(index)}
                    className="text-[#130F49] sm:font-semibold font-medium hover:underline"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      {openDialog ? (
        <DialogDetails
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          item={singleBlogData}
        />
      ) : null}
    </>
  );
};

export default BlogPostCard;
