"use client";

import { experienceCardData, experienceCardDataProps } from "@/types";
import { Card, CardContent, CardHeader } from "../ui/card";
import { useState } from "react";
import { DialogDetails } from "../experience-dialog";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";

const ExperinceCard = ({ item }: any) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  return (
    <>
      <Card
        className="border-0 rounded-[2px] shadow-sm p-6 cursor-pointer lg:hover:-translate-y-2 transition-transform ease-in-out duration-300"
        onClick={() => setOpenDialog(true)}
      >
        <CardHeader className="flex flex-row items-start justify-between w-full space-y-0 py-4">
          <div className="flex flex-col gap-y-1">
            <p className="text-[16px] font-semibold font-sans text-[#ffaf5e]">
              -{item.duration} <span>-</span>{" "}
              <span>{item.endDate ? item.endDate : "Present"}</span>
            </p>
            <h3 className="text-xl text-[#130F49] font-bold">{item.title}</h3>
          </div>
          <div className="self-start">
            <span className="text-[1rem] text-[#55527c] font-semibold">
              -{item.company}
            </span>
          </div>
        </CardHeader>
        <CardContent className="">
          <p className="text-[14px] text-[#9998b1] font-serif leading-7 line-clamp-3">
            {item.description}
          </p>
        </CardContent>
      </Card>
      {openDialog ? (
        <DialogDetails
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          item={item}
        />
      ) : null}
    </>
  );
};

export default ExperinceCard;
