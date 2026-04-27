import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faTruckFast,
  faMinus,
  faTrash,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import {motion} from 'framer-motion'
import { useNavigate } from "react-router-dom";
const Payment = () => {
    const navigate = useNavigate()
  return (
    <div className="h-screen flex-col gap-5 flex justify-center items-center text-center">
      <div className="poppins text-3xl font-medium text-black">
        Order Placed
      </div>
      <FontAwesomeIcon
        icon={faTruckFast}
        className="text-orange-400  text-9xl"
      />
      <motion.button onClick={() => navigate("/")}
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 1.06 }} className="flex cursor-pointer justify-center items-center text-center poppins font-medium bg-gradient-to-b from-orange-400 to-orange-500 m-5 py-2 text-2xl rounded-lg text-white px-3">
        Back to dashboard
      </motion.button>
    </div>
  );
};
export default Payment;
