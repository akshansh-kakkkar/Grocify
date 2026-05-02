import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate()
  return (
    <section id="hero">
    <div className="flex flex-col lg:flex-row  md:gap-32 justify-center items-center mt-15 md:mt-29 lg:mx-22 ">
      <div className="flex justify-center items-center lg:items-start lg:text-left text-center flex-col gap-4 text-[#070707]">
        <div className="bg-orange-200 lg rounded-2xl w-fit px-2 py-1 text-orange-500">
          Export Best Quality
        </div>
        <div className="md:text-7xl text-6xl  inter tracking-wider lg:w-160 lg:leading-20 font-black ">
          Tasty Organic <span className="text-orange-400">Fruits</span> &{" "}
          <span className="text-orange-400">Veggies</span> In Your City
        </div>
        <div className="lg:w-140 poppins text-[#686868]">
          Brand for a high content of benificial substances. Our products are
          all fresh and healthy.
        </div>
        <AnimatePresence>
        <motion.button onClick={()=>navigate("/all-products")} whileHover={{scale:1.1}} whileTap={{scale:0.95}} className="select-none cursor-pointer bg-gradient-to-b from-orange-400 to-orange-500 w-fit text-white text-2xl flex items-center justify-center py-2 px-6 rounded-sm">
          Shop Now
        </motion.button>
        </AnimatePresence>

      </div>
      <div>
        <img
        className="select-none"
          style={{ width: "550px" }}
          src="/assets/grocery.webp"
          alt="grocery basket"
        />
      </div>
    </div>
    </section>
  );
};

export default HeroSection;
