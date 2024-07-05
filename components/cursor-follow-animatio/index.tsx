"use client";
import gsap from "gsap";
import { useEffect, useState } from "react";

const CursorFollowAnimation = () => {
  const [cursorLink, setCursorLink] = useState(false);
  useEffect(() => {
    gsap.set(".ball", { xPercent: -50, yPercent: -50 });
    let targets = gsap.utils.toArray(".ball");

    const handleMouseMove = (e) => {
      gsap.to(targets, {
        duration: 0.5,
        x: e.clientX,
        y: e.clientY,
        ease: "",
        overwrite: "auto",
        stagger: 0.05,
      });

      // Check the cursor style of the element under the cursor
      const elementUnderCursor = document.elementFromPoint(
        e.clientX,
        e.clientY
      );
      if (elementUnderCursor) {
        const cursorStyle = window.getComputedStyle(elementUnderCursor).cursor;
        if (cursorStyle === "pointer") {
          setCursorLink(true);
        } else {
          setCursorLink(false);
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="">
        <div
          className={`ball ${
            cursorLink ? "h-16 w-16 bg-[#a5a6ff] opacity-30 transition-all duration-150 ease-linear" : "border-2 border-[#a5a6ff] w-8 h-8"
          } fixed top-0 left-0 z-[9999999] flex justify-center items-center rounded-full`}
          style={{ pointerEvents: "none" }}
        >
          <div className={` ${cursorLink && "hidden"} h-2 w-2 rounded-full bg-[#a5a6ff]`}></div>
        </div>
      </div>
    </>
  );
};

export default CursorFollowAnimation;
