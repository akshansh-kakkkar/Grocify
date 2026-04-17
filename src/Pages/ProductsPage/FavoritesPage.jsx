import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faHeart, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import useFavorites from "../../hooks/FavouriteHook";
import { motion } from "framer-motion";
import products from "../../data/AllProducts.json";
const FavoritesPage = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const favoriteProducts = products.filter((item) =>
    favorites.includes(item.id),
  );
  return (
    <>
      <div className=" relative h-[50vh] w-full">
        <div className="bg-[url('/assets/all-banner.webp')]  bg-cover bg-center w-full h-full"></div>
        <div className="bg-black/50 absolute inset-0"></div>
        <div className=" absolute inset-0 flex justify-center   items-center text-center w-full h-full">
          <h2 className="bg-white sm:text-4xl text-2xl p-3 rounded-2xl inter font-bold text-orange-400 ">
            Your Favorites
          </h2>
        </div>
      </div>
      {favoriteProducts.length === 0 ? (
        <>
        <div className="font-bold text-orange-400 text-4xl h-[50vh] flex gap-6 justify-center items-center flex-col text-center">
          <div>
            {" "}
            <FontAwesomeIcon icon={faInfoCircle} className=" text-7xl" />
          </div>
          <div >
            No Products Found
          </div>
          </div>
        </>
      ) : (
        <div className="grid lg::grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-4 place-items-center gap-6 md:mx-24 my-12">
          {favoriteProducts.map((item) => (
            <div key={item.id}>
              <div className="bg-gray-100 px-4 w-[250px] rounded-xl flex justify-center items-center flex-col h-[400px]">
                <div className="flex justify-between w-full">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FontAwesomeIcon
                      onClick={() => toggleFavorite(item.id)}
                      icon={faHeart}
                      className={`text-3xl cursor-pointer ${favorites.includes(item.id) ? "text-red-500" : "text-gray-200 hover:text-gray-300"}`}
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
      )}
    </>
  );
};

export default FavoritesPage;
