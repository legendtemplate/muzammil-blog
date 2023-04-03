import React from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// bottom to up
const btn = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5 },
  },
  hidden: {
    opacity: 0,
    y: 70,
  },
};
function index(props: { head: string }) {
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
    <motion.div className="heading-section relative text-center my-20" 
    ref={ref}
    variants={btn}
    initial="hidden"
    animate={control}
    >
      <h2 className="mb-4 font-bold text-5xl text-orange-400">{props.head}</h2>
    </motion.div>
  );
}

export default index;
