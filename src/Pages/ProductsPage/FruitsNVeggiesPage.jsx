import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { motion, scale } from "framer-motion";
const FruitsNVeggiesPage = () => {
  const FruitsAndVegetables = [
    {
      id: 1,
      name: "Banana",
      image: "/assets/banana.webp",
      price: 4,
    },
    {
      id: 2,
      name: "Broccoli",
      image: "/assets/broccoli.webp",
      price: 6,
    },
    {
      id: 3,
      name: "Cabbage",
      image: "/assets/cabbage.webp",
      price: 2,
    },
    {
      id: 4,
      name: "Capsicum",
      image: "/assets/capsicum.webp",
      price: 5,
    },
    {
      id: 5,
      name: "Egg Plant",
      image: "/assets/eggplant.webp",
      price: 6,
    },
    {
      id: 6,
      name: "Grapes",
      image: "/assets/grapes.webp",
      price: 7,
    },
    {
      id: 7,
      name: "Kale",
      image: "/assets/kale.webp",
      price: 5,
    },
    {
      id: 8,
      name: "Kiwi",
      image: "/assets/kiwi.webp",
      price: 2,
    },
    {
      id: 9,
      name: "Lettuce",
      image: "/assets/lettuce.webp",
      price: 4,
    },
    {
      id: 10,
      name: "Pineapple",
      image: "/assets/pineapple.webp",
      price: 7,
    },
    {
      id: 11,
      name: "Strawberry",
      image: "/assets/strawberry.webp",
      price: 9,
    },
  ];
  return (
    <>
      <div className=" relative h-[50vh] w-full">
        <div className="bg-[url('/assets/fruits-banner.webp')]  bg-cover bg-center w-full h-full"></div>
        <div className="bg-black/50 absolute inset-0"></div>
        <div className=" absolute inset-0 flex justify-center   items-center text-center w-full h-full"><h2 className="bg-white sm:text-4xl text-2xl p-3 rounded-2xl inter font-bold text-black ">Fruits & Vegetables</h2></div>
        
      </div>

      <div className="grid lg::grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-4 place-items-center gap-6 md:mx-24 my-12">
        {FruitsAndVegetables.map((item) => (
          <div key={item.id}>
            <div className="bg-gray-100 px-4 w-[250px] rounded-xl flex justify-center items-center flex-col h-[400px]">
              <div className="flex justify-between w-full">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {" "}
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-gray-200 text-3xl hover:text-gray-300"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-b from-orange-400 h-fit items-center flex to-orange-500 p-1 rounded-lg"
                >
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="text-white text-xl"
                  />
                </motion.div>
              </div>
              <img
                className="w-[200px] h-[200px] object-cover"
                src={item.image}
                alt={item.name}
              />
              <h2 className="text-2xl font-medium inter">{item.name}</h2>
              <p className="inter font-bold text-xl">${item.price}</p>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="text-white rounded-lg poppins font-medium text-lg bg-gradient-to-b from-orange-400 to-orange-500 w-full py-2"
              >
                Shop Now
              </motion.button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FruitsNVeggiesPage;
