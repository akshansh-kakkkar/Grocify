import React from "react";
import {motion} from 'framer-motion'
const ShopByCategory = () => {
  const types = [
    {
      id: 1,
      name: "Fruits & Veggies",
      description:
        "Fresh, organic produce sourced daily form local farms. Explore a wide range of seasonal fruits and vegetables.",
      image: "/assets/fruits-and-veggies.webp",
    },
    {
      id: 2,
      name: "Dairy & Eggs",
      description:
        "Wholesome dairy products and free-range of eggs. From creamy milk and yogurt to artisanal cheeses.",
      image: "/assets/dairy-and-eggs.webp",
    },
    {
      id: 3,
      name: "Meat & SeaFood",
      description:
        "High quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
      image: "/assets/meat-and-seafood.webp",
    },
  ];
  return (
    <>
      <div className="lg:h-[65vh]">
        <div className="sm:text-4xl text-2xl tracking-widest mt-22 poppins font-bold flex justify-center ">
          <span className="text-orange-400">Shop&nbsp;</span> By Category
        </div>
        <div className="flex justify-center ">
          <div className="bg-orange-400 w-30 mt-3 mb-12 h-1"></div>
        </div>
        <div className="flex justify-center">
          <div className="flex lg:gap-33 gap-6 overflow-x-auto  sm:px-6">
            {types.map((item) => {
              return (
                <div className="flex-shrink-0 min-w-[300px] max-w-[400px] lg:w-[400px]" key={item.id}>
                  <img
                    className="sm:w-[400px] select-none h-[200px]  relative z-50"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="bg-gray-100 z-10 -translate-y-12 rounded-2xl flex flex-col gap-7 p-10">
                    <div className="text-2xl text-[#070707] lato font-black mt-2">
                      {item.name}
                    </div>
                    <div className="text-[#686868] flex-wrap">{item.description}</div>
                    <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.95}}  className="cursor-pointer select-none bg-gradient-to-b from-orange-400 to-orange-500 w-fit text-white text-lg flex items-center justify-center py-1 px-4 rounded-sm">
                      See All
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopByCategory;
