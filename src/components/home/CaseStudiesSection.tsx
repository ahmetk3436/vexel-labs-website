import { Badge } from "../ui/badge";

const CaseStudiesSection = () => {
  const apps = [
    {
      emoji: "💜",
      name: "MoodPulse",
      tagline: "Emotion tracker",
      description: "Track your mood throughout the day with 8 nuanced emotions. Get weekly insights, spot patterns, and understand what affects your mental state — privately, with no data leaving your device.",
      tags: ["Mood Tracking", "Weekly Insights", "Privacy-First", "Subscription"],
      gradient: "bg-gradient-to-br from-violet-500/20 to-purple-600/20",
      border: "border-violet-500/20",
      stats: [
        { label: "Emotions tracked", value: "8+" },
        { label: "Languages", value: "10" },
      ],
      status: "In Development",
    },
    {
      emoji: "📘",
      name: "Daiyly",
      tagline: "Daily journal",
      description: "A minimal journaling app with a clean daily writing flow, streak tracking, and mood context. No templates, no prompts — just a quiet space to write what matters.",
      tags: ["Journaling", "Streak Tracking", "Minimal", "Subscription"],
      gradient: "bg-gradient-to-br from-blue-500/20 to-blue-600/20",
      border: "border-blue-500/20",
      stats: [
        { label: "Writing focus", value: "Daily" },
        { label: "Languages", value: "10" },
      ],
      status: "In Development",
    },
    {
      emoji: "🌙",
      name: "DriftOff",
      tagline: "Sleep tracker · One-time purchase",
      description: "Track your sleep quality, set smart alarms, and build better bedtime habits. One-time purchase, no subscriptions ever. Your sleep data stays on your phone.",
      tags: ["Sleep Tracking", "Smart Alarm", "One-Time Purchase", "No Subscription"],
      gradient: "bg-gradient-to-br from-indigo-800/40 to-indigo-900/40",
      border: "border-indigo-500/20",
      stats: [
        { label: "Price", value: "$9.99" },
        { label: "Languages", value: "10" },
      ],
      status: "In Development",
    },
  ];

  return (
    <section id="case-studies" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Apps</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Three focused apps. Each one built to do exactly one thing well, with privacy baked in from the start.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <div key={index} className={`${app.gradient} border ${app.border} rounded-2xl overflow-hidden group hover:shadow-lg transition-all flex flex-col`}>
              <div className="p-8 flex-1">
                <div className="text-5xl mb-4">{app.emoji}</div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold">{app.name}</h3>
                  <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-medium">{app.status}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{app.tagline}</p>
                <p className="text-sm text-foreground/80 leading-relaxed mb-6">{app.description}</p>
                <div className="flex flex-wrap gap-2">
                  {app.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="bg-background/30 text-xs">{tag}</Badge>
                  ))}
                </div>
              </div>
              <div className="border-t border-white/10 px-8 py-4 grid grid-cols-2 gap-4">
                {app.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
