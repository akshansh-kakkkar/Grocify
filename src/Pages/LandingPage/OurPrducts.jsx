import products from "../../data/AllProducts.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import {
  faPlus,
  faHeart,
  faTrash,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import useFavorites from "../../hooks/FavouriteHook";
import { useCart } from "../../context/AddProductContext";
const OurPrducts = () => {
  const navigate = useNavigate();
  const OurProducts = products.slice(0, 4);
  const { favorites, toggleFavorite } = useFavorites();
  const { cart, removeItem, addItemToCart, decreaseQty } = useCart();
  return (
    <>
      <div className="flex flex-col items-center mb-16">
        <h2 className="sm:text-4xl text-3xl tracking-widest poppins font-bold text-center">
          Our <span className="text-orange-400">Products</span>
        </h2>
        <div className="bg-orange-400 w-24 mt-4 h-1 rounded-full"></div>
      </div>

      <div className="grid lg::grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-4 place-items-center gap-6 md:mx-24 my-6">
        {OurProducts.map((item) => {
          const cartIncludes = cart.find(
            (c) => String(c.id) === String(item.id),
          );
          return (
            <div key={item.id}>
              <div className="bg-gray-100 px-4 w-[250px] rounded-xl flex justify-center items-center flex-col h-[400px]">
                <div className="flex justify-between w-full">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {" "}
                    <FontAwesomeIcon
                      onClick={() => toggleFavorite(item.id)}
                      icon={faHeart}
                      className={`text-3xl cursor-pointer ${favorites.includes(item.id) ? "text-red-500 " : " text-gray-200 hover:text-gray-300"} `}
                    />
                  </motion.div>
                  {!cartIncludes ? (
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-b cursor-pointer from-orange-400 h-fit items-center flex to-orange-500 p-1 rounded-lg"
                    >
                      <FontAwesomeIcon
                        icon={faPlus}
                        onClick={() => addItemToCart(item.id)}
                        className="text-white text-xl"
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-b from-red-500 h-fit py-2 cursor-pointer items-center flex to-red-400 p-1 rounded-lg"
                    >
                      <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() => removeItem(item.id)}
                        className="text-white text-xl"
                      />
                    </motion.div>
                  )}
                </div>
                <img
                  className="w-[200px] h-[200px] object-cover"
                  src={item.image}
                  alt={item.name}
                />
                <h2 className="text-2xl font-medium inter">{item.name}</h2>
                <p className="inter font-bold text-xl">${item.price}</p>
                {!cartIncludes ? (
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => addItemToCart(item.id)}
                    className="text-white rounded-lg poppins font-medium text-lg bg-gradient-to-b from-orange-400 to-orange-500 w-full py-2"
                  >
                    Shop Now
                  </motion.button>
                ) : (
                  <div className="flex justify-around w-full mx-4 items-center gap-2">
                    <motion.button
                      whileHover={{ scale: 1.08 }}
                      onClick={() => decreaseQty(item.id)}
                      whileTap={{ scale: 0.95 }}
                      className="text-white rounded-lg cursor-pointer poppins font-medium text-lg bg-gradient-to-b from-orange-400 to-orange-500 w-fit px-2 py-1"
                    >
                      <FontAwesomeIcon
                        icon={faMinus}
                        className="text-white text-md"
                      />
                    </motion.button>
                    <div className="text-white rounded-lg poppins  items-center py-1 justify-center text-center text-2xl inter font-bold bg-gradient-to-b from-orange-400 to-orange-500 w-full">
                      {cartIncludes.quantity}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.08 }}
                      onClick={() => addItemToCart(item.id)}
                      whileTap={{ scale: 0.95 }}
                      className="text-white w-fit  cursor-pointer px-2 rounded-lg poppins font-medium text-lg bg-gradient-to-b from-orange-400 to-orange-500  py-1"
                    >
                      <FontAwesomeIcon
                        icon={faPlus}
                        className="text-white text-md"
                      />
                    </motion.button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center mb-4">
        <motion.div
          whileHover={{ scale: 1.1 }}
          onClick={() => navigate("/all-products")}
          whileTap={{ scale: 0.95 }}
          className="text-2xl bg-gradient-to-b poppins text-white py-2 px-3 rounded-lg font-medium from-orange-400 to-orange-500 "
        >
          View More
        </motion.div>
      </div>
    </>
  );
};

export default OurPrducts;
