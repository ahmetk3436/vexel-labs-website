import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/home/HeroSection";
import ServicesSection from "./components/home/ServicesSection";
import CaseStudiesSection from "./components/home/CaseStudiesSection";
import TeamSection from "./components/home/TeamSection";
import ContactSection from "./components/home/ContactSection";
import QuoteSection from "./components/home/QuoteSection";
import { useInView } from "react-intersection-observer";
import { Toaster } from "sonner";

function App() {
  const [scrollY, setScrollY] = useState(0);
  
  // Refs for scroll animations
  const [quoteRef, quoteInView] = useInView({ 
    triggerOnce: true,
    threshold: 0.1
  });

  const [servicesRef, servicesInView] = useInView({ 
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [caseStudiesRef, caseStudiesInView] = useInView({ 
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [teamRef, teamInView] = useInView({ 
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [contactRef, contactInView] = useInView({ 
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update document title
  useEffect(() => {
    document.title = "Vexel Labs | Mobile Apps for Real Life";
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans antialiased">
      <Navbar scrollY={scrollY} />
      <main className="flex-grow">
        <HeroSection />
        
        <div 
          ref={quoteRef} 
          className={`transition-opacity duration-1000 ease-in-out ${
            quoteInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <QuoteSection />
        </div>

        <div 
          ref={servicesRef} 
          className={`transition-opacity duration-1000 ease-in-out ${
            servicesInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <ServicesSection />
        </div>
        
        <div 
          ref={caseStudiesRef} 
          className={`transition-opacity duration-1000 ease-in-out ${
            caseStudiesInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <CaseStudiesSection />
        </div>
        
        <div 
          ref={teamRef} 
          className={`transition-opacity duration-1000 ease-in-out ${
            teamInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <TeamSection />
        </div>
        
        <div 
          ref={contactRef} 
          className={`transition-opacity duration-1000 ease-in-out ${
            contactInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <ContactSection />
        </div>
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;