import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/navigation';
import "./Hero.css";
import { FlowButton } from "../FlowButton/FlowButton";



// Icon SVGs for services
const icons = {
    charter: (
        <img src="../assets/images/aircraft.svg" alt="" style={{ width: "50px" }} />


    ),
    sales: (
        <img src="../assets/images/aircraft-2.svg" alt="" style={{ width: "45px" }} />

    ),
    design: (
        <img src="../assets/images/Concierge-services.svg" alt="" style={{ width: "45px" }} />

    ),
    mgmt1: (
        <img src="../assets/images/aircraft-management.svg" alt="" style={{ width: "50px" }} />

    ),
    mgmt2: (
        <img src="../assets/images/aviation-consultancy.svg" alt="" style={{ width: "50px" }} />
    ),
    design2: (
        <img src="../assets/images/plane-design.svg" alt="" style={{ width: "50px" }} />
    ),
    partnership: (
        <img src="../assets/images/partnership.svg" alt="" style={{ width: "50px" }} />
    ),
};

const services = [
    { icon: "charter", title: "Charter \n On-Demand", desc: "Bespoke charter services and expert brokerage connecting clients to the finest aircraft worldwide." },
    { icon: "sales", title: "Fractional \n Ownership", desc: "Expert guidance through every stage of aircraft acquisition and remarketing with full market access." },
    { icon: "design", title: "Jet Card \n Programs", desc: "Tailored interior design and completion management for the most discerning aviation clients." },
    { icon: "mgmt1", title: "Aircraft \n Management", desc: "Comprehensive aircraft management ensuring safety, compliance, and operational excellence." },
    { icon: "mgmt2", title: "Aircraft Acquisitions \n & Leasing", desc: "Premium crew management and operational support for private and corporate fleet owners." },
    { icon: "design2", title: "Design & \n Fit-Out Management", desc: "Bespoke charter services and expert brokerage connecting clients to the finest aircraft worldwide." },
    { icon: "sales", title: "Helicopter \n Services", desc: "Expert guidance through every stage of aircraft acquisition and remarketing with full market access." },
    { icon: "design", title: "Empty Leg \n Flights", desc: "Tailored interior design and completion management for the most discerning aviation clients." },
    { icon: "mgmt1", title: "Aircraft \n Maintenance", desc: "Comprehensive aircraft management ensuring safety, compliance, and operational excellence." },
    { icon: "mgmt2", title: "Concierge & Flight \n Care Services", desc: "Premium crew management and operational support for private and corporate fleet owners." },
    { icon: "partnership", title: "Partnership \n Programs", desc: "Bespoke charter services and expert brokerage connecting clients to the finest aircraft worldwide." },
   
];



export default function Hero() {
    return (
        <>

            <div className="ac-hero-wrapper">
                <video
                    className="ac-hero-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/assets/videos/bg-vid.webm" type="video/webm" />
                </video>
                <div className="ac-hero-bg" />
                <div className="ac-hero-content">

                    <div className="d-flex flex-column justify-content-between h-100">
                        {/* Headline */}
                        <div className="ac-hero-text ">
                            {/* <p className="ac-hero-overline">Our Expert Services</p> */}
                            <h1 className="ac-hero-headline mt-2">Your Gateway to <br/> Reliable Private Aviation.</h1>
                        </div>
                        <div>
                            {/* Services */}
                            <div className="ac-services">
                                <Swiper
                                    modules={[Autoplay]}
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    navigation={true}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    loop={true}
                                    breakpoints={{
                                        // when window width is >= 480px
                                        480: {
                                            slidesPerView:2,
                                        },
                                        // when window width is >= 768px
                                        768: {
                                            slidesPerView: 4,
                                        },
                                        // when window width is >= 1024px
                                        1024: {
                                            slidesPerView: 5,
                                        },
                                    }}
                                    className="ac-services-swiper"
                                >
                                    {services.map((svc, i) => (
                                        <SwiperSlide key={svc.title + i}>
                                            <div className="ac-service-item">
                                                <div className="ac-service-icon">{icons[svc.icon]}</div>
                                                <div className="ac-service-title">
                                                    {svc.title.split("\n").map((line, j) => (
                                                        <span key={j}>
                                                            {line}
                                                            {j === 0 && svc.title.includes("\n") ? <br /> : ""}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                            {/* CTA */}
                            <div className="ac-cta-wrap d-flex flex-column align-items-center justify-content-center">
                                
                                <FlowButton text="Request Charter Quote" />
                                
                                {/* <div className="ac-scroll-indicator">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <h6 className="text-white mt-3">Scroll Down</h6>
                                </div> */}
                            </div>
                        </div>
                    </div>







                </div>
            </div>




        </>
    );
}