import React from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";

// bottom to up
const head = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
  hidden: {
    opacity: 0,
    x: -50,
  },
};
const second = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
  hidden: {
    opacity: 0,
    y: 50,
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
    <div>
      <div className="py-7 bg-white">
        <div className="container mx-auto px-8 relative">
          <motion.div className="section-header"    ref={ref}
      variants={head}
      initial="hidden"
      animate={control}
      >
            <h1 className="py-4 font-medium text-4xl">Contact Us</h1>
            <h2 className="pb-6 font-thin text-lg"> For Any Query</h2>
          </motion.div>
          <div className="row align-items-center  gap-7 flex lg:flex-row flex-col">
            <motion.div className="w-full" 
              ref={ref}
              variants={second}
              initial="hidden"
              animate={control}>
              <div 
              className="contact-info relative flex p-8 border-2 border-solid border-gray-100 mb-7 transition-all hover:border-transparent ">
                <div className="contact-icon relative w-12 h-12 flex justify-center items-center border-2 border-solid border-gray-300 ">
                  <Image src="/question/location.png"   
                   height={999}
        width={999}
        alt=""
        title=""/>
                </div>
                <div className="contact-text relative flex flex-col pl-4">
                  <h3 className="text-gray-400 font-normal text-xl">
                    Our Head Office
                  </h3>
                  <p className="m-0 text-base"> TOBA TEK SINGH, PAKISTAN</p>
                </div>
              </div>
              <div 
              className="contact-info relative flex p-8 border-2 border-solid border-gray-100 mb-7 transition-all hover:border-transparent ">
                <div className="contact-icon relative w-12 h-12 flex justify-center items-center border-2 border-solid border-gray-300 ">
                  <Image src="/question/phone.png" 
                     height={90}
                     width={90}
                     alt=""
                     title="" />
                </div>
                <div className="contact-text relative flex flex-col pl-4">
                  <h3 className="text-gray-400 font-normal text-xl">
                    Any Information
                  </h3>
                  <p className="m-0 text-base">Call for Help</p>
                </div>
              </div>
              <div  className="contact-info relative flex p-8 border-2 border-solid border-gray-100 mb-7 transition-all hover:border-transparent ">
                <div className="contact-icon relative w-12 h-12 flex justify-center items-center border-2 border-solid border-gray-300 ">
                  <Image src="/question/mail.png" 
                     height={90}
                     width={90}
                     alt=""
                     title=""
                  />
                </div>

                <div className="contact-text relative flex flex-col pl-4">
                  <h3 className="text-gray-400 font-normal text-xl">
                    Email for Information
                  </h3>
                  <p className="m-0 text-base">topperacademy82@gmail.com</p>
                </div>
              </div>
            </motion.div>
            <div className="w-full">
              <div className="contact-form border-solid border-2 border-gray-200 mb-7 p-7 relative transition-all">
                <div id="success"></div>
                <motion.form method="post" autoComplete="off" name="google-sheet" 
                    ref={ref}
                    variants={second}
                    initial="hidden"
                    animate={control}>
                  <div className="form-group mb-4" >
                   <input
                      type="text"
                      name="name"
                      className="form-control bg-none outline-none rounded-none mb-5 p-4 block w-full text-base font-normal leading-6 text-gray-400 border-2 border-solid border-gray-100 "
                      placeholder="Your Name *"
                    />
                  </div>
                  <div className="form-group mb-4" >
                    <input
                      type="text"
                      name="email"
                      className="form-control bg-none outline-none rounded-none mb-5 p-4 block w-full text-base font-normal leading-6 text-gray-400 border-2 border-solid border-gray-100 "
                      placeholder="Your Email *"
                    />
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      name="subject"
                      className="form-control bg-none outline-none rounded-none mb-5 p-4 block w-full text-base font-normal leading-6 text-gray-400 border-2 border-solid border-gray-100 "
                      placeholder="Your Subject *"
                    />
                  </div>
                  <div className="form-group mb-4">
                    <textarea
                      name="comment"
                      className="form-control bg-none outline-none rounded-none mb-5 p-4 block w-full text-base font-normal leading-6 text-gray-400 border-2 border-solid border-gray-100 h-24"
                      id="message"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <div className="form-group my-4 pt-4">
                    <Link
                      href="/download-cv"
                      className="md:px-10 w-full block text-center px-4 md:py-4 py-3 bg-orange-300 text-white rounded-md mr-4 font-bold hover:bg-white hover:outline hover:outline-orange-300 hover:text-orange-300 hover:outline-2"
                    >
                      Send Inquiry
                    </Link>
                  </div>
                </motion.form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
