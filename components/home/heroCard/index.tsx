import React from "react";
import { FaComment, FaCalendarAlt, FaUserGraduate } from "react-icons/fa";
import Slider from "@/components/home/heroCard/slider";
import Slider2 from "@/components/home/heroCard/Slider2";
import Vedio from "@/components/home/heroCard/vedio";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const btn = {
  visible: {
    opacity: 1,
    // x: 0,
    y: 40,
    scale: 1,
    // rotate: 10,
  },
  hidden: {
    opacity: 0,
    // x: -100, x: "-100%"
    y: -40,
    scale: 0.5,
    // rotate: 0,
  },
};
export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const control = useAnimation();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [ref, inView] = useInView();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <section className="container mx-auto ">
      <div className="h-full grid lg:grid-cols-2 gird-cols-1 gap-4">
        <div className="h-full">
          <Vedio />
        </div>
        <div className="h-full">
          <Slider2 />
        </div>
      </div>
      <Slider />
    </section>
  );
}
