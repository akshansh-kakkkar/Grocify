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
    <section id="values" className="py-20 px-4 sm:px-10 lg:px-20 overflow-hidden">
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
            description="It is a long established fact that reader will  be distracted by the readable."
            reverse={true}
          />
          <ValueItem
            icon={faShieldHalved}
            title="Food Safety"
            description="It is a long established fact that reader will  be distracted by the readable."
            reverse={true}
          />
        </div>        <div className="flex justify-center items-center order-1 lg:order-2">
          <motion.div
            className="relative"
          >
            <div className="absolute  "></div>
            <img
              src="/assets/basket-full-vegetables.webp"
              className="w-[280px] sm:w-[380px] select-none lg:w-[480px] drop-shadow-2xl"
              alt="fresh-vegetable-basket"
            />
          </motion.div>
        </div>

        <div className="flex flex-col gap-12 lg:gap-24 order-3">
          <ValueItem
            icon={faLeaf}
            title="Always Fresh"
            description="It is a long established fact that reader will  be distracted by the readable."
            reverse={false}
          />
          <ValueItem
            icon={faSeedling}
            title="100% Organic"
            description="It is a long established fact that reader will  be distracted by the readable."
            reverse={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Values;