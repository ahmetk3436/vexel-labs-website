const QuoteSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed text-foreground/90 mb-8">
            "The best apps are invisible — they fit so naturally into your life that you forget they're even there."
          </blockquote>
          <div className="h-px w-16 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We build for people who are tired of apps that try to do everything.
            Our goal: one thing, done so well you never need to look elsewhere.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
