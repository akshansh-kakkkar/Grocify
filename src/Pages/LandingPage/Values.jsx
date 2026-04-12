import React from "react";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faShieldHalved,
  faLeaf,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const ValueItem = ({ icon, title, description, reverse = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`flex flex-col ${reverse ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'} items-center text-center gap-4`}
  >
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="bg-gradient-to-b from-orange-400 to-orange-500 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full shadow-xl"
    >
      <FontAwesomeIcon icon={icon} className="text-3xl sm:text-4xl text-white" />
    </motion.div>
    <div className="flex flex-col gap-2">
      <h3 className="text-2xl sm:text-3xl font-bold poppins text-[#070707]">{title}</h3>
      <p className="text-sm sm:text-base text-[#686868] max-w-xs poppins leading-relaxed">
        {description}
      </p>
    </div>
  </motion.div>
);

const Values = () => {
  return (
    <section className="py-20 px-4 sm:px-10 lg:px-20 overflow-hidden">
      <div className="flex flex-col items-center mb-16">
        <h2 className="sm:text-4xl text-3xl tracking-widest poppins font-bold text-center">
          Our <span className="text-orange-400">Values</span>
        </h2>
        <div className="bg-orange-400 w-24 mt-4 h-1 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center max-w-7xl mx-auto">
        <div className="flex flex-col gap-12 lg:gap-24 order-2 lg:order-1">
          <ValueItem
            icon={faHeart}
            title="Trust"
            description="Built on years of reliability and commitment to our customers' satisfaction."
            reverse={true}
          />
          <ValueItem
            icon={faShieldHalved}
            title="Food Safety"
            description="Strict quality controls ensuring every product meets the highest safety standards."
            reverse={true}
          />
        </div>        <div className="flex justify-center items-center order-1 lg:order-2">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute "></div>
            <img
              src="/assets/basket-full-vegetables.webp"
              className="w-[280px] sm:w-[380px] lg:w-[480px] drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              alt="fresh-vegetable-basket"
            />
          </motion.div>
        </div>import React from "react";
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
    <div className="h-[80vh] ">
      <div className="sm:text-4xl text-2xl tracking-widest mt-22 lg:mt-42 poppins font-bold flex justify-center ">
        <span className="text-orange-400 ">Shop&nbsp;</span> By Category
      </div>
      <div className="flex justify-center ">
        <div className="bg-orange-400 w-30 mt-3 mb-12 h-1"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center mt-12">
        <div className="text-center lg:text-right poppins ">
          <div className="text-[#070707] text-3xl font-bold max-w-xs mx-auto lg:ml-auto">
            Trust
          </div>
          <div className="text-[#686868] text-sm max-w-xs mx-auto lg:ml-auto">
            It is a long established fact that a reader will be distracted by
            the readable.
          </div>
        </div>
        <div className="flex  justify-start">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-b  from-orange-400 to-orange-500  w-16 h-16 sm:w-20 sm:h-20 mx-auto lg:mx-0 justify-center    items-center flex text-center  rounded-full"
          >
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: "rgb(255, 255, 255)" }}
              className="text-2xl text-white sm:text-3xl"
            />
          </motion.div>
        </div>
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
          className="w-[250px] sm:w-[350px] lg:w-[450px] bg-cover"
          alt="vegetable-basket"
        />
      </div>
      <div className="flex flex-col items-center gap-10 mt-16 lg:flex-row justify-between -translate-y-32">
        <div>
          <div className=" text-4xl ml-20 font-semibold poppins">
            Always Fresh
          </div>
          <div className=" flex justify-start items-right text-right text-[#686868] text-sm poppins w-100 word-wrap ">
            It is a long established fact that a reader will be distracted by
            the readable.
          </div>
        </div>
        <div className="bg-gradient-to-b justify-center items-center from-orange-400 to-orange-500  sm:w-20 sm:h-20 mx-auto lg:mx-0   flex text-center -translate-x-60 rounded-full">
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
            <div className=" flex text-[#686868] text-sm poppins justify-start items-right text-center lg:text-left max-w-xs sm:max-w-sm word-wrap ">
              It is a long established fact that a reader will be distracted by
              the readable.
            </div>
            <div className="bg-gradient-to-b justify-center items-center mt-12 from-orange-400 to-orange-500  w-20 h-20   flex text-center -translate-x-35 rounded-full">
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

        <div className="flex flex-col gap-12 lg:gap-24 order-3">
          <ValueItem
            icon={faLeaf}
            title="Always Fresh"
            description="Sourced daily from local farms to ensure maximum freshness and flavor."
            reverse={false}
          />
          <ValueItem
            icon={faSeedling}
            title="100% Organic"
            description="Naturally grown without harmful pesticides, keeping you and nature healthy."
            reverse={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Values;