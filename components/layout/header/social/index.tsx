import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { Tooltip } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// bottom to up
const btn = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5 },
  },
  hidden: {
    opacity: 0,
    x: 70,
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
    <motion.div className="social flex items-start justify-start  dark:text-white text-black">
      <motion.div
        className="px-2"
        ref={ref}
        variants={btn}
        initial="hidden"
        animate={control}
      >
        <Tooltip hasArrow label="Facebook" bg="red.500" closeDelay={200}>
          <Link href="https://web.facebook.com/profile.php?id=100090769396207" target="_blank">
            <FaFacebookF />
          </Link>
        </Tooltip>
      </motion.div>
      <motion.div
        className=" px-2"
        ref={ref}
        variants={btn}
        initial="hidden"
        animate={control}
      >
        <Tooltip hasArrow label="You Tube" bg="red.500" closeDelay={200}>
          <Link href="https://www.youtube.com/channel/UCrtnHcee1Dhk2ew2oKsxQ8g?sub_confirmation=1" target="_blank">
            <FaYoutube />
          </Link>
        </Tooltip>
      </motion.div>
      <motion.div
        className=" px-2"
        ref={ref}
        variants={btn}
        initial="hidden"
        animate={control}
      >
        <Tooltip hasArrow label="Github" bg="red.500" closeDelay={200}>
          <Link href="https://github.com/muzammil3278" target="_blank">
            <FaGithub />
          </Link>
        </Tooltip>
      </motion.div>
      <motion.div
        className=" px-2"
        ref={ref}
        variants={btn}
        initial="hidden"
        animate={control}
      >
        <Tooltip hasArrow label="Linkedin" bg="red.500" closeDelay={200}>
          <Link href="https://www.linkedin.com/in/muhammad-muzammil-safdar-2b1851267/" target="_blank">
            <FaLinkedin />
          </Link>
        </Tooltip>
      </motion.div>
    </motion.div>
  );
}
