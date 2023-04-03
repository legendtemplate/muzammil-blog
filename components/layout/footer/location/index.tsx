import React from "react";
import Link from "next/link";
import Image from "next/image";

function location() {
  return (
    <ul>
      <li className="mb-4 flex items-center">
        <span className="mr-2">
          <Image
            src="/question/location.png"
            height="30"
            width="30"
            alt="location"
            title="location"
          />
        </span>
        <span className="text-white">Toba Tek Singh, Pakistan.</span>
      </li>
      <li className="mb-4 flex">
        <span className="mr-2">
          <Image
            src="/question/phone.png"
            height="30"
            width="30"
            alt="phone"
            title="phone"
          />
        </span>
        <span className="text-white"> +92 314 4878 266</span>
      </li>
      <li className="mb-4 flex">
        <span className="mr-2">
          <Image
            src="/question/mail.png"
            height="30"
            width="30"
            alt="mail"
            title="mail"
          />
        </span>
        <span className="text-white"> mmuzammiloff@gmail.com</span>
      </li>
    </ul>
  );
}

export default location;
