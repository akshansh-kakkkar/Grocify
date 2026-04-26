import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const ShopByCategory = () => {
  const navigate = useNavigate();
  const types = [
    {
      id: 1,
      name: "Fruits & Veggies",
      description:
        "It is a long established fact that a reader will  be distracted by the readable.",
      image: "/assets/fruits-and-veggies.webp",
      route: "/fruitsnveggies",
    },
    {
      id: 2,
      name: "Dairy & Eggs",
      description:
        "It is a long established fact that a reader will  be distracted by the readable.",
      image: "/assets/dairy-and-eggs.webp",
      route : '/dairyneggs'
    },
    {
      id: 3,
      name: "Meat & SeaFood",
      description:
        "It is a long established fact that a reader will  be distracted by the readable.",
      image: "/assets/meat-and-seafood.webp",
      route: "/meatnseafood",
    },
  ];
  return (
    <>
    <section id="/category">
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
                <div
                  className="flex-shrink-0 min-w-[300px] max-w-[400px] lg:w-[400px]"
                  key={item.id}
                >
                  <img
                    className="sm:w-[400px] select-none h-[200px]  relative z-50"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="bg-gray-100 z-10 -translate-y-12 rounded-2xl flex flex-col gap-7 p-10">
                    <div className="text-2xl text-[#070707] lato font-black mt-2">
                      {item.name}
                    </div>
                    <div className="text-[#686868] flex-wrap">
                      {item.description}
                    </div>
                    <motion.div
                      onClick={() => navigate(item.route)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="cursor-pointer select-none bg-gradient-to-b from-orange-400 to-orange-500 w-fit text-white text-lg flex items-center justify-center py-1 px-4 rounded-sm"
                    >
                      See All
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>

    </>
  );
};

export default ShopByCategory;
