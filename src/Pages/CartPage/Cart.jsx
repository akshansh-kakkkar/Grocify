import React from "react";
import { useCart } from "../../context/AddProductContext";
import { motion, scale } from "framer-motion";
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
  const totalItems = cartProducts.reduce((sum, item) => sum + item.quantity, 0);
  const subTotal = cartProducts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const delivery = subTotal > 0 ? 5 : 0;
  const total = subTotal + delivery;
  return (
    <div className="h-[85vh] mx-12 mb-12  flex  ">
      <div>
        <div className="flex items-center ">
          <div className="m-16 ml-24 max-h-[78vh] rounded-4xl overflow-y-auto gap-6 flex flex-col pr-4">
            {cartProducts.map((item) => {
              const cartIncludes = cart.find(
                (c) => String(c.id) === String(item.id),
              );
              return (
                <div className="bg-gray-100 w-[800px] h-[120px]  rounded-xl grid grid-cols-[100px_1fr_200px_60px] items-center p-3">
                  <div className="flex items-center gap-4">
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
                  <div className="flex justify-around  mx-4 items-center gap-4">
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
                      className={`bg-gradient-to-b cursor-pointer w-fit from-red-500 py-2 h-fit items-center flex to-red-400 p-1 rounded-lg `}
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

      <div className="bg-gray-100 w-[400px] max-h-[600px] ml-1 rounded-xl mt-12 pb-6">
        <h2 className="flex justify-center w-full mt-6 text-3xl font-semibold poppins text-[#070707]">
          ORDER SUMMARY
        </h2>
        <div className="mx-12">
          <div className="w-full rounded-full bg-gradient-to-r  from-orange-400 to-orange-500 h-[4px]"></div>
        </div>

        <div className="flex justify-around items-center text-center mt-12">
          <h3 className="text-2xl inter font-semibold">Total Items</h3>
          <span className="text-2xl inter font-semibold">-</span>
          <span className="text-center text-2xl font-semibold poppins text-[#070707]">
            {totalItems}
          </span>
        </div>
        <div className="mx-8 mb-4">
          <div className="w-full rounded-full bg-gradient-to-r  from-orange-400 to-orange-500 h-[2px]"></div>
        </div>
        <div className="h-[200px] overflow-y-auto pr-2">
          {cartProducts.map((item) => (
            <div key={item.id} className="flex justify-between mx-10 ">
              <div className="text-lg flex-1 inter font-medium text-[#070707]">
                {item.name}
              </div>
                            <div className="w-25 text-lg inter font-medium text-[#070707]">
                x{item.quantity}
              </div>
              <div className="text-lg w-7 font-bold inter text-[#070707]">
                ${item.price * item.quantity}
              </div>
            </div>
          ))}

        </div>
                  <div className="mx-8 mt-4">
            <div className="w-full rounded-full bg-gradient-to-r  from-orange-400 to-orange-500 h-[2px]"></div>
          </div>
          <div className="mx-8 flex mt-4 justify-between">
            <h2 className="text-lg font-medium inter text-[#070707]">Subtotal</h2>
            <div className="text-lg font-medium inter text-[#070707]">${subTotal}</div>
          </div>
                    <div className="mx-8 flex mt- justify-between">
            <h2 className="text-lg font-medium inter text-[#070707]">Delivery</h2>
            <div className="text-lg font-medium inter text-[#070707]">${delivery}</div>
          </div>
                    <div className="mx-8 flex mt-4 justify-between">
            <h2 className="text-xl font-bold inter text-[#070707]">Total</h2>
            <div className="text-xl font-bold inter text-[#070707]">${total}</div>
          </div>
          <motion.div whileHover={{scale:0.95}} whileTap={{scale:1.06}}  className="flex cursor-pointer justify-center items-center text-center poppins font-medium bg-gradient-to-b from-orange-400 to-orange-500 m-5 py-2 text-2xl rounded-lg text-white
          ">ORDER</motion.div>
      </div>
    </div>
  );
};
