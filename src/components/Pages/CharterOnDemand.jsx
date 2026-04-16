import React from 'react';
import HeroBanner from '../Herobanner/HeroBanner';
import CharterOnDemandAbout from '../CharterOnDemandAbout/CharterOnDemandAbout';
import CharterContent from '../CharterContent/CharterContent';
import WhyChooseUsSection from '../WhyChooseUsSection/WhyChooseUs';
import Footer from '../Footer/Footer';

const charterImages = [
  "/assets/images/charter-on-demand-banner.webp",
  "/assets/images/cod-helicopter.webp",
  "/assets/images/cod-yatch.webp",
  "/assets/images/aircraft-sales.webp",
];

const CharterOnDemand = () => {
  return (
    <>
        <HeroBanner 
            headlineUp="Charter" 
            headlineDown="On-Demand" 
            bgImages={charterImages}
            bgImage="/assets/images/charter-on-demand-banner.webp"
        />
        <CharterOnDemandAbout/>
        <CharterContent />
        <WhyChooseUsSection />
        <Footer />
        

    </>
  )
}

export default CharterOnDemand