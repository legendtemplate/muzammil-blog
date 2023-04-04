import React from "react";

export default function index() {
  return (
    <section className="section-team py-20">
      <div className="container mx-auto px-8">
        <div className="row justify-center text-center">
          <div className="col-md-8 col-lg-6">
            <div className="header-section mb-12">
              <h3 className=" mb-6 text-base font-medium text-red-500">Our Experts</h3>
              <h2 className="font-bold text-5xl">Let's meet with our team members</h2>
            </div>
          </div>
        </div>
        <div className="row flex flex-wrap justify-center items-center">
          {secondcolumn.map((navItem) => (
            <div className="lg:w-3/12 md:w-6/12 w-ful px-3">
              <div className="single-person mt-7 p-7 bg-slate-100 rounded">
                <div className="person-image relative mb-12 rounded-full">
                  <img
                  className="w-full rounded-full"
                    src={navItem.img}
                    alt={navItem.name}
                    title={navItem.name}
                  />
                  <span className="icon absolute bottom-0 left-1/2 inline-block w-14 h-14 leading-10 text-center text-2xl text-white rounded-full">
                    <i className="fab fa-html5"></i>
                  </span>
                </div>
                <div className="person-info">
                  <h3 className="mb-3 text-2xl text-black font-bold text-center">{navItem.name}</h3>
                  <span className="uppercase text-base text-red-500">{navItem.speciality}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface NavItem {
  id: number;
  speciality: string;
  name: string;
  img: string;
}

const secondcolumn: Array<NavItem> = [
  {
    id: 1,
    speciality: "Web Developer ",
    name: "Muhammad Muzammil Safdar",
    img: "https://cdn-icons-png.flaticon.com/512/1946/1946429.png",
  },
  {
    id: 2,
    speciality: "Graphic Designer",
    name: "Muhammad Rashid Ali",
    img: "https://cdn-icons-png.flaticon.com/512/1946/1946429.png",
  },
  {
    id: 3,
    speciality: "Data Entry",
    name: "Muhammad Imran Safdar",
    img: "https://cdn-icons-png.flaticon.com/512/1946/1946429.png",
  },
  {
    id: 4,
    speciality: "Vedio Editing",
    name: "Muhammad Saim Saeed",
    img: "https://cdn-icons-png.flaticon.com/512/1946/1946429.png",
  },
];
