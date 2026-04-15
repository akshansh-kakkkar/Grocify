import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faAngleLeft, faAngleRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CustomersSaying = () => {
  const Customers = [
    {
      id: 1,
      profile: "/assets/customer1.webp",
      name: "Emily Johnson",
      title: "Food Blogger",
      rating: 3,
      review:
        "Grocify is my go for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options.",
    },
    {
      id: 2,
      name: "David Smith",
      profile: "/assets/customer2.webp",
      title: "Chef",
      rating: 4,
      review:
        "As a chef, quality ingredients are everything. Grocify consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!",
    },
    {
      id: 3,
      name: "Alya Zahra",
      profile: "/assets/customer3.webp",
      title: "Model",
      rating: 3,
      review:
        "Shopping online with Grocify has saved  me so much time. I trust them for my family's weekly groceries. Always fresh, affordable and reliable",
    },
    {
      id: 4,
      name: "Charlos Mendes",
      profile: "/assets/customer4.webp",
      title: "Model",
      rating: 5,
      review:
        "I appreciate the section of healthy food and clean label products. Grocify has been a great partner in my wellness journey.",
    },
    {
      id: 5,
      name: "Alya Zahra",
      profile: "/assets/customer5.webp",
      title: "Model",
      rating: 3,
      review:
        "Grocify offers high quality groceries at resonable prices. Their organic section is impressive and their customer services is top notch.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(Customers);
  const nextSlide = () => {
    setCurrentIndex((prev) => [...prev.slice(1), prev[0]]);
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
  };
  return (
    <div className="mx-4">
      <div className="flex flex-col pt-12 lg:mt-4 items-center">
        <h2 className="sm:text-4xl text-3xl tracking-widest poppins font-bold text-center">
          Customer <span className="text-orange-400">Saying</span>
        </h2>
        <div className="bg-orange-400 w-24 mt-2 h-1 rounded-full"></div>
      </div>
      <div className="overflow-hidden w-full">
        <div className="flex justify-end md:mx-12 p-3  gap-5">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSlide}
            className="bg-orange-400  cursor-pointer py-1 px-2  rounded-lg"
          >
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="text-white text-3xl"
            />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-400 cursor-pointer  rounded-lg py-1 px-2"
            onClick={nextSlide}
          >
            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-white text-3xl"
            />
          </motion.button>
        </div>

        <div className="flex gap-4">
          <AnimatePresence mode="popLayout">
            {currentIndex.slice(0, 3).map((people) => (
              <motion.div
                key={people.id}
                layout
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8 }}
                className="w-full sm:w-1/2 flex-shrink-0 xl:w-1/3 flex justify-center  p-4 "
              >
                <div className="bg-gray-100 flex gap-2 flex-col w-[500px] h-[250px]  p-5 rounded-lg">
                  <div className="flex gap-2 items-center text-center">
                  <div className="flex border-2  border-orange-400 rounded-full w-fit p-1">
                    <img
                      className="rounded-full w-[50px] h-[50px] object-cover"
                      src={people.profile}
                      alt={people.name}
                    />
                  </div>
                  <div className="flex flex-col text-left">
                  <div className=" text-xl font-bold inter text-[#070707]" >{people.name}</div>
                  <div className="text-sm font-medium poppins text-[#686868]">{people.title}</div>
                  </div>
                  </div>
                  <div className="flex translate-x-6 items-center">
                    {Array.from({length : people.rating}).map((_,i)=>(
                      <FontAwesomeIcon key={i} icon={faStar} className="text-xl  text-yellow-400"/>
                    ))}
                  </div>
                  <div className="text-md flex justify-center pb-6 font-medium poppins text-[#686868]">{people.review}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default CustomersSaying;
