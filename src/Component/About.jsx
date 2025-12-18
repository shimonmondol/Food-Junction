import React from "react";

const About = () => {
  return (
    <div className="flex w-[1000px] pt-20 mt-24 rounded-xl bg-orange-100 mx-auto px-4">
      <div>
        <div>
          <h1 className="font-poppins font-bold text-3xl text-[#333333]">
            What Are People <br />
            <div className="mt-1">
              Saying <span className="text-[#FB9333]">About Us</span>
            </div>
          </h1>
          <p className="font-poppins text-xs text-justify text-[#999999] pt-8">
            We are very happy if you are satisfied with our service and
            products, let's read pure reviews from customers who bought our
            products.
          </p>
        </div>
        <div className="flex mt-4">
          <h1 className="font-raieway font-bold text-4xl text-[#333333]">02</h1>
          <h1 className="font-raieway font-bold text-xs text-[#CCCCCC] mt-5">
            / 05
          </h1>
        </div>
        <img className="w-20 h-8 mt-4" src="Images/Frame 39.png" alt="" />
      </div>
      <div className="relative flex">
        <img
          className="absolute w-12 h-12 ml-16 "
          src="Images/Person1.png"
          alt=""
        />
        <div className="w-48 mt-5 ml-12 bg-white h-72">
          <h1 className="font-poppins font-medium text-[#2B2B2B] mt-10 ml-4">
            Selena Gomz
          </h1>
          <p className="font-poppins font-medium text-xs text-[#999999] mt-1 ml-4">
            22 years
          </p>
          <p className="font-poppins font-regular text-xs text-justify text-[#575757] mt-4 px-4">
            The salad is fresh!!! Don't ask about the sauce again, it's really
            delicious, it's going to be routine. I recommend this salad to all
            of you guys! because they really take care of the quality.
          </p>
        </div>
        <img
          className="absolute w-12 h-12 ml-[304px]"
          src="Images/Person2.png"
          alt=""
        />
        <div className="w-48 mt-5 ml-12 bg-white h-72">
          <h1 className="font-poppins font-medium text-[#2B2B2B] mt-10 ml-4">
            David Ken
          </h1>
          <p className="font-poppins font-medium text-xs text-[#999999] mt-1 ml-4">
            24 years
          </p>
          <p className="font-poppins font-regular text-xs text-justify text-[#575757] mt-4 px-4">
            The salad is fresh!!! Don't ask about the sauce again, it's really
            delicious, it's going to be routine. I recommend this salad to all
            of you guys! because they really take care of the quality.
          </p>
        </div>
        <img
          className="absolute w-12 h-12 ml-[544px]"
          src="Images/Person3.png"
          alt=""
        />
        <div className="w-48 mt-5 ml-12 bg-white h-72">
          <h1 className="font-poppins font-medium text-[#2B2B2B] mt-10 ml-4">
            Jennifer Sina
          </h1>
          <p className="font-poppins font-medium text-xs text-[#999999] mt-1 ml-4">
            21 years
          </p>
          <p className="font-poppins font-regular text-xs text-justify text-[#575757] mt-4 px-4">
            The salad is fresh!!! Don't ask about the sauce again, it's really
            delicious, it's going to be routine. I recommend this salad to all
            of you guys! because they really take care of the quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
