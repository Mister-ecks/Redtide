import React from "react";
import Image from "next/image";
import Logo1Mobile from "@/assets/images/Logo1Mobile.svg"
import Logo2Mobile from "@/assets/images/Logo2Mobile.svg"
import Logo3Mobile from "@/assets/images/Logo3Mobile.svg"
import Logo4Mobile from "@/assets/images/Logo4Mobile.svg"
import Logo5Mobile from "@/assets/images/Logo5Mobile.svg"
import Logo6Mobile from "@/assets/images/Logo6Mobile.svg"
import Logo7Mobile from "@/assets/images/Logo7Mobile.svg"
import Logo8Mobile from "@/assets/images/Logo8Mobile.svg"

const OurPartners = () => {
  return (
    <div>
      <section className="container mx-auto flex justify-center items-center flex-col space-y-[2.25rem] mt-20">
        {/* {/* Top Section for our partners */}

        <div>
          <div className="flex justify-center mb-[1.12rem]">
            <button className="bg-[#fcd1cd] text-[#1a1a1a] rounded-full text-center py-[0.63rem] px-[1.13rem] font-lato font-bold md:px-[1.5rem] md:text-[1.125rem]">
              OUR PARTNERS
            </button>
          </div>

          <div className="">
            <h1 className="text-[1.5rem] font-black font-lato text-[#1a1a1a] mx-auto text-center mb-[0.5rem] max-w-[22.75rem] md:text-[3rem] md:max-w-full">
              Organizations in This Journey With Redtide
            </h1>
            <p className="text-center text-[0.75rem] font-lato mx-auto font-normal max-w-[23.875rem] text-[#3B4644] md:text-[1.5rem] md:max-w-full">
              Your blood donation impacts accident victims and those in critical
              conditions. We connect people and resources nationwide, driving
              life-changing progress in transfusion medicine.
            </p>
          </div>
        </div>

        {/* Logo Divs */}
        <div className="flex mx-auto justify-center items-center flex-col space-y-[1.5rem] md:space-y-[2rem]">
            {/* Logo div 1 & 2 */}
            <div className="md:flex md:items-center md:space-x-[2rem]">
            <div className="flex items-center justify-center space-x-[1.5rem] md:space-x-[2rem]">
                <Image src={Logo1Mobile} alt="Logo1Mobile"/>
                <Image src={Logo2Mobile} alt="Logo2Mobile"/>
            </div>
            {/* Logo div 3 & 4 */}
            <div className="flex items-center justify-center space-x-[1.5rem] md:space-x-[2rem]">
                <Image src={Logo3Mobile} alt="Logo3Mobile"/>
                <Image src={Logo4Mobile} alt="Logo4Mobile"/>
            </div>
            </div>
           
            {/* Logo Div 5 & 6 */}
            <div className="md:flex md:items-center md:space-x-[2rem]">
            <div className="flex items-center justify-center space-x-[1.5rem] md:space-x-[2rem]">
                <Image src={Logo5Mobile} alt="Logo5Mobile"/>
                <Image src={Logo6Mobile} alt="Logo6Mobile"/>
            </div>
            {/* Logo div 7 & 8 */}
            <div className="flex items-center space-x-[1.5rem] md:space-x-2rem justify-center">
                <Image src={Logo7Mobile} alt="Logo7Mobile"/>
                <Image src={Logo8Mobile} alt="Logo8Mobile"/>
            </div>
            </div>
            
        </div>
      </section>
    </div>
  );
};

export default OurPartners;
