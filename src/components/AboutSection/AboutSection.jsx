import { useEffect, useRef } from "react";
import "./AboutSection.css";

import { FlowButtonDark } from "../FlowButton/FlowButtonDark";

// Inline SVG plane placeholder (red-tinted silhouette)


export default function PilatusSection() {
    const sectionRef = useRef(null);
    const clipRef = useRef(null);
    const imageRef = useRef(null);
    const eyebrowRef = useRef(null);
    const titleLinesRef = useRef([]);
    const bodyRef = useRef(null);
    const ctaRef = useRef(null);
    const badgesRef = useRef([]);
    const tagRef = useRef(null);
    const bracketRef = useRef(null);

    useEffect(() => {
        // Dynamically load GSAP + ScrollTrigger
        const loadGSAP = async () => {
            const gsapScript = document.createElement("script");
            gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
            document.head.appendChild(gsapScript);

            await new Promise((res) => (gsapScript.onload = res));

            const stScript = document.createElement("script");
            stScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js";
            document.head.appendChild(stScript);

            await new Promise((res) => (stScript.onload = res));

            initAnimations();
        };

        const initAnimations = () => {
            const { gsap } = window;
            const { ScrollTrigger } = window;
            gsap.registerPlugin(ScrollTrigger);

            const section = sectionRef.current;
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 85%",
                    end: "top 20%",
                    scrub: false,
                    once: true,
                },
            });

            // — IMAGE REVEAL (clip slides away from right) —
            tl.to(
                clipRef.current,
                {
                    scaleX: 0,
                    duration: 1.2,
                    ease: "expo.inOut",
                    transformOrigin: "right center",
                },
                0
            );

            // — Image subtle zoom in —
            tl.fromTo(
                imageRef.current,
                { scale: 1.5 },
                { scale: 1, duration: 1.6, ease: "power3.out" },
                0.1
            );

            // — Eyebrow —
            tl.fromTo(
                eyebrowRef.current.querySelector("span"),
                { yPercent: 110 },
                { yPercent: 0, duration: 0.7, ease: "power3.out" },
                0.3
            );

            // — Title lines stagger —
            const titleInners = titleLinesRef.current.map((el) =>
                el?.querySelector(".title-line-inner")
            ).filter(Boolean);

            tl.fromTo(
                titleInners,
                { yPercent: 102, skewY: 2 },
                {
                    yPercent: 0,
                    skewY: 0,
                    duration: 1.0,
                    ease: "expo.out",
                    stagger: 0.08,
                },
                0.45
            );

            // — Body text —
            tl.fromTo(
                bodyRef.current,
                { opacity: 0, y: 18 },
                { opacity: 1, y: 0, duration: 0.85, ease: "power3.out" },
                0.85
            );

            // — CTA button —
            tl.fromTo(
                ctaRef.current,
                { opacity: 0, y: 14, scale: 0.96 },
                { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "back.out(1.4)" },
                1.0
            );

            // — Floating tag (top right of image) —
            tl.fromTo(
                tagRef.current,
                { opacity: 0, y: -10 },
                { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
                0.9
            );

            // — Corner bracket —
            tl.fromTo(
                bracketRef.current,
                { opacity: 0, scale: 0.7 },
                { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(2)" },
                1.0
            );

            // — Spec badges stagger —
            tl.fromTo(
                badgesRef.current,
                { opacity: 0, x: 20 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.65,
                    ease: "power3.out",
                    stagger: 0.12,
                },
                1.05
            );
        };

        loadGSAP();

        return () => {
            if (window.ScrollTrigger) window.ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    const specs = [
        { value: "500 kt", label: "Max Speed" },
        { value: "45,000 ft", label: "Ceiling" },
        { value: "2,000 nm", label: "Range" },
    ];

    return (
        <>

            <div className="pilatus-wrapper">


                {/* HERO */}
                <section className="pilatus-hero row" ref={sectionRef}>
                    {/* ── LEFT ── */}
                    <div className="hero-left col-lg-4">
                        <div className="hero-eyebrow mb-5" ref={eyebrowRef}>
                            <span>About us</span>
                        </div>

                        <div className="hero-title-block mb-3">
                            <h2 className="hero-title">
                                {["Raymond", "Aviation"].map((line, i) => (
                                    <span
                                        className="title-line"
                                        key={i}
                                        ref={(el) => (titleLinesRef.current[i] = el)}
                                    >
                                        <span className="title-line-inner">{line}</span>
                                    </span>
                                ))}
                            </h2>


                        </div>

                        <h4 className="mb-4" >Since 1996</h4>

                        <div className="hero-bottom">
                            <p className="hero-body" ref={bodyRef} style={{ opacity: 0 }}>
                                Welcome to precision engineering combined with striking aesthetics.
                                Designed to delight, the PC-24 is your personal Swiss Army knife –
                                with wings. We can fly you into the most exclusive and hard-to-reach
                                airports, avoiding the queues and beating the blues.
                            </p>

                            <div ref={ctaRef} style={{ opacity: 0 }}>
                                <FlowButtonDark text="Read on now" />
                            </div>




                        </div>
                    </div>

                    {/* ── RIGHT (IMAGE) ── */}
                    <div className="hero-right col-lg-8 bg-danger">
                        <div className="image-container" >
                            <img className="jet-image" ref={imageRef} src="../assets/images/about-img.jpg" alt="" />

                        </div>


                    </div>
                </section>
            </div>
        </>
    );
}