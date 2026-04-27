import React from "react";
import emailjs from "@emailjs/browser";
import {
  faAngleLeft,
  faAngleRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {

  return (
    <section id="contact">
          <div className="w-full  bg-gray-100">
      <div className="p-12 lg:grid lg:grid-cols-4 flex flex-col   text-center    ">
        <div className="col-span-1 flex gap-5 flex-col">
          <div className="text-3xl text-[#070707] text-left inter tracking-widest font-bold">
            Gr<span className="text-orange-500">O</span>cify
          </div>
          <p className="text-left text-md poppins text-[#545454]">
            {" "}
            Brand for a high content of benificial substances. Our products are
            all fresh and healthy.
          </p>
          <p className="text-left  text-md font-medium poppins text-[#545454]">
            2026 &copy; all rights reserved
          </p>
        </div>
        <div className="col-span-1 flex flex-col gap-5">
                    <h2 className="text-2xl text-[#070707] inter tracking-widest font-bold">
            Support
          </h2>
        <a
          href="#"
        >
          Home
        </a>
        <a
          href="#category"
        >
          Category
        </a>
        <a
          href="#our-products"
        >
          Products
        </a>
        <a
          href="#reviews"
        >
          Reviews
        </a>
        </div>
        <div className="col-span-1 flex flex-col gap-5">
          <h2 className="text-2xl text-[#070707] inter tracking-widest font-bold">
            Support
          </h2>
          <div className="text-center text-md font-medium poppins text-[#545454]">
            Support Center
          </div>
          <div className="text-center text-md font-medium poppins text-[#545454]">
            Contact us
          </div>
          <div className="text-center text-md font-medium poppins text-[#545454]">
            Feedback
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-5">
          <h2 className="text-2xl text-[#070707] inter tracking-widest font-bold">
            Stay Connected
          </h2>
          <p className="text-left text-md poppins text-[#545454]">
            Questions or Feedback? We' d love to here from you.
          </p>
          <div className="flex">
            
            <input
              className="bg-white rounded-l-xl p-3 outline-none"
              type="email"
              placeholder="Email Address"

            />
            <button className="bg-orange-400 px-2 rounded-r-xl">
              {" "}
              <FontAwesomeIcon
                icon={faAngleRight}
                className="text-white text-3xl"
              />
            </button>
            <form action=""></form>
          </div>
        </div>
      </div>
    </div>
    </section>

  );
};

export default Footer;
