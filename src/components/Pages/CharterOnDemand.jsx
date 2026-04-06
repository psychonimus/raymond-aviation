import React from 'react'
import HeroBanner from '../Herobanner/HeroBanner'
import CharterOnDemandAbout from '../CharterOnDemandAbout/CharterOnDemandAbout'
import CharterContent from '../CharterContent/CharterContent'
import WhyChooseUsSection from '../WhyChooseUsSection/WhyChooseUs'
import Footer from '../Footer/Footer'




const CharterOnDemand = () => {
  return (
    <>
        <HeroBanner headlineUp="Charter" headlineDown="On-Demand"/>
        <CharterOnDemandAbout/>
        <CharterContent />
        <WhyChooseUsSection />
        <Footer />
        

    </>
  )
}

export default CharterOnDemand