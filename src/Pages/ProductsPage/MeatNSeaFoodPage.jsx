import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import products from "../../data/MilkProducts.json"

const MeatNSeaFoodPage = () => {
  const MeatandSeaFood = products.filter(
    (item)=> item.category === "meat-products"
  )
  return (
    <>
      <div className=" relative h-[50vh] w-full">
        <div className="bg-[url('/assets/seafood-banner.webp')]  bg-cover bg-center w-full h-full"></div>
        <div className="bg-black/50 absolute inset-0"></div>
        <div className=" absolute inset-0 flex justify-center   items-center text-center w-full h-full">
          <h2 className="bg-white sm:text-4xl text-2xl p-3 rounded-2xl inter font-bold text-black ">
            Meat & SeaFood{" "}
          </h2>
        </div>
      </div>

      <div className="grid lg::grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-4 place-items-center gap-6 md:mx-24 my-12">
        {MeatandSeaFood.map((item) => (
          <div key={item.id}>
            <div className="bg-gray-100 px-4 w-[250px] rounded-xl flex justify-center items-center flex-col h-[400px]">
              <div className="flex justify-between w-full">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
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

export default MeatNSeaFoodPage;
