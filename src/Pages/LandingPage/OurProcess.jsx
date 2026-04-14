import React from "react";
import { faMedal, faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faTruck } from "@fortawesome/free-regular-svg-icons";
const OurProcess = () => {
  const Purposes = [
    {
      id: 1,
      name: "Sourcing",
      description: "It is a long established fact that a reader",
      icon: faSeedling,
    },
    {
      id: 2,
      name: "Manufacturing",
      description: "It is a long established fact that a reader",
      icon: faBuilding,
    },
    {
      id: 3,
      name: "Quality Control",
      description: "It is a long established fact that a reader",
      icon: faMedal,
    },
    {
      id: 4,
      name: "Logistics",
      description: "It is a long established fact that a reader",
      icon: faTruck,
    },
  ];
  return (
    <div>
      <div className="h-[85vh] mx-12 flex flex-col">
        <h2 className='sm:text-4xl text-3xl tracking-widest poppins text-orange-400 mt-8 ml-12 font-bold text-center"'>
          Our <span className="text-[#070707]">Process</span>
        </h2>
        <div className="bg-orange-400 flex mt-42 items-center justify-center ml-32 w-24 lg:mt-2 h-1 rounded-full"></div>
        <div className="lg:grid flex flex-col lg:grid-rows-2 grid-cols-4 justify-center gap-12 h-full mx-12 items-center">

          <div className=" col-start-1 row-start-2 justify-center col-end-2 items-center">
            <div>
              <div className="justify-center  flex gap-8  ">
                <div className="h-20 w-20 border-4 flex items-center text-center justify-center border-dashed rounded-full">
                  <div className="h-16 w-16 border-4 flex items-center justify-center text-center rounded-full">
                    <div className="text-4xl font-bold poppins">
                      {Purposes[0].id}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 mt-2 ">
                <div>
                <div className="bg-gradient-to-b from-orange-400 to-orange-500 w-16 h-16 items-center justify-center flex rounded-full">
                  <FontAwesomeIcon
                    icon={Purposes[0].icon}
                    className="text-white text-3xl"
                  />
                </div>
                </div>
                <div>
                  <h2 className="poppins text-xl font-bold">
                    {Purposes[0].name}
                  </h2>
                  <p className="w-65 text-sm inter text-[#686868]">
                    {Purposes[0].description}
                  </p>
                </div>
              </div>
            </div>

          </div>
          <div className="col-start-2 row-start-1 justify-center items-center">
            <div>
              <div className="justify-center  flex gap-8  ">
                <div className="h-20 w-20 border-4 flex items-center text-center justify-center border-dashed rounded-full">
                  <div className="h-16 w-16 border-4 flex items-center justify-center text-center rounded-full">
                    <div className="text-4xl font-bold poppins">
                      {Purposes[1].id}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 mt-2 ">
                <div>
                <div className="bg-gradient-to-b from-orange-400 to-orange-500 w-16 h-16 items-center justify-center flex rounded-full">
                  <FontAwesomeIcon
                    icon={Purposes[1].icon}
                    className="text-white text-3xl"
                  />
                </div>
                </div>
                <div>
                  <h2 className="poppins text-xl font-bold">
                    {Purposes[2].name}
                  </h2>
                  <p className="w-65 text-sm inter text-[#686868]">
                    {Purposes[2].description}
                  </p>
                </div>
              </div>

            </div>
          </div>
          <div className="col-start-3 row-start-2 justify-center items-center">
            <div>
              <div className="justify-center  flex gap-8  ">
                <div className="h-20 w-20 border-4 flex items-center text-center justify-center border-dashed rounded-full">
                  <div className="h-16 w-16 border-4 flex items-center justify-center text-center rounded-full">
                    <div className="text-4xl font-bold poppins">
                      {Purposes[2].id}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 mt-2 ">
                <div>
                <div className="bg-gradient-to-b from-orange-400 to-orange-500 w-16 h-16 items-center justify-center flex rounded-full">
                  <FontAwesomeIcon
                    icon={Purposes[2].icon}
                    className="text-white text-3xl"
                  />
                </div>
                </div>
                <div>
                  <h2 className="poppins text-xl font-bold">
                    {Purposes[2].name}
                  </h2>
                  <p className="w-65 text-sm inter text-[#686868]">
                    {Purposes[2].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-start-4 row-start-1 justify-center items-center">
            <div>
              <div className="justify-center  flex gap-8  ">
                <div className="h-20 w-20 border-4 flex items-center text-center justify-center border-dashed rounded-full">
                  <div className="h-16 w-16 border-4 flex items-center justify-center text-center rounded-full">
                    <div className="text-4xl font-bold poppins">
                      {Purposes[3].id}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-5 mt-2 ">
                <div>
                <div className="bg-gradient-to-b from-orange-400 to-orange-500 w-16 h-16 items-center justify-center flex rounded-full">
                  <FontAwesomeIcon
                    icon={Purposes[3].icon}
                    className="text-white text-3xl"
                  />
                </div>
                </div>
                <div>
                  <h2 className="poppins text-xl font-bold">
                    {Purposes[3].name}
                  </h2>
                  <p className="w-65 text-sm inter text-[#686868]">
                    {Purposes[3].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
