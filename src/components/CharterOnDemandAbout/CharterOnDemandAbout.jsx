import React from 'react'
import './CharterOnDemandAbout.css'

const CharterOnDemandAbout = () => {
    return (
        <>
            <section className="charter-on-demand-about bg-white py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="charter-on-demand-about-image">
                                <img src="./assets/images/raymond-aviation-logo.svg" style={{ width: "200px" }} alt="Charter On-Demand" />
                            </div>
                        </div>

                        <div className="col-md-9">
                            <div className="charter-on-demand-about-content">
                                <h2 className="charter-on-demand-about-title">Welcome to Raymond Aviation</h2>
                                <p className="charter-on-demand-about-description">where your journey begins the moment you start planning. We believe that booking your next experience should be as seamless and exciting as the destination itself.</p>
                                <h5 className="charter-on-demand-about-tagline">Travel when you decide. Destination of your choice. No schedules. No compromise.</h5>
                                <p className="charter-on-demand-about-description mt-3">Experience the ultimate in global mobility. Book a private jet or a helicopter or a yacht on demand without any long-term commitment for domestic and international flights.

                                    On-demand rental, providing passengers with total control over their schedule, destination and environment.

                                    Whether you're looking for a quick getaway or a meticulously planned event, our mission is to provide a secure, transparent, and instant booking process that respects your time.
                                </p>
                                <p className="charter-on-demand-about-description mt-3">Whether your need is a last-minute board meeting in Delhi, a family holiday to the Rann of Kutch, a medical evacuation, a private celebration on a flight or a yacht party, Raymond Aviation has the fleet, the crew, and the ground logistics to make it seamless.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default CharterOnDemandAbout