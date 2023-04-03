import React from "react";

export default function index() {
  return (
    <>
      <div className="responsive-map overflow-hidden relative h-0 pb-96">
        <iframe
        className="left-0 top-0 h-full w-full absolute"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889"
          width="600"
          height="450"
          style={{border:0}}
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
