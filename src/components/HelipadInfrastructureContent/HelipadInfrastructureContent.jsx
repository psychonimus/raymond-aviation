import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../CharterContent/CharterContent.css";

const tabs = [
    {
        id: "solution",
        label: "End-to-End Helipad Solution",
        image: "./assets/images/helipad-infra-cover.jpg",
        heading: "Integrated Aviation Solutions",
        body: [
            "",
        ],
        sections: [
            {
                title: "Consultancy & Feasibility",
                desc: "We assess site suitability, airspace constraints, obstacle limitation surfaces (OLS), wind analysis, and local zoning regulations to deliver a definitive feasibility report."
            },
            {
                title: "Master Planning & Design",
                desc: "We create DGCA-compliant helipad layouts TLOF, FATO, approach/departure sectors, lighting, markings, and structural load calculations."
            },
            {
                title: "Regulatory Approvals",
                desc: "We manage the entire approval lifecycle across DGCA, AAI, BCAS, state aviation departments, municipal bodies, and environment/coastal zone authorities."
            },
            {
                title: "Construction & Project Management",
                desc: "From earthworks and structural piling to surface finish, lighting systems, fuel facilities, and passenger lounges, we deliver turnkey construction to international standards."
            },
            {
                title: "Commissioning & Licensing",
                desc: "We facilitate DGCA helipad licensing, conduct pre-commissioning test flights, and ensure all safety systems are certified and operational."
            },
            {
                title: "Operations & Management",
                desc: "Ongoing helipad management including ATC liaison, ground handling, maintenance, fuelling, safety audits, and 24/7 operational support."
            }

        ]
    },
    
];

export default function HelipadInfrastructureContent() {
    const [active, setActive] = useState(0);
    const [animating, setAnimating] = useState(false);
    const imageRef = useRef(null);
    const contentRef = useRef(null);
    const statsRef = useRef([]);

    const switchTab = (idx) => {
        if (idx === active || animating) return;
        setAnimating(true);

        const imgEl = imageRef.current;
        const contentEl = contentRef.current;

        gsap.timeline()
            .to(imgEl, { scale: 1.08, opacity: 0, duration: 0.45, ease: "power2.in" })
            .to(contentEl, { y: 18, opacity: 0, duration: 0.3, ease: "power2.in" }, "<")
            .add(() => {
                setActive(idx);
            });
    };

    useEffect(() => {
        if (!animating) return;

        const imgEl = imageRef.current;
        const contentEl = contentRef.current;

        gsap.set(imgEl, { scale: 1.08, opacity: 0 });
        gsap.set(contentEl, { y: 18, opacity: 0 });

        gsap.timeline({ onComplete: () => setAnimating(false) })
            .to(imgEl, { scale: 1, opacity: 1, duration: 0.55, ease: "power3.out" })
            .to(contentEl, { y: 0, opacity: 1, duration: 0.45, ease: "power3.out" }, "-=0.3");
    }, [active]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".charters-section",
                start: "top 75%",
            }
        });

        tl.fromTo(imageRef.current,
            { x: -40, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.9, ease: "power3.out" }
        )
        .fromTo(contentRef.current,
            { x: 40, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
            "-=0.6"
        );
    }, []);

    const tab = tabs[active];

    return (
        <section className="charters-section">
            <div className="image-panel">
                <img ref={imageRef} src={tab.image} alt={tab.heading} />
                <div className="image-overlay" />
            </div>

            <div className="content-panel">
                <nav className="tab-nav" role="tablist">
                    {tabs.map((t, i) => (
                        <button
                            key={t.id}
                            className={`tab-btn${active === i ? " active" : ""}`}
                            onClick={() => switchTab(i)}
                        >
                            {t.label}
                        </button>
                    ))}
                </nav>

                <div className="content-inner" ref={contentRef}>
                    <h2 className="content-heading">
                        {tab.heading.split(" ").map((word, wi) => (
                            <span key={wi} style={{ color: wi === 1 ? "var(--primary)" : "inherit" }}>
                                {word}{" "}
                            </span>
                        ))}
                    </h2>

                    <div className="content-body">
                        {tab.body.map((para, pi) => (
                            <p key={pi}>{para}</p>
                        ))}
                        <div className="mt-4">
                            {tab.sections.map((section, si) => (
                                <div key={si} className="mb-4">
                                    <h5 style={{ color: "var(--primary)" }}>{section.title}</h5>
                                    <p className="text-white opacity-75">{section.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="deco-number">0{active + 1}</div>
            </div>
        </section>
    );
}
