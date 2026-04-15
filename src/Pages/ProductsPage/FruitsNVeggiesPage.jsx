import React from "react";

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
    <div className="grid grid-cols-4 place-items-center gap-6">
      {FruitsAndVegetables.map((item) => (
        <div key={item.id}>
          <div className="bg-gray-100">
            <img className="w-[80px] h-[80px] object-cover" src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>${item.price}</p>
            <button>Book Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FruitsNVeggiesPage;
