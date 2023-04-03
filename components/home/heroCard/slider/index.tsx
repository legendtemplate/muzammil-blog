import Link from "next/link";
import React from "react";

export default function index() {
  return (
    <div className="news-tracker-wrap bg-gray-100 p-4 mt-4 mb-4">
      <h6>
        <span className="text-red-500 font-semibold text-xl">Breaking News:</span>{" "}
        <Link href="#" className="font-bold text-lg">Astronomy Binoculars A Great Alternative</Link>
      </h6>
    </div>
  );
}
