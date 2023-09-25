import React from "react";
import Image from "next/image";
import ImageWithHover from "../RedTideGallery";
import GirlPlayground from "@/assets/images/GirlPlayground.svg";
import WomanChild from "@/assets/images/WomanChild.svg";
import OldManDefault from "@/assets/images/OldManDefault.svg";

const OurGallery = () => {
  return (
    <div>
      {/* Section Header*/}
      {/* OurGalleryText */}
      <section className="flex flex-col container mx-auto mt-20 px-[1.5rem] md:mt-[8.13rem] md:px-0 md:mx-0 md:ml-[6.25rem]">
        {/* Top bottom */}
        <div className="mb-[1.12rem]">
          <button className="bg-[#FCD1CD] text-[#1A1A1A] py-[0.5rem] font-lato text-[0.75rem] font-bold px-[1.12rem] inline rounded-full">
            OUR GALLERY
          </button>
        </div>

        {/* Text */}
        <div className="">
          <h1 className="text-[1.5rem] font-black text-[#1A1A1A] font-lato max-w-[17.4375rem] mb-[0.75rem] md:max-w-[67.5rem] md:text-[3rem]">
            Different Shades of <span className="text-[#B80F00]">RedTide</span>{" "}
            Heroes
          </h1>

          <p className="text-[0.75rem] font-lato font-normal max-w-[23.75rem] text-[#1A1A1A] md:text-[1.5rem] md:max-w-[67.5rem]">
            Your blood donation impacts accident victims and those in critical
            conditions. We connect people and resources nationwide, driving
            life-changing progress in transfusion medicine.
          </p>
        </div>
        {/* Images  Section*/}

        <div className="mt-[2.62rem]">
          <ImageWithHover
            imageUrl={GirlPlayground}
            text="Heartbeat of Gratitude"
            additionalText="A Journey of Hope and Healing through Blood Donation"
            marginTop="15rem"
          />
          <ImageWithHover
            imageUrl={WomanChild}
            text="For Love's Sake"
            additionalText="Embracing Life's Precious Moments - The Gift of Blood Donation"
            marginTop="5rem"
          />
          <ImageWithHover
            imageUrl={OldManDefault}
            text="The Gift of Time"
            additionalText="A Tale of Life, Love, and Second Chances with Blood Donors"
            marginTop="5rem"
          />
        </div>
      </section>
    </div>
  );
};

export default OurGallery;
