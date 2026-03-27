import { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";





export default function Navbar({ toggleMenu }) {
  const [lang, setLang] = useState("EN");
  const [region, setRegion] = useState("US");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>

      <nav className={`ac-navbar ${isScrolled ? "scrolled" : ""} ${isHidden ? "hidden" : ""}`}>
        {/* Left */}
        <div className="ac-nav-left">

          <a className="ac-nav-services d-none d-md-block">Services</a>
        </div>

        {/* Center Brand */}
        <Link to="/" className="ac-nav-brand ">
          <img src="../assets/images/raymond-aviation-logo.svg" alt="" style={{ width: "130px" }} />
        </Link>

        {/* Right */}
        <div className="ac-nav-right">
          <Link to="/contact" className="ac-nav-contact d-none d-md-block">Contact Us</Link>

          <button onClick={toggleMenu} className="ac-hamburger" aria-label="Menu">
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </>
  );
}