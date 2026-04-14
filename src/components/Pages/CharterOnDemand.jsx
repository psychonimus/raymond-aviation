import React from 'react';
import HeroBanner from '../Herobanner/HeroBanner';
import CharterOnDemandAbout from '../CharterOnDemandAbout/CharterOnDemandAbout';
import CharterContent from '../CharterContent/CharterContent';
import WhyChooseUsSection from '../WhyChooseUsSection/WhyChooseUs';
import Footer from '../Footer/Footer';

const charterImages = [
  "/assets/images/charter-on-demand-banner.jpg",
  "/assets/images/vip-charter.jpg",
  "/assets/images/group-charter.jpg",
  "/assets/images/air-ambulance.jpg",
  "/assets/images/charter-revenue.jpg"
];

const CharterOnDemand = () => {
  return (
    <>
        <HeroBanner 
            headlineUp="Charter" 
            headlineDown="On-Demand" 
            bgImages={charterImages}
            bgImage="/assets/images/charter-on-demand-banner.jpg"
        />
        <CharterOnDemandAbout/>
        <CharterContent />
        <WhyChooseUsSection />
        <Footer />
        

    </>
  )
}

export default CharterOnDemand