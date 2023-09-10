import Image from 'next/image'
import RootLayout from '@/components/layout'
import HeroSection from "@/components/HeroSection"
import HeroImages from '@/components/HeroImages'
import { Inter } from 'next/font/google'
import WhereWeAre from '@/components/WhereWeAre'
import WhatYouCanDoContainer from '@/components/WhatYouCanDo'


const inter = Inter({ subsets: ['latin'] })

const LandingPage = () => {
  return (
    <RootLayout>
      <HeroSection/>
      <HeroImages/>
      <WhereWeAre/>
      <WhatYouCanDoContainer/>
    </RootLayout>
  )
}

export default LandingPage