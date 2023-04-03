import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import CountUp from 'react-countup';

const third = {
  visible: {
  opacity: 1,y: 0,transition: { duration: 1 },},
  hidden: {opacity: 0,y: 70,},
};

export default function counter() {
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
    <section className="ftco-section ftco-counter img bg-[url('/newletter-bg.png')] imgc bg-fixed">
      <div className="container py-28 mx-auto px-4 text-center">
        <div className="row">
          <div className=" flex flex-wrap ">
            <motion.div
                ref={ref}
                variants={third}
                initial="hidden"
                animate={control} className="block-18 lg:w-3/12 md:w-6/12 mb-8 px-2 flex ">
              <div className="icon flex aitems-center justify-center w-16 h-16 bg-white rounded"></div>
              <div className="text pl-3 flex flex-col justify-center items-start">
                <strong className="number text-3xl font-bold text-white">
                   <CountUp end={2023} duration={5}/>
                </strong>
                <span className="block text-base leading-4 uppercase font-normal text-white">ESTABLISHED SINCE</span>
              </div>
            </motion.div>
            <motion.div
                ref={ref}
                variants={third}
                initial="hidden"
                animate={control} className="block-18 lg:w-3/12 md:w-6/12 mb-8 px-2 flex ">
              <div className="icon flex aitems-center justify-center w-16 h-16 bg-white rounded"></div>
              <div className="text pl-3 flex flex-col justify-center items-start">
                <strong className="number text-3xl font-bold text-white">
                   <CountUp end={48} duration={5}/>
                </strong>
                <span className="block text-base leading-4 uppercase font-normal text-white"> Total Project </span>
              </div>
            </motion.div>
            <motion.div
                ref={ref}
                variants={third}
                initial="hidden"
                animate={control} className="block-18 lg:w-3/12 md:w-6/12 mb-8 px-2 flex ">
              <div className="icon flex aitems-center justify-center w-16 h-16 bg-white rounded"></div>
              <div className="text pl-3 flex flex-col justify-center items-start">
                <strong className="number text-3xl font-bold text-white">
                   <CountUp end={48} duration={5}/>
                </strong>
                <span className="block text-base leading-4 uppercase font-normal text-white"> SATISFIED CLIENTS</span>
              </div>
            </motion.div>
            <motion.div
                ref={ref}
                variants={third}
                initial="hidden"
                animate={control} className="block-18 lg:w-3/12 md:w-6/12 mb-8 px-2 flex ">
              <div className="icon flex aitems-center justify-center w-16 h-16 bg-white rounded"></div>
              <div className="text pl-3 flex flex-col justify-center items-start">
                <strong className="number text-3xl font-bold text-white">
                   <CountUp end={5} duration={5}/>
                </strong>
                <span className="block text-base leading-4 uppercase font-normal text-white"> 
PROFESSIONAL TEAM</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
