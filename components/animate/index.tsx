"use client";
import AOS from "aos";
// import "aos/"
import { useEffect } from "react";
import 'aos/dist/aos.css';
const Animate = ({ children }: any) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // default duration for animations
      easing: "ease", // default easing for animations
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);
  return <>{children}</>;
};

export default Animate;
