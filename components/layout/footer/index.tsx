import Link from "next/link";
import Location from "@/components/layout/footer/location";
import Social from "@/components/layout/footer/Social";
// import Para from "@/components/home/hero/comp/para";
import Logo from "@/components/layout/navbar/logo";
import { Tag, useColorModeValue } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// bottom to up
const btn = {
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
    <>
      <footer className="bg-gray-800 pt-12 bg-[url('/footer/footer-bg.webp')] img bg-top ">
        <div className="container lg:px-10 md:px-7 sm:px-4 px-2 mx-auto flex justify-center items-center flex-wrap ">
          <div className="w-full mb-8 md:w-6/12 lg:w-3/12 ">
            <div className="logo flex justify-center md:justify-start ">
              <Logo />
            </div>
            <div className="para mt-6 text-white ">
              <p className="mb-4 pb-4 w-100 dark:text-white text-gray-700">
                We use latest technology for the latest world. We are always
                creative and and always lisen our customers and we mix these two
                things and make best design. If our customer has any problem and
                we are always happy to help then.
              </p>
            </div>
            <div className="social mt-6">
              <motion.h4
                className="text-orange-500 mb-4 text-xl font-bold"
                ref={ref}
                variants={head}
                initial="hidden"
                animate={control}
              >
                Follow Me
              </motion.h4>
              <Social />
            </div>
          </div>
          <div className="w-full mb-8 md:w-6/12 lg:w-3/12 md:pl-10 pl-0 ">
            <motion.h2
              className="text-orange-500 mb-6 text-2xl font-semibold"
              ref={ref}
              variants={head}
              initial="hidden"
              animate={control}
            >
              Categories
            </motion.h2>
            <ul>
              {firstcolumn.map((navItem) => (
                <motion.li
                  className="mb-3 text-base text-white"
                  key={navItem.id}
                  ref={ref}
                  variants={btn}
                  initial="hidden"
                  animate={control}
                >
                  <Link href={navItem.href}>{navItem.label}</Link>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="w-full mb-8 md:w-6/12 lg:w-3/12">
            <motion.h2
              className="text-orange-500 mb-6 text-2xl font-semibold"
              ref={ref}
              variants={head}
              initial="hidden"
              animate={control}
            >
              Tags
            </motion.h2>
          
            <ul className="p-1">
              {secondcolumn.map((navItem) => (
                <motion.li
                  className="inline-block ml-3 mb-4"
                  key={navItem.id}
                  ref={ref}
                  variants={btn}
                  initial="hidden"
                  animate={control}
                >
                  <Link className="px-2 py-1 border-2 border-solid border-red-500 text-red-500 hover:text-white hover:bg-red-500 transition-all" href={navItem.href}>{navItem.label}</Link>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="w-full mb-8 md:w-6/12 lg:w-3/12 ">
            <motion.h2
              className="text-orange-500  mb-7 text-2xl font-semibold "
              ref={ref}
              variants={head}
              initial="hidden"
              animate={control}
            >
              Posts
            </motion.h2>
            <motion.div
              ref={ref}
              variants={btn}
              initial="hidden"
              animate={control}
            >
              <Location />
            </motion.div>
          </div>
        </div>
        <div className="text-center bg-gray-900 text-white py-6">
          <div className="container lg:px-10 md:px-7 sm:px-4 px-2 mx-auto ">
            <p>
              Copyright ©2023 All rights reserved | This template is made with
              by
              <span className="text-orange-400">
                <Link href="/"> Muzammil Safdar</Link>
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

interface NavItem {
  id: number;
  label: string;
  href: string;
}

const firstcolumn: Array<NavItem> = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "About",
    href: "/about",
  },
  {
    id: 3,
    label: "Contact",
    href: "/contact",
  },
  {
    id: 3,
    label: "Portofolio",
    href: "/portofolio",
  },
  {
    id: 3,
    label: "Services",
    href: "/services",
  },
  {
    id: 3,
    label: "Blogs",
    href: "/blog",
  },
  {
    id: 3,
    label: "Skill",
    href: "/skills",
  },
];

const secondcolumn: Array<NavItem> = [
  {
    id: 1,
    label: "Web Development",
    href: "/web",
  },
  {
    id: 2,
    label: "Graphic Design",
    href: "/design",
  },
  {
    id: 3,
    label: "Data Entry",
    href: "/data",
  },
];
