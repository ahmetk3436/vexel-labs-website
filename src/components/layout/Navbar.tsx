import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import ThemeToggle from "../ui/ThemeToggle";

const Navbar = ({ scrollY = 0 }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Navigation items
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  // Change navbar style on scroll
  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  // Handle smooth scrolling for anchor links
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center z-50">
          <a href="#home" className="flex items-center" onClick={(e) => handleNavClick(e, "#home")}>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Stardash<span className="text-primary">Tech</span>
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <ThemeToggle />
          <Button variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Get a Quote
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative z-50 flex items-center p-2 text-foreground"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="flex flex-col items-end justify-center space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-4 bg-current transform transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block h-0.5 ${mobileMenuOpen ? "w-6" : "w-5"} bg-current transform transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`fixed inset-0 bg-background/90 backdrop-blur-lg flex flex-col justify-center items-center transition-all duration-300 z-40 ${
            mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col items-center space-y-6 py-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-xl font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Button variant="default" className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;