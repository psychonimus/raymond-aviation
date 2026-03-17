import { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";





export default function Navbar({ toggleMenu }) {
  const [lang, setLang] = useState("EN");
  const [region, setRegion] = useState("US");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      
      <nav className={`ac-navbar ${isScrolled ? "scrolled" : ""}`}>
        {/* Left */}
        <div className="ac-nav-left">
          <select value={lang} onChange={e => setLang(e.target.value)}>
            <option>EN</option>
            <option>FR</option>
            <option>DE</option>
            <option>ES</option>
          </select>
          <button className="ac-nav-search d-none d-md-block" aria-label="Search">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>
          <a className="ac-nav-services d-none d-md-block">Services</a>
        </div>

        {/* Center Brand */}
        <Link to="/" className="ac-nav-brand ">
          <img src="../assets/images/raymond-aviation-logo.svg" alt="" style={{width : "120px"}} />
        </Link>

        {/* Right */}
        <div className="ac-nav-right">
          <a className="ac-nav-contact d-none d-md-block">Contact Us</a>
          
          <button onClick={toggleMenu} className="ac-hamburger" aria-label="Menu">
            <span/>
            <span/>
            <span/>
          </button>
        </div>
      </nav>
    </>
  );
}