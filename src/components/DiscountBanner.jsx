import React from "react";
import {motion} from 'framer-motion'
const DiscountBanner = () => {
  return (
    <div className="w-full select-none h-[300px] bg-[#f5f5f5] flex items-center ">
      <div className="flex item-center text-orange-500 font-bold  text-center">
        <div className="md:text-9xl text-6xl inter -rotate-90 ">20%</div>
      </div>
      <div className="flex gap-3 md:gap-5 flex-col">
        <div  className="md:text-6xl text-2xl font-bold text-[#070707] word-wrap">First Order Discount</div>
        <div  className="md:text-sm text-xs text-[#3d3d3d] font-light word-wrap">Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase. Fast delivery and quality guranteed.</div>
        <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.95}}  className="cursor-pointer select-none bg-gradient-to-b from-orange-400 to-orange-500 w-fit text-white text-md md:text-xl flex items-center justify-center py-1 px-2 md:py-3 md:px-4 rounded-sm"v>Get Discount</motion.div>
      </div>
      <div>
        <img src="/assets/fresh-fruits.webp" className="h-[300px] object-cover" alt="fresh-fruits" />
      </div>
    </div>
  );
};

export default DiscountBanner;
