import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import Image from "next/image";
import { MdOutlineDateRange } from "react-icons/md";
import { FaReadme } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { RiArrowRightUpLine } from "react-icons/ri";
import { X } from "lucide-react";

export function DialogDetails({ openDialog, setOpenDialog, item }: any) {
  console.log(item)
  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogContent className="dialog-content  outline-none w-[90%] sm:max-w-[725px] max-h-[550px] overflow-y-auto sm:p-10 p-7">
        <div className="relative w-full h-[200px] xl:h-[400px] sm:h-[350px]">
          <Image
            src={item.banner ? item.banner : "/experience/mainbanner.jpg"}
            alt="banner image"
            // loader={"loading ..."}
            // sizes="(max-hight: 500px) 100vw, 33vw"
            loading="lazy"
            // height={500}
            // width={500}
            fill
            className="w-full h-full rounded-md"
            // style={{ position: "static" }}
          />
        </div>
        <DialogHeader className="text-start space-y-4 mt-5">
          {item.duration ? (
            <div className="flex justify-center items-center h-8 w-28 bg-black rounded-sm">
              <p className="text-[12px] font-medium font-sans text-[#ffaf5e]">
                {item.duration} <span>-</span>{" "}
                <span>{item.endDate ? item.endDate : "Present"}</span>
              </p>
            </div>
          ) : (
            <div className="flex items-center gap-4 flex-wrap">
              {item.skills ? (
                item.skills.map((skill, index) => (
                  <div
                    className="flex justify-center items-center h-8 w-auto px-4 bg-black rounded-sm text-[#ffaf5e]"
                    key={index}
                  >
                    <span> {skill}</span>
                  </div>
                ))
              ) : (
                <div className="flex justify-center items-center  text-[#ffaf5e] sm:gap-x-3 gap-2">
                  <div className="flex justify-center items-center h-8 w-auto px-4 bg-black rounded-sm text-[#ffaf5e] sm:gap-x-3 gap-x-1">
                    <MdOutlineDateRange />
                    <span className="text-[14px] font-[400] text-nowrap">{item.date}</span>
                  </div>
                  <div className="flex justify-center items-center h-8 w-auto px-4 bg-black rounded-sm text-[#ffaf5e] sm:gap-x-3 gap-x-1">
                    <FaReadme />
                    <span className="text-[14px] font-[400] text-nowrap">{item.readTime}</span>
                  </div>
                </div>
              )}
            </div>
          )}
          <div className="space-y-1">
            <span className="text-[1rem] text-[#55527c] font-semibold">
              {item.company}
            </span>
            <h3 className="text-xl text-[#130F49] font-bold">{item.title}</h3>
          </div>
          <DialogDescription>
            <p className="text-[14px] text-[#9998b1] font-serif leading-7">
              {item.description}
            </p>
          </DialogDescription>
        </DialogHeader>
        {item.link ? (
          <DialogFooter>
            <div className="flex flex-wrap justify-between items-center w-full sm:gap-0 gap-y-3">
              <div className="flex justify-center items-center gap-x-6">
                <div className="flex justify-center items-center gap-x-2 text-nowrap">
                  <FaUser />
                  <span className="text-sm sm:font-medium text-[#130F49] text-nowrap">
                    {item.views} views
                  </span>
                </div>
                <div className="flex justify-center items-center gap-x-2 text-nowrap">
                  <FaReadme />
                  <span className="text-sm sm:font-medium text-[#130F49]">
                    {item.reads} reads
                  </span>
                </div>
              </div>
              <a
                href={item.link}
                target="_blank"
                className="text-[#130F49] sm:font-semibold font-medium hover:underline flex justify-center items-center gap-x-1"
              >
                <span className="sm:text-md text-[14px] text-nowrap">Check Out Blog</span>
                <RiArrowRightUpLine className=""/>
              </a>
            </div>
          </DialogFooter>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
