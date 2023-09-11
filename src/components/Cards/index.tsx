import React from 'react'
import Image from 'next/image'

interface CardsProps  {
    head: string;
    info:string;
    picture1: string;
    picture2: string
}



const Cards: React.FC<CardsProps> = ({head, info, picture1, picture2}) => {
  return (
    <div>
        <section>
            <div className='py-6  px-4 flex space-x-4 mx-auto items-center max-w-[26.75rem] md:max-w-[38.625rem] border-b border-b-[#E0E0E0] md:border-b-0'>
                {/* Photo */}
                {/* Mobile Phone */}
                <div className='md:hidden ' >
                    <Image src={picture1} alt="phone icon"  />
                </div>
                <div className='hidden md:block'>
                    <Image src={picture2} alt='desktop icon' />
                </div>
                

                {/* Text */}
                <div className='max-w-[17.0625rem] md:max-w-[27.8125rem]'>
                    <h1 className='text-left leading-normal text-lg font-bold md:text-[2.125rem]'>{head}</h1>
                    <p className='text-[#1A1A1A] mt-2 text-xs md:text-2xl md:mt-3'>{info}</p>
                    <button className='py-3 px-6 text-sm md:text-2xl border rounded-full text-[#B80F00] mt-[0.75rem] md:mt-6 border-[#B80F00] md:border-2'>Donate</button>
                </div>

            </div>
        </section>
    </div>
  )
}

export default Cards