import React from "react";
import Image from "next/image";
import Step1Mobile from "@/assets/images/Step1Mobile.svg";
import Step1Desktop from "@/assets/images/Step1Desktop.svg";
import Step2Mobile from "@/assets/images/Step2Mobile.svg";
import Step2Desktop from "@/assets/images/Step2Desktop.svg";
import Step3Mobile from "@/assets/images/Step3Mobile.svg";
import Step3Desktop from "@/assets/images/Step3Desktop.svg";
import Step4Mobile from "@/assets/images/Step4Mobile.svg";
import Step4Desktop from "@/assets/images/Step4Desktop.svg";
import Step5Mobile from "@/assets/images/Step5Mobile.svg";
import Step5Desktop from "@/assets/images/Step5Desktop.svg";
const StepsforDonation = () => {
  return (
    <div>
      <section className="container flex flex-col  items-center mx-auto max-w-full md:flex-row md:mt-[4.69rem] md:justify-center">
        {/* Row 1 */}
        {/* Mobile */}
        <div className="flex justify-between items-center mx-auto md:hidden">
          <div className="w-1/2">
            <Image src={Step1Mobile} alt="Step 1 Mobile card" />
          </div>
          <div className="w-1/2">
            <Image src={Step2Mobile} alt="Step 2 Mobile card" />
          </div>
        </div>
        {/* Desktop */}
        <div className="flex justify-between items-center">
          <div className="hidden md:block">
            <Image src={Step1Desktop} alt="Image 1 Desktop" />
          </div>

          <div className="hidden md:block">
            <Image src={Step2Desktop} alt="Image 2 Desktop" />
          </div>
          <div className="hidden md:block">
            <Image src={Step3Desktop} alt="Image 3 Desktop" />
          </div>
          <div className="hidden md:block">
            <Image src={Step4Desktop} alt="Image 4 Desktop" />
          </div>
          <div className="hidden md:block">
            <Image src={Step5Desktop} alt="Image 5 Desktop" />
          </div>
        </div>

        {/* Row 2 */}
        <div>
          <div className="flex justify-between items-center mx-auto md:hidden ">
            <div className="w-1/2">
              <Image src={Step3Mobile} alt="Step 3 Mobile card" />
            </div>
            <div className="w-1/2">
              <Image src={Step4Mobile} alt="Step 4 Mobile card" />
            </div>
          </div>
        </div>
        {/* Row Three */}
        <div className="flex mx-auto md:hidden">
          <div className="w-full">
            <Image src={Step5Mobile} alt="Step 5 Mobile card" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default StepsforDonation;
