import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  faHeart,
  faBagShopping,
  faMagnifyingGlass,
  faBars,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import SearchBar from "./SearchBar";
const SecondaryNavbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      let current = "hero";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const active = ({ isActive }) => {
    return `${isActive ? " transition-all duration-300 text-orange-500" : ""}`;
  };
  return (
    <div
      className={`flex py-4 px-2 md:px-12 items-center sticky top-0 bg-white z-120 text-center justify-between ${scrolled ? "shadow-lg" : ""}`}
    >
      <NavLink
        to="/"
        className="text-3xl text-[#070707] inter tracking-widest font-bold"
      >
        Gr<span className="text-orange-500">O</span>cify
      </NavLink>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            <motion.div
              onClick={(event) => event.stopPropagation()}
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              exit={{ x: -100 }}
              transition={{ type: "tween", duration: 0.3 }}
              className="flex text-xl fixed flex-col gap-6 left-0 inter font-medium text-[#070707] h-[350px] w-[300px] mt-23 bg-orange-200 backdrop-blur-2xl rounded-2xl items-center justify-center  ml-8 p-6 z-50"
            >
              <div>
                <SearchBar />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex items-center gap-3">
        <div className="lg:block hidden">
          <SearchBar  />
        </div>


        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="hover:bg-[#d3d3d34a] cursor-pointer transition-all duration-300 px-1 py-2 items-center flex rounded-full"
        >
          <FontAwesomeIcon
            icon={faHeart}
            onClick={() => navigate("/favorites")}
            style={{ color: "#262626", fontSize: "25px" }}
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="hover:bg-[#d3d3d34a] cursor-pointer transition-all duration-300 px-1 py-2 items-center flex rounded-full"
        >
          <FontAwesomeIcon
            onClick={() => navigate("/cart")}
            icon={faBagShopping}
            style={{ color: ` "#262626"`, fontSize: "25px" }}
          />
        </motion.div>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setOpen(!open)}
          className="hover:bg-[#d3d3d34a] lg:hidden cursor-pointer transition-all duration-300 px-1 py-2 items-center flex rounded-full relative z-50"
        >
          <FontAwesomeIcon
            icon={open ? faX : faBars}
            style={{ color: ` "#262626"`, fontSize: "25px" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SecondaryNavbar;
