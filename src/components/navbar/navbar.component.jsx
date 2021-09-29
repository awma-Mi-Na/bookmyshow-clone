import React from "react";
import { BiChevronRight, BiSearch } from "react-icons/bi";

const NavSm = () => {
  return (
    <>
      <div className="flex items:center text-white justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!</h3>
          <span className="text-gray-400 text-xs flex items-center">
            Aizawl <BiChevronRight />
          </span>
        </div>
        <div className="w-8 h-12">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
};
const NavMd = () => {};
const NavLg = () => {};

const NavBar = () => {
  return (
    <>
      <nav className="bg-navclr-700 p-4">
        <div className="md:hidden ">
          {/* mobile screen */}
          <NavSm />
        </div>
        <div className="hidden md:flex lg:hidden">
          {/* tablet and medium size devices */}
        </div>
        <div className="hidden lg:flex">{/* pc/large devices */}</div>
      </nav>
    </>
  );
};

export default NavBar;
