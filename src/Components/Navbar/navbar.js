import React from "react";
import { Link } from "react-router-dom";
function navbar() {
  return (
    <nav className="flex bg-gray-700 h-16">
      <div className="flex items-center ">
        <p className="text-white text-xl font-semibold hover:scale-110 hover:text-red-600 mx-4">
          MovieBuff
        </p>
      </div>
      <ul className="mx-[600px] flex items-center cursor-pointer">
        <li className="mx-0 font-semibold text-right text-white hover:scale-110 hover:text-red-600">
          <Link to="/">Movies </Link>
        </li>
        <li className="m-4 font-semibold text-right text-white hover:scale-110 hover:text-red-600 text-justify">
          <Link to="/tvs">TV-Shows</Link>
        </li>
        <li className="m-4 font-semibold text-right text-white hover:scale-110 hover:text-red-600">
          <Link to="/web">Web-Series</Link>
        </li>
      </ul>
    </nav>
  );
}

export default navbar;
