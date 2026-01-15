import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#F5F5F5] overflow-x-hidden">
      <div className="max-w-[970px] mx-auto px-4 md:px-6 lg:px-0">

        {/* TOP BAR */}
        <div className="flex items-center justify-between h-[80px]">

          {/* LOGO */}
          <h1 className="font-roboto font-bold text-[22px] md:text-[24px]">
            <span className="text-[#FB9333]">JEZ</span>{" "}
            <span className="text-[#585858]">SALAD</span>
          </h1>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-[24px] font-poppins text-[16px]">
            <p className="text-[#FB9300] cursor-pointer">Home</p>
            <p className="cursor-pointer">Menu</p>
            <p className="cursor-pointer">Contact</p>
            <p className="cursor-pointer">About Us</p>
          </div>

          {/* BUTTON (DESKTOP ONLY) */}
          <div className="hidden lg:block">
            <img
              src="Images/Button.png"
              alt=""
              className="w-[100px]"
            />
          </div>

          {/* MOBILE ICON */}
          <button
            className="lg:hidden text-[22px]"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="lg:hidden">
            <div className="flex flex-col gap-4 font-poppins text-[16px]">
              <p className="text-[#FB9300]">Home</p>
              <p>Menu</p>
              <p>Contact</p>
              <p>About Us</p>

              <img
                src="Images/Button.png"
                alt=""
                className="w-[100px] mt-4"
              />
            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
