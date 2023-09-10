import React from "react";

const WhatYouCanDoContainer = () => {
  return (
    <div>
      <section className="container mx-auto">
        {/* WHAT YOU CAN DO */}
        <div className="mx-auto mt-20  flex flex-col space-y-4 max-w-sm md:mt-44 md:max-w-[67.5rem]">
          {/* Heading Button */}
          <div className="mx-auto">
            <button className="px-4 py-2 text-xs text-[#1A1A1A] font-lato font-bold bg-[#FCD1CD] md:text-[1.125rem] rounded-[2.5rem] md:px-6 md:py-3  ">
              WHAT YOU CAN DO
            </button>
          </div>
          {/* Text Information */}

          <div className="flex-col space-y-2 md:space-y-6">
            <h1 className="text-[#1A1A1A] text-2xl text-center font-black font-lato md:text-5xl">Join Us In Making A Difference</h1>
            <p className="text-xs font-normal text-center text-[#1A1A1A] md:text-2xl">Your blood donation impacts accident victims and those in critical conditions. We connect people and resources nationwide, driving life-changing progress in transfusion medicine.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatYouCanDoContainer;
