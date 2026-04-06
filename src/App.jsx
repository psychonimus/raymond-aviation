import React, { useState, useCallback, Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Menu from './components/Menu/Menu.jsx'
import SmoothScroll from './components/SmoothScroll/SmoothScroll.jsx'
import Footer from './components/Footer/Footer.jsx'
import Contact from './components/Pages/Contact.jsx'
import Skeleton from "@mui/material/Skeleton";
import About from './components/Pages/About.jsx'
import Services from './components/Pages/Services.jsx'
import CharterOnDemand from './components/Pages/CharterOnDemand.jsx'
import FractionalOwnership from './components/Pages/FractionalOwnership.jsx'


const HomePage = lazy(() => import("./components/Pages/Home.jsx"));

function PageSkeleton() {
  return (
    <div className="skel-top">
      <Skeleton variant="rectangular" height={260} sx={{ borderRadius: 2 }} />
      <Skeleton height={48} sx={{ mt: 2 }} />
      <Skeleton height={32} width="60%" />
      <div className="skel-grid">
        <Skeleton variant="rectangular" height={180} sx={{ borderRadius: 2 }} />
        <Skeleton variant="rectangular" height={180} sx={{ borderRadius: 2 }} />
        <Skeleton variant="rectangular" height={180} sx={{ borderRadius: 2 }} />
      </div>
    </div>
  );
}

const MainApp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <SmoothScroll>
      <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Navbar toggleMenu={toggleMenu} />
      <Suspense fallback={<PageSkeleton />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/charter-on-demand" element={<CharterOnDemand />} />
          <Route path="/fractional-ownership" element={<FractionalOwnership />} />
        </Routes>
      </Suspense>

    </SmoothScroll>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  )
}

export default App