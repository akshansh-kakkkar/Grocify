import React, { useState } from "react";
import {
  faHeart,
  faBagShopping,
  faMagnifyingGlass,
  faBars,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {motion} from "framer-motion"
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const [search, setSearch] = useState("");
  const Navigate = useNavigate();
  const handleSearch = () => {
    if (search.trim() !== "") {
      Navigate(`/all-products?search=${search}`);
    }
  };
  return (     <div className="relative"> <input
        type="text"
        placeholder="search..."
        onKeyDown={(e) => e.key == "Enter" && handleSearch()}
        onChange={(e) => setSearch(e.target.value)}
        className="border-orange-400  font-medium inter placeholder:font-light placeholder:lato placeholder:text-gray-700 text-[#070707] border-2 py-2 w-46 px-4 rounded-full outline-orange-500  "
      />

      <motion.div
        onClick={handleSearch}
        whileHover={{scale:1.1}}
        whileTap={{scale:0.95}}
        className=" bg-gradient-to-b from-orange-400 to-orange-500 absolute right-1 top-1/2 -translate-y-1/2 px-2 py-1 mx-1 rounded-full itemce justcne  "
      >
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ color: "rgb(255, 255, 255)  " }}
        />
      </motion.div>
      </div>

  );
};

export default SearchBar;
