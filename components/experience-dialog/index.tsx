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

import { X } from "lucide-react";

export function DialogDetails({ openDialog, setOpenDialog, item }: any) {
  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogContent className="dialog-content  outline-none w-[90%] sm:max-w-[725px] max-h-[550px] overflow-y-auto sm:p-10 p-7">
        <div className="relative w-full h-[200px] xl:h-[400px] sm:h-[350px]">
          <Image
            src={"/experience/mainbanner.jpg"}
            alt="banner image"
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
          <div className="flex justify-center items-center h-8 w-28 bg-black rounded-sm">
            <p className="text-[12px] font-medium font-sans text-[#ffaf5e]">
              {item.duration} <span>-</span>{" "}
              <span>{item.endDate ? item.endDate : "Present"}</span>
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-[1rem] text-[#55527c] font-semibold">
              {item.company}
            </span>
            <h3 className="text-xl text-[#130F49] font-bold">{item.title}</h3>
          </div>
          <DialogDescription>
            <p className="text-[14px] text-[#9998b1] font-serif leading-7">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              explicabo eligendi quod repellat ipsa ut quisquam quasi dolorum
              iste neque unde rem ratione distinctio dicta similique nemo, omnis
              tempora et, eum porro necessitatibus sequi. Soluta est a,
              molestiae inventore error blanditiis hic fuga accusantium iure
              asperiores quam officia sit, dicta vero natus totam deserunt.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae eligendi porro saepe animi? Qui cupiditate animi eum
              consectetur perferendis fugit!
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
