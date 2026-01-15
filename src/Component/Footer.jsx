import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#F5F5F5] w-full pt-20">
      <div
        className="
          max-w-[990px] mx-auto px-4
          grid grid-cols-2 gap-8
          lg:flex lg:justify-between lg:gap-0
        "
      >
        {/* LOGO & ABOUT */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <p className="text-xl font-semibold font-roboto">
            <span className="text-[#FB9333]">JEZ</span> SALAD
          </p>

          <p className="font-poppins text-justify text-md text-[#575757] pt-4 ml-2 sm:ml-6 lg:ml-0">
            Jez Salad is the pioneer of <br className="hidden sm:block" />
            healthy fruit salad with <br className="hidden sm:block" />
            high nutrition.
          </p>
          <p className="font-poppins text-md font-semibold text-[#575757] pt-6 pb-6 lg:pb-12 lg:mr-0 lg:pr-0">
            © Copyright Jez Salad
          </p>
        </div>

        {/* FEATURES */}
        <div className="text-center lg:text-left">
          <p className="font-poppins text-xl font-bold text-[#FB9333]">
            Feature
          </p>
          <p className="font-poppins text-md text-[#575757] pt-4">Menu</p>
          <p className="font-poppins text-md text-[#575757] pt-2">Promo</p>
          <p className="font-poppins text-md text-[#575757] pt-2">Contact</p>
          <p className="font-poppins text-md text-[#575757] pt-2">About Us</p>
        </div>

        {/* CONTACT */}
        <div className="text-center lg:text-left">
          <p className="font-poppins text-xl font-bold text-[#FB9333]">
            Get in Touch
          </p>

          <div className="flex justify-center pt-3 text-justify lg:justify-start lg:text-left lg:ml-0">
            <img className="w-4 h-5 mt-0.5" src="Images/Location.png" alt="" />
            <p className="font-poppins text-md text-[#575757] ml-3">
              Dhaka, Bangladesh
            </p>
          </div>

          <div className="flex justify-center pt-3 ml-3 text-justify lg:justify-start lg:text-left lg:ml-0">
            <img className="w-4 h-3 mt-1.5" src="Images/Mail.png" alt="" />
            <p className="font-poppins text-md text-[#575757] ml-3">
              Jezsalad@gmail.com
            </p>
          </div>

          <div className="flex justify-center pt-3 pb-8 text-justify lg:justify-start lg:text-left lg:ml-0">
            <img className="w-3.5 h-3.5 mt-1.5 sm:mr-0" src="Images/Phone.png" alt="" />
            <p className="font-poppins pl-2 sm:pl-3 text-md text-[#575757]">
              +88-01711-000000
            </p>
          </div>
        </div>

        {/* SOCIAL */}
        <div className="mt-[2px] text-center lg:text-left">
          <p className="font-poppins text-xl font-bold text-[#FB9333]">
            Social Media
          </p>
          <img
            className="h-4 mx-auto mt-4 lg:mx-0"
            src="Images/Frame 3.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
