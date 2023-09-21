import React from 'react'
import Image from 'next/image'
import Step1Mobile from "@/assets/images/Step1Mobile.svg"
import Step2Mobile from "@/assets/images/Step2Mobile.svg"
import Step3Mobile from "@/assets/images/Step3Mobile.svg"
import Step4Mobile from "@/assets/images/Step4Mobile.svg"
import Step5Mobile from "@/assets/images/Step5Mobile.svg"
const StepsforDonation = () => {
  return (
    <div>
        <section className='flex flex-col mx-auto max-w-[26.75rem]'>
            <div className='flex justify-between items-top mx-auto'>
                <div className='w-1/2'>
                    <Image src={Step1Mobile} alt='Step 1 Mobile card'/>
                </div>
                <div className='w-1/2'>
                    <Image src={Step2Mobile} alt='Step 2 Mobile card'/>
                </div>
            </div>
            {/* Row 2 */}
            <div>
            <div className='flex justify-between mx-auto'>
                <div className='w-1/2'>
                    <Image src={Step3Mobile} alt='Step 1 Mobile card'/>
                </div>
                <div className='w-1/2'>
                    <Image src={Step4Mobile} alt='Step 2 Mobile card'/>
                </div>
            </div>
            </div>
            {/* Row Three */}
            <div className="flex mx-auto">
                <div className='w-full'>
                    <Image src={Step5Mobile} alt='Step 5 Mobile card'/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default StepsforDonation