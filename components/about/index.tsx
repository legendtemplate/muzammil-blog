import React from "react";
import CountUp from "react-countup";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// bottom to up
const btn = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
  hidden: { opacity: 0, x: -70 },
};
const third = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
  hidden: { opacity: 0, x: 70 },
};
const second = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
  hidden: { opacity: 0, y: 70 },
};

export default function about() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <section className="py-10">
      <div className="container px-8 mx-auto">
        <div className="row flex flex-wrap ">
          <div className=" flex items-stretch lg:basis-1/2 basis-full">
            <div className="img flex items-center align-self-stretch justify-center relative">
              <motion.div
                ref={ref}
                variants={btn}
                initial="hidden"
                animate={control}
                className="year-stablish text-center absolute top-0 left-0 bg-orange-400 md:p-5 p-3 text-white"
              >
                <div className="text">
                  <strong
                    className="number pr-1 md:text-4xl text-2xl"
                    data-number="42"
                  >
                    <CountUp end={5} duration={5} />
                  </strong>
                  <span>
                    Year
                    <br /> Experienced
                  </span>
                </div>
              </motion.div>
              <motion.div
                ref={ref}
                variants={second}
                initial="hidden"
                animate={control}
                className="img-2 flex items-center justify-center lg:p-5 p-0 w-full"
              >
                <Image
                  src="/about.webp"
                  height="999"
                  width="999"
                  alt="muzammil portofolio"
                  title="muzammil portofolio"
                />
              </motion.div>
            </div>
          </div>
          <div className=" p-4 lg:basis-1/2 basis-full">
            <div className="row justify-content-start pb-3">
              <motion.div
                ref={ref}
                variants={third}
                initial="hidden"
                animate={control}
                className="col-md-12 heading-section"
              >
                <span className=" text-sm block mb-1 uppercase font-semibold text-orange-300 b-3">
                  Welcome to my portfolio{" "}
                </span>
                <h2 className="mb-4 text-4xl font-semibold  text-black">
                  MUHAMMAD MUZAMMIL SAFDAR <br />
                  <span className="text-lg font-normal ">
                    JUNIOR FRONTEND WEB DEVELOPER
                  </span>
                </h2>
                <p className="py-4 text-gray-700">
                  We use latest technology for the latest world. We are always
                  creative and and always lisen our customers and we mix these
                  two things and make best design. If our customer has any
                  problem and we are always happy to help then.
                </p>

                <p className="pt-4">
                  <Link
                    href="/download-cv"
                    className="md:px-10 px-4 md:py-4 py-3 text-white border-solid bg-orange-300 border-white font-bold rounded-md hover:text-orange-300 transition-all hover:bg-gray-100 hover:bottom-2 hover:border-solid hover:border-orange-400"
                  >
                    Download CV
                  </Link>
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
