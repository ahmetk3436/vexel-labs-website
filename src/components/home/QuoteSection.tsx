import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const quotes = [
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs"
  },
  {
    text: "Technology is best when it brings people together.",
    author: "Matt Mullenweg"
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  }
];

export default function QuoteSection() {
  const [currentQuote, setCurrentQuote] = useState(0);

  const getNextQuote = () => {
    const nextQuote = (currentQuote + 1) % quotes.length;
    setCurrentQuote(nextQuote);
  };

  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Inspiring Tech Quotes
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Words that drive innovation and creativity in technology
          </p>
          <Card className="w-full max-w-2xl p-8 mt-8">
            <blockquote className="space-y-2">
              <p className="text-xl font-semibold leading-snug lg:text-2xl lg:leading-normal">
                "{quotes[currentQuote].text}"
              </p>
              <footer className="mt-4 text-sm font-medium text-muted-foreground">
                - {quotes[currentQuote].author}
              </footer>
            </blockquote>
          </Card>
          <Button
            onClick={getNextQuote}
            className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90"
            size="lg"
          >
            Get Another Quote
          </Button>
        </div>
      </div>
    </section>
  );
} 