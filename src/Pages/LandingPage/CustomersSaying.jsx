import React, { useState } from "react";

const CustomersSaying = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };
  return (
    <div className="h-[70vh]">
      <div className="flex flex-col mt-102 lg:mt-4 items-center mb-16">
        <h2 className="sm:text-4xl text-3xl tracking-widest poppins font-bold text-center">
          Customer <span className="text-orange-400">Saying</span>
        </h2>
        <div className="bg-orange-400 w-24 mt-4 h-1 rounded-full"></div>
      </div>
      <div className="overflow-hidden w-full">
        <button onClick={prevSlide}>left</button>
        <button onClick={nextSlide}>right</button>
        <div
          className="flex  transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {Customers.map((people, index) => (
            <div className="w-1/3 flex-shrink-0" key={index}>
              <div>{people.name}</div>
              <div>
                <img src={people.profile} alt={people.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomersSaying;
