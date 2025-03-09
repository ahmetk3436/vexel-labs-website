import React from "react";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center text-foreground overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/5 pointer-events-none"></div>
      
      {/* Animated background element */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/30 rounded-full filter blur-[100px] animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/30 rounded-full filter blur-[100px] animate-pulse delay-700"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-10 md:py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 max-w-3xl">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Innovative
                </span>{" "}
                Technology Solutions for the Digital Age
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                We transform ideas into cutting-edge digital experiences through web development, mobile applications, and artificial intelligence.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg">
                Explore Our Work
              </Button>
            </div>
            
            <div className="pt-4">
              <p className="text-muted-foreground mb-3">Trusted by innovative companies</p>
              <div className="flex flex-wrap gap-8 items-center">
                <div className="text-muted-foreground/70 font-semibold">ACME Inc</div>
                <div className="text-muted-foreground/70 font-semibold">TechCorp</div>
                <div className="text-muted-foreground/70 font-semibold">Innovate AI</div>
                <div className="text-muted-foreground/70 font-semibold">NextGen</div>
                <div className="text-muted-foreground/70 font-semibold">FutureTech</div>
              </div>
            </div>
          </div>
          
          {/* Hero image/illustration */}
          <div className="relative order-first lg:order-last">
            <div className="relative w-full h-[400px] lg:h-[500px] bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-lg overflow-hidden flex items-center justify-center">
              {/* Tech illustration */}
              <div className="relative w-4/5 h-4/5">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path
                    fill="currentColor"
                    className="text-primary"
                    d="M45.7,-52.9C59.1,-41.8,69.9,-26.9,72.6,-10.5C75.3,5.9,69.8,23.9,59.2,37.5C48.6,51.1,33,60.2,15.4,67.3C-2.3,74.3,-22,79.2,-37.9,72.7C-53.8,66.1,-66,48.1,-71.5,28.8C-77,9.5,-75.7,-11,-68.3,-28.2C-60.8,-45.5,-47.1,-59.4,-32,-66.2C-16.8,-72.9,-0.4,-72.6,14.8,-68.4C30,-64.3,32.3,-64,45.7,-52.9Z"
                    transform="translate(100 100) scale(1.1)"
                  />
                </svg>
                
                {/* Floating tech elements */}
                <div className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-primary animate-float"></div>
                <div className="absolute top-2/3 right-1/4 w-8 h-8 rounded-full bg-purple-500 animate-float animation-delay-300"></div>
                <div className="absolute bottom-1/4 right-1/3 w-10 h-10 rounded-lg bg-accent animate-float animation-delay-600"></div>
                
                {/* Code elements */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 backdrop-blur-sm bg-card/30 rounded-lg border border-border p-3 animate-float animation-delay-900">
                  <div className="h-2 w-20 bg-primary/50 rounded mb-2"></div>
                  <div className="h-2 w-16 bg-muted-foreground/30 rounded mb-2"></div>
                  <div className="h-2 w-24 bg-muted-foreground/30 rounded mb-2"></div>
                  <div className="h-2 w-12 bg-primary/50 rounded"></div>
                </div>
              </div>
            </div>
            
            {/* Stats badges */}
            <div className="absolute -bottom-5 -left-5 bg-card rounded-lg shadow-lg p-3 border border-border">
              <div className="text-sm font-medium">Projects Completed</div>
              <div className="text-2xl font-bold text-primary">200+</div>
            </div>
            
            <div className="absolute -top-5 -right-5 bg-card rounded-lg shadow-lg p-3 border border-border">
              <div className="text-sm font-medium">Client Satisfaction</div>
              <div className="text-2xl font-bold text-primary">98%</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;