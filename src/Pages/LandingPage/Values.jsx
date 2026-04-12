import React from "react";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faShieldHalved,
  faLeaf,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
const Values = () => {
  return (
    <div className="h-[80vh]">
      <div className="sm:text-4xl text-2xl tracking-widest mt-22 lg:mt-42 poppins font-bold flex justify-center ">
        <span className="text-orange-400 ">Shop&nbsp;</span> By Category
      </div>
      <div className="flex justify-center ">
        <div className="bg-orange-400 w-30 mt-3 mb-12 h-1"></div>
      </div>
      <div className="flex justify-between translate-y-12">
        <div>
          <div className=" text-4xl ml-75 font-semibold poppins">Trust</div>
          <div className=" flex justify-start items-right text-right text-[#686868] text-sm poppins w-100 word-wrap ">
            It is a long established fact that a reader will be distracted by
            the readable.
          </div>
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-b justify-center items-center from-orange-400 to-orange-500  w-20 h-20   flex text-center -translate-x-60 rounded-full"
        >
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: "rgb(255, 255, 255)" }}
            className="text-5xl font-white"
          />
        </motion.div>
        <div>
          <div>
            <div className=" text-4xl mr-55 text-left  font-semibold poppins">
              Food Safety
            </div>
            <div className=" flex text-[#686868] text-sm poppins justify-start items-right text-left w-100 word-wrap ">
              It is a long established fact that a reader will be distracted by
              the readable.
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-b absolute justify-center items-center -translate-y-22 from-orange-400 to-orange-500  w-20 h-20   flex text-center -translate-x-35 rounded-full"
            >
              <FontAwesomeIcon
                icon={faShieldHalved}
                style={{ color: "rgb(255, 255, 255)" }}
                className="text-5xl font-white"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="flex select-none -translate-y-28 justify-center items-center">
        <img
          src="/assets/basket-full-vegetables.webp"
          className="w-[400px] bg-cover"
          alt="vegetable-basket"
        />
      </div>
      <div className="flex justify-between -translate-y-32">
        <div>
          <div className=" text-4xl ml-20 font-semibold poppins">
            Always Fresh
          </div>
          <div className=" flex justify-start items-right text-right text-[#686868] text-sm poppins w-100 word-wrap ">
            It is a long established fact that a reader will be distracted by
            the readable.
          </div>
        </div>
        <div

          className="bg-gradient-to-b justify-center items-center from-orange-400 to-orange-500  w-20 h-20   flex text-center -translate-x-60 rounded-full"
        >
          <FontAwesomeIcon
            icon={faLeaf}
            style={{ color: "rgb(255, 255, 255)" }}
            className="text-5xl font-white"
          />
        </div>
        <div>
          <div>
            <div className=" text-4xl mr-50 text-left  font-semibold poppins">
              100% Organic
            </div>
            <div className=" flex text-[#686868] text-sm poppins justify-start items-right text-left w-100 word-wrap ">
              It is a long established fact that a reader will be distracted by
              the readable.
            </div>
            <div
              className="bg-gradient-to-b justify-center items-center -translate-y-22 from-orange-400 to-orange-500  w-20 h-20   flex text-center -translate-x-35 rounded-full"
            >
              <FontAwesomeIcon
                icon={faSeedling}
                style={{ color: "rgb(255, 255, 255)" }}
                className="text-5xl font-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
