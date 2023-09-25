import React from "react";
import Image from "next/image";
import ImageWithHover from "../RedTideGallery";
import GirlPlayground from "@/assets/images/GirlPlayground.svg";
import WomanChild from "@/assets/images/WomanChild.svg";
import OldManDefault from "@/assets/images/OldManDefault.svg";

const GalleryShowCase = () => {
  return (
    <div>
      <div className="block h-auto md:flex md:justify-between md:items-center mt-[2.62rem]">
        <div>
          <ImageWithHover
            imageUrl={GirlPlayground}
            text="Heartbeat of Gratitude"
            additionalText="A Journey of Hope and Healing through Blood Donation"
            marginTop={"5rem"}
            marginTopDesktop={"31.12rem"}
          />
        </div>

        <div className="block md:flex md:flex-col md:space-y-[1.25rem]">
          <div>
            <ImageWithHover
              imageUrl={WomanChild}
              text="For Love's Sake"
              additionalText="Embracing Life's Precious Moments - The Gift of Blood Donation"
              marginTop="5rem"
              marginTopDesktop={"11.25rem"}
            />
          </div>

          <div>
            <ImageWithHover
              imageUrl={OldManDefault}
              text="The Gift of Time"
              additionalText="A Tale of Life, Love, and Second Chances with Blood Donors"
              marginTop="5rem"
              marginTopDesktop={"11.25rem"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryShowCase;
