import { Routes, Route, useLocation } from 'react-router-dom'; // ADICIONADO useLocation
import { useLayoutEffect, useRef, useEffect } from 'react'; // ADICIONADO useEffect
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './pages/Home/Home.jsx';
import Projects from './pages/Projects/Projects.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import Footer from './components/Footer/Footer.jsx';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function App() {
  const main = useRef();
  const smoother = useRef();
  const location = useLocation(); 

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      smoother.current = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 2,
        effects: true,
      });
    }, main);

    return () => ctx.revert();
  }, []);

  

  useEffect(() => {
    // 1. Força o scroll para o topo
    if (smoother.current) {
      smoother.current.scrollTop(0);
    }
    
    // 2. Aguarda um milissegundo para o DOM atualizar e recalcula
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]); 



  return (
    <div id="smooth-wrapper" ref={main}>
      <div id="smooth-content">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}