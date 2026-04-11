import React from "react";
import { NavLink } from "react-router-dom";
import { faHeart, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div className="flex py-4 px-12 items-center text-center justify-between">
      <div className="text-3xl text-[#070707] inter tracking-widest font-bold">
        Gr<span className="text-orange-500">O</span>cify
      </div>
      <div className="gap-8 flex text-[#686868]">
        <NavLink>Home</NavLink>
        <NavLink>About Us</NavLink>
        <NavLink>Process</NavLink>
        <NavLink>Contact Us</NavLink>
      </div>
      <div className="flex items-center gap-6">
        <div></div>
        <div className="hover:bg-[#d3d3d34a] transition-all duration-300 px-1 py-2 items-center flex rounded-full">
          <FontAwesomeIcon icon={faHeart} style={{ color: "#262626", fontSize : "25px" }} />
        </div>
        <div className="hover:bg-[#d3d3d34a] transition-all duration-300 px-1 py-2 items-center flex rounded-full">
          <FontAwesomeIcon icon={faBagShopping} style={{ color: "#262626",fontSize : "25px" }} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
