"use client";
import { Play } from "lucide-react";
import React, { Fragment, useState } from "react";
import VideoPlayer from "../video-player";

const IntroductionVideoCard = () => {
  const [playVideo, setPlayVideo] = useState<boolean>(false);
  return (
    <Fragment>
      <div
        className="relative w-full h-[280px] sm:h-[320px] md:h-[420px] bg-black rounded-md overflow-hidden cursor-pointer group"
        onClick={() => setPlayVideo(true)}
      >
        <div className="bg-[url('/video-poster.jpg')] bg-center bg-cover group-hover:scale-110 duration-200 h-full w-full flex justify-center items-center">
        <div className="absolute top-0 left-0 bg-black h-full w-full opacity-35 z-[999] pointer-events-none"></div>
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] h-16 sm:h-24 sm:w-24 w-16 rounded-full flex justify-center items-center bg-white z-[999999]">
            <svg
              width="15"
              height="18"
              viewBox="0 0 15 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="null"
              className="svg replaced-svg"
            >
              <path
                d="M14.4462 10.6965C14.3614 10.7835 14.0414 11.1555 13.7433 11.4615C11.9956 13.386 7.43643 16.536 5.05017 17.4975C4.68777 17.652 3.77155 17.979 3.28203 18C2.81296 18 2.36581 17.892 1.93911 17.673C1.40721 17.367 0.980516 16.8855 0.746712 16.317C0.596201 15.9225 0.362397 14.742 0.362397 14.721C0.128592 13.4295 0 11.331 0 9.012C0 6.8025 0.128592 4.7895 0.320019 3.4785C0.341939 3.4575 0.575743 1.9905 0.831466 1.488C1.30054 0.57 2.21676 0 3.19727 0H3.28203C3.9206 0.0225 5.26352 0.5925 5.26352 0.6135C7.52119 1.5765 11.9752 4.572 13.7652 6.5625C13.7652 6.5625 14.2694 7.074 14.4886 7.3935C14.8305 7.8525 15 8.421 15 8.9895C15 9.624 14.8086 10.215 14.4462 10.6965"
                fill="#5D3BEE"
              ></path>
            </svg>
          </div>
        </div>
        <div className="absolute right-4 bottom-4 h-12 w-32 z-[999999] flex justify-center items-center bg-white text-gray-600 text-md font-semibold">
          <span>Intro Video</span>
        </div>
      </div>
      {playVideo && (
        <VideoPlayer playVideo={playVideo} setPlayVideo={setPlayVideo} />
      )}
    </Fragment>
  );
};

export default IntroductionVideoCard;
