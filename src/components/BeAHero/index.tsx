import React from 'react'
import Image from 'next/image'
import MobileHeroBG from "@/assets/images/FirstHero.svg"
import Cape from "@/assets/images/Cape.svg"

const BeAHero = () => {
  return (
    <div className='mt-20'>
        <section className="relative">
        <div>
          <Image src={MobileHeroBG} alt="Hero Background" className="max-w-full flex flex-shrink-0" />
          <div className={`absolute inset-0 flex justify-start items-center h-auto`}>
            <div className={`font-lato flex flex-col justify-center ml-[1.75rem] mt-[3rem]`}>
              <button className='bg-[#FCD1CD] max-w-[8.8125rem] py-[0.63rem] px-[1.5rem] text-[1.125rem] rounded-full font-bold'>BE A HERO</button>
              <h1 className='text-white text-[1.5rem] mt-[1.12rem]'>You Potentially <span className='text-[#B80F00]'>Save Three Lives <br /></span> Every Time You Donate</h1>
              <p className='text-white text-[0.75rem] mt-[0.5rem] font-normal max-w-[23.75rem]'>Embrace the power of your donation and be the hero who saves lives. in the lifesaving journey and make a lasting impact on those who depend on the generosity of donors like you. </p>
              <p className='mt-[0.75rem] text-white text-[0.75rem] font-normal max-w-[23.75rem]'>Get your hero card as recognition for the impact you have made in the society, use this card amazing discounts from your favorite stores.</p>

              <button className='text-[#B80F00] text-[0.875rem]  w-[9.9375rem] py-[0.75rem] px-[1.5rem] rounded-full border-[#B80F00] border-[0.06rem] mt-[1.5rem]'>Find a blood drive</button>
              <Image src={Cape} alt='cape image'/>
            </div>
          </div>
        </div>
        </section>
    </div>
  )
}

export default BeAHero