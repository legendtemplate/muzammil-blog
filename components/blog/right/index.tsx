import React from "react";
import Today from "@/components/blog/right/today";
import Coding from "@/components/blog/right/coding";
import HowTo from "@/components/blog/right/howTo";
import TheBest from "@/components/blog/right/theBest";
import Technology from "@/components/blog/right/technology";
import Banner1 from "@/components/blog/right/banner/banner1";
import Banner2 from "@/components/blog/right/banner/banner2";
import Banner3 from "@/components/blog/right/banner/banner3";

export default function index() {
  return (
    <>
      <div className="lg:mr-4 mr-0">
        <Today />
        <Banner1 />
        <HowTo />
        <Banner2 />
        <TheBest />
        <Banner3 />
        <Technology />
      </div>
    </>
  );
}
