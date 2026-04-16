import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './CharterContent.css'

const tabs = [
  {
    id: "private",
    label: "Group Charter",
    image: "./assets/images/group-charter.webp",
    heading: "Group Charter",
    body: [
      "For corporate groups, incentive travel, sports teams, and conference delegations, Raymond Aviation offers group charter solutions, combining the logistics of commercial group travel with the exclusivity and flexibility of private aviation.",
      
    ],
    stats: [{ label: "Passengers capacity depending on aircraft type", value: "6 - 50+" }, { label: "with multiple departure points", value: "Coordinated group itineraries" }, { label: "at origin and destination", value: "Dedicated ground concierge" }],
  },
  {
    id: "group",
    label: "Medical & Air Ambulance Charter",
    image: "./assets/images/aircraft-sales.webp",
    heading: "Medical & Air Ambulance Charter",
    body: [
      "When health demands urgent response, time becomes the most critical factor. Raymond Aviation provides air ambulance and medevac charter services, configured for patient care, staffed with qualified medical crew, and cleared for priority departure at the shortest possible notice.",
      
    ],
    stats: [{ label: "oxygen, and monitoring systems", value: "Aircraft equipped with medical stretchers" }, { label: "ground ambulances, and attending physicians", value: "Coordination with hospitals" }, { label: "Both domestic and international medical evacuations handled", value: "Domestic and International" }],
  },
];

export default function CharterContent() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef([]);
  const prevActive = useRef(0);

  const switchTab = (idx) => {
    if (idx === active || animating) return;
    setAnimating(true);

    const imgEl = imageRef.current;
    const contentEl = contentRef.current;

    // Outgoing animation
    gsap.timeline()
      .to(imgEl, { scale: 1.08, opacity: 0, duration: 0.45, ease: "power2.in" })
      .to(contentEl, { y: 18, opacity: 0, duration: 0.3, ease: "power2.in" }, "<")
      .add(() => {
        prevActive.current = active;
        setActive(idx);
      });
  };

  useEffect(() => {
    if (!animating) return;

    const imgEl = imageRef.current;
    const contentEl = contentRef.current;

    // Incoming animation
    gsap.set(imgEl, { scale: 1.08, opacity: 0 });
    gsap.set(contentEl, { y: 18, opacity: 0 });

    gsap.timeline({ onComplete: () => setAnimating(false) })
      .to(imgEl, { scale: 1, opacity: 1, duration: 0.55, ease: "power3.out" })
      .to(contentEl, { y: 0, opacity: 1, duration: 0.45, ease: "power3.out" }, "-=0.3")
      .fromTo(
        statsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: "power2.out" },
        "-=0.2"
      );
  }, [active]);

  // Mount animation
  useEffect(() => {
    const imgEl = imageRef.current;
    const contentEl = contentRef.current;

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".charters-section",
        start: "top 75%",
      }
    });

    tl.fromTo(imgEl, 
      { x: -40, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 0.9, ease: "power3.out" }
    )
    .fromTo(contentEl, 
      { x: 40, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 0.9, ease: "power3.out" }, 
      "-=0.6"
    )
    .fromTo(statsRef.current, 
      { y: 24, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: "power2.out" }, 
      "-=0.4"
    );
  }, []);

  const tab = tabs[active];

  return (
    <>
      

      <section className="charters-section">
        {/* LEFT: Image */}
        <div className="image-panel">
          <img ref={imageRef} src={tab.image} alt={tab.heading} />
          {/* <div className="image-overlay" /> */}
          {/* <div className="image-label">BBAC Aviation</div> */}
        </div>

        {/* RIGHT: Content */}
        <div className="content-panel">
          {/* Tabs */}
          <nav className="tab-nav" role="tablist">
            {tabs.map((t, i) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={active === i}
                className={`tab-btn${active === i ? " active" : ""}`}
                onClick={() => switchTab(i)}
              >
                {t.label}
              </button>
            ))}
          </nav>

          {/* Animated Content */}
          <div className="content-inner" ref={contentRef}>
            <h2 className="content-heading">
              {tab.heading.split(" ").map((word, wi) => (
                <span key={wi} style={{ color: wi === 0 ? "inherit" : wi === 1 ? "var(--gold)" : "inherit" }}>
                  {word}{" "}
                </span>
              ))}
            </h2>

            <div className="content-body">
              {tab.body.map((para, pi) => (
                <p key={pi}>{para}</p>
              ))}
            </div>

            {/* Stats */}
            <div className="stats-row">
              {tab.stats.map((s, si) => (
                <div
                  key={s.label}
                  className="stat-item"
                  ref={(el) => (statsRef.current[si] = el)}
                >
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative large number */}
          <div className="deco-number">0{active + 1}</div>
        </div>
      </section>
    </>
  );
}