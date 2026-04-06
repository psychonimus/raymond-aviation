import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/navigation';
import "./HeroBanner.css";
import { FlowButton } from "../FlowButton/FlowButton";




export default function HeroBanner({headlineUp, headlineDown, bgImage}) {
    return (
        <>

            <div className="HeroBanner-hero-wrapper">

                <div className=" ac-hero-bg" style={{ backgroundImage: `url("${bgImage}")`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} />
                <div className="ac-hero-content">

                    <div className="container-fluid d-flex align-items-end justify-content-between h-100 pb-5">
                        {/* Headline */}
                        <div className="ac-hero-text ">
                            {/* <p className="ac-hero-overline">Our Expert Services</p> */}
                            <h1 className="HeroBanner-hero-headline mt-2 text-start">{headlineUp} <br /> {headlineDown}</h1>
                            <FlowButton text="Request Charter Quote" />
                        </div>
                        <div>
                            {/* Services */}


                            {/* CTA */}
                            
                        </div>
                    </div>







                </div>
            </div>




        </>
    );
}