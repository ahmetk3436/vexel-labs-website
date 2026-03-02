import React from "react";
import { Button } from "../ui/button";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 100, behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center text-foreground overflow-hidden pt-20">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/5 pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/30 rounded-full filter blur-[100px] animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/30 rounded-full filter blur-[100px] animate-pulse delay-700"></div>

      <div className="container mx-auto px-4 md:px-6 py-10 md:py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 max-w-3xl">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
                🚀 Independent Mobile Studio
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                Apps that help you{" "}
                <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  understand yourself
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                We build small, focused mobile apps for mood tracking, journaling, and sleep — crafted with care, no clutter, no dark patterns.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg" onClick={() => scrollTo("#case-studies")}>
                Explore Our Apps
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg" onClick={() => scrollTo("#contact")}>
                Get in Touch
              </Button>
            </div>

            <div className="pt-4 flex gap-10">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">3</div>
                <div className="text-sm text-muted-foreground mt-1">Apps in Development</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">10</div>
                <div className="text-sm text-muted-foreground mt-1">Languages at Launch</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">0</div>
                <div className="text-sm text-muted-foreground mt-1">Ads. Ever.</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative order-first lg:order-last">
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full p-6">
                {/* MoodPulse card */}
                <div className="bg-gradient-to-br from-violet-500/20 to-purple-600/20 border border-violet-500/20 rounded-2xl p-5 flex flex-col gap-2">
                  <div className="text-3xl">💜</div>
                  <div className="text-sm font-bold">MoodPulse</div>
                  <div className="text-xs text-muted-foreground">Emotion tracker</div>
                  <div className="flex gap-1 mt-1">
                    {["joy","calm","sad","angry"].map(e => (
                      <div key={e} className="h-1.5 flex-1 rounded-full bg-primary/40"></div>
                    ))}
                  </div>
                </div>
                {/* Daiyly card */}
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/20 rounded-2xl p-5 flex flex-col gap-2">
                  <div className="text-3xl">📘</div>
                  <div className="text-sm font-bold">Daiyly</div>
                  <div className="text-xs text-muted-foreground">Daily journal</div>
                  <div className="mt-1 space-y-1">
                    <div className="h-1.5 w-full rounded bg-blue-400/40"></div>
                    <div className="h-1.5 w-4/5 rounded bg-blue-400/30"></div>
                    <div className="h-1.5 w-3/5 rounded bg-blue-400/20"></div>
                  </div>
                </div>
                {/* DriftOff card — spans full width */}
                <div className="col-span-2 bg-gradient-to-br from-indigo-800/40 to-indigo-900/40 border border-indigo-500/20 rounded-2xl p-5 flex items-center gap-4">
                  <div className="text-4xl">🌙</div>
                  <div>
                    <div className="text-sm font-bold">DriftOff</div>
                    <div className="text-xs text-muted-foreground">Sleep tracker · One-time purchase</div>
                    <div className="flex gap-2 mt-2">
                      <div className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full">Smart Alarm</div>
                      <div className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full">$9.99 lifetime</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 bg-card rounded-lg shadow-lg p-3 border border-border">
              <div className="text-sm font-medium">Apps</div>
              <div className="text-2xl font-bold text-primary">3 in dev</div>
            </div>
            <div className="absolute -top-5 -right-5 bg-card rounded-lg shadow-lg p-3 border border-border">
              <div className="text-sm font-medium">Privacy</div>
              <div className="text-2xl font-bold text-primary">100%</div>
            </div>
          </div>
        </div>
      </div>

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
