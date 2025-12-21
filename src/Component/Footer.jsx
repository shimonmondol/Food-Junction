import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#F5F5F5] w-full pt-20">
      <div className="flex w-[1000px] mx-auto justify-between px-4">
        <div>
          <p className="text-xl font-semibold font-roboto">
            <span className="text-[#FB9333]">JEZ</span> SALAD
          </p>
          <p className="font-poppins text-md text-[#575757] pt-4">
            Jez Salad is the pioneer of <br />
            healthy fruit salad with <br />
            high nutrition.
          </p>
          <p className="font-poppins text-sm text-[#575757] pt-6 pb-12">
            ©Copyright Jez Salad
          </p>
        </div>
        <div>
          <p className="font-poppins text-xl font-bold text-[#FB9333]">
            Feature
          </p>
          <p className="font-poppins text-md text-[#575757] pt-4">Menu</p>
          <p className="font-poppins text-md text-[#575757]       pt-2">
            Promo
          </p>
          <p className="font-poppins text-md text-[#575757]   pt-2">Contact</p>
          <p className="font-poppins text-md text-[#575757]   pt-2">About Us</p>
        </div>
        <div>
          <p className="font-poppins text-xl font-bold text-[#FB9333]">
            Get in Touch
          </p>
          <div className="flex pt-5">
            <img className="w-4 h-5 mt-0.5" src="Images/Location.png" alt="" />
            <p className="font-poppins text-md text-[#575757] ml-4">
              8819 Ohio St. South Gate
            </p>
          </div>
          <div className="flex pt-3">
            <img className="w-4 h-3 mt-1.5" src="Images/Mail.png" alt="" />
            <p className="font-poppins text-md text-[#575757] ml-3 ">
              Ourstudio@hello.com
            </p>
          </div>
          <div className="flex pt-3">
            <img className="w-3.5 h-3.5 mt-1.5" src="Images/Phone.png" alt="" />
            <p className="font-poppins text-md text-[#575757] ml-3">
              +1 386-688-3295
            </p>
          </div>
        </div>
        <div>
          <div>
            <img className="h-4 w-18" src="Images/Frame 3.png" alt="" />
            <p className="font-poppins text-md text-[#575757]     mt-4">
              Social Media
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
