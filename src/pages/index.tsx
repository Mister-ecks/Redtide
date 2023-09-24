import Image from 'next/image'
import RootLayout from '@/components/layout'
import HeroSection from "@/components/HeroSection"
import HeroImages from '@/components/HeroImages'
import { Inter } from 'next/font/google'
import WhereWeAre from '@/components/WhereWeAre'
import WhatYouCanDoContainer from '@/components/WhatYouCanDo'
import DonateNowHeading from '@/components/DonateNowHeading'
import StepsforDonation from '@/components/StepsForDonating'
import OurGallery from '@/components/OurGallery'


const inter = Inter({ subsets: ['latin'] })

const LandingPage = () => {
  return (
    <RootLayout>
      <HeroSection/>
      <HeroImages/>
      <WhereWeAre/>
      <WhatYouCanDoContainer/>
      <DonateNowHeading/>
      <StepsforDonation/>
      <OurGallery/>
    </RootLayout>
  )
}

export default LandingPage