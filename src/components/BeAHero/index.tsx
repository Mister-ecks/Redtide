import React from "react";
import Image from "next/image";
import MobileHeroBG from "@/assets/images/FirstHero.svg";
import DesktopHeroBG from "@/assets/images/HeroBG.svg";
import MobileCape from "@/assets/images/Cape.svg";
import DesktopCape from "@/assets/images/Cape-Desktop.svg"

const BeAHero = () => {
  return (
    <div className="mt-20">
      <section className="relative">
        <div>
          <Image
            src={MobileHeroBG}
            alt="Hero Background"
            className="max-w-full flex flex-shrink-0 md:hidden"
          />
          <Image
            src={DesktopHeroBG}
            alt="Desktop Hero Background"
            className="max-w-full flex-shrink-0 hidden md:block"
          />
          <div
            className={`absolute inset-0 flex justify-start items-center h-auto`}
          >
            <div
              className={`font-lato  ml-[1.75rem] mt-[3rem] md:ml-[6.19rem]`}
            >
              <div className="flex flex-col md:flex-row">
                <div>
                  <button className="bg-[#FCD1CD] max-w-[8.8125rem] py-[0.63rem] px-[1.5rem] text-[1.125rem] rounded-full font-bold">
                    BE A HERO
                  </button>
                  <h1 className="text-white text-[1.5rem] mt-[1.12rem] md:text-[3rem] font-bold max-w-[23.75rem] md:max-w-[40rem]">
                    You Potentially{" "}
                    <span className="text-[#B80F00] ">Save Three Lives </span>{" "}
                    Every Time You Donate
                  </h1>
                  <p className="text-white text-[0.75rem] md:text-[1.5rem] mt-[0.5rem] font-normal max-w-[23.75rem] md:max-w-[40rem]">
                    Embrace the power of your donation and be the hero who saves
                    lives. in the lifesaving journey and make a lasting impact
                    on those who depend on the generosity of donors like you.{" "}
                  </p>
                  <p className="mt-[0.75rem] text-white text-[0.75rem] font-normal max-w-[23.75rem] md:max-w-[38.75rem] md:text-[1.5rem]">
                    Get your hero card as recognition for the impact you have
                    made in the society, use this card amazing discounts from
                    your favorite stores.
                  </p>

                  <button className="text-[#B80F00] text-[0.875rem]  max-w-[9.9375rem] py-[0.75rem] px-[1.5rem] rounded-full border-[#B80F00] border-[0.06rem] mt-[1.5rem] md:max-w-[14.8125rem] md:text-[1.5rem]">
                    Find a blood drive
                  </button>
                </div>
                <div>
                <Image src={MobileCape} alt="cape image" className="md:hidden"/>
                <Image src={DesktopCape} alt="Desktop cape" className="hidden md:block"/>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BeAHero;
