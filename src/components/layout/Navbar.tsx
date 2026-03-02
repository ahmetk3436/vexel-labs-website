import React, { useState } from "react";
import { Button } from "../ui/button";
import ThemeToggle from "../ui/ThemeToggle";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NavLink = ({ href, children, onClick }: NavLinkProps) => (
  <a
    href={href}
    onClick={onClick}
    className="text-sm font-medium transition-colors hover:text-primary"
  >
    {children}
  </a>
);

const Navbar = ({ scrollY = 0 }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Navigation items
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Our Apps", href: "#case-studies" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  // Change navbar style on scroll
  React.useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  // Handle smooth scrolling for anchor links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
          Vexel Labs
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink key={item.name} href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
              {item.name}
            </NavLink>
          ))}
          <ThemeToggle />
          <Button variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => scrollToSection("#contact")}>
            Get in Touch
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink key={item.name} href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
                  {item.name}
                </NavLink>
              ))}
              <Button
                variant="default"
                className="w-full"
                onClick={() => {
                  scrollToSection("#contact");
                  setIsMobileMenuOpen(false);
                }}
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;