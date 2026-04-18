import React from "react";
import { useCart } from "../../context/AddProductContext";
import { motion } from "framer-motion";
import products from "../../data/AllProducts.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";

export const Cart = () => {
  const { cart, removeItem, addItemToCart, decreaseQty, clearCart } = useCart();
  const cartProducts = cart.map((cartItem) => {
    const product = products.find((p) => String(p.id) === String(cartItem.id));
    return {
      ...product,
      quantity: cartItem.quantity,
    };
  });

  return (
    <div className="h-[75.5vh]  flex items-center ">
      <div>
        <div className="m-16 ml-25 h-[65vh] rounded-4xl overflow-y-scroll gap-6 flex flex-col  ">
          {cartProducts.map((item) => {
            const cartIncludes = cart.find(
              (c) => String(c.id) === String(item.id),
            );
            return (
              <div className="bg-gray-100 w-[800px] h-[120px]  rounded-xl flex justify-between items-center p-3">
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="bg-white rounded-xl w-[100px] h-[100px]"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold poppins text-orange-400">
                    {item.name}
                  </div>
                  <div className="text-2xl font-bold poppins text-[#070707]">
                    ${item.price}
                  </div>
                </div>
                <div className="flex justify-around  mx-4 items-center gap-2">
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
                  <div className="text-white rounded-lg poppins  items-center px-5 py-1 justify-center text-center text-2xl inter font-bold bg-gradient-to-b from-orange-400 to-orange-500 w-full">
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
                <div>
                  <motion.div
                    onClick={() => removeItem(item.id)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-b cursor-pointer from-red-500 py-2 h-fit items-center flex to-red-400 p-1 rounded-lg `}
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="text-white text-xl"
                    />
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
