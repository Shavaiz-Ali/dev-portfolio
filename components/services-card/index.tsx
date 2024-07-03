"use client";
import { servicesCard, servicesCardProps } from "@/types";
import React, { useState } from "react";
import { Card, CardContent, CardDescription } from "../ui/card";
import { MoveRight } from "lucide-react";
import { DialogDetails } from "../experience-dialog";

const ServicesCard: React.FC<servicesCardProps> = ({ service }) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  return (
    <>
      <Card
        className="px-[20px] py-[25px] rounded-[4px] border border-gray-300 hover:-translate-y-1 transition-transform duration-200 ease cursor-pointer"
        onClick={() => setOpenDialog(true)}
      >
        <CardContent className="flex flex-col items-start gap-y-3">
          <div className="space-y-2">
            <span className="text-[1rem] text-[#55527c] font-semibold">
              0{service.id}
            </span>
            <h3 className="text-[1.1rem] text-[#130F49] font-bold truncate">
              {service.title}
            </h3>
          </div>
          <CardDescription>
            <p className="line-clamp-4">{service.description}</p>
          </CardDescription>
          <div className="flex justify-center items-center gap-x-3 text-[0.9rem] text-[#130F49] font-semibold">
            <span>Read More</span>
            <MoveRight />
          </div>
        </CardContent>
      </Card>
      {openDialog ? (
        <DialogDetails
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          item={service}
        />
      ) : null}
    </>
  );
};

export default ServicesCard;
