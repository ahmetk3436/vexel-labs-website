import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const CaseStudiesSection = () => {
  // Mock case studies data
  const caseStudies = [
    {
      title: "E-Commerce Platform Redesign",
      client: "ShopEasy",
      description: "Complete redesign and development of an e-commerce platform resulting in 40% increase in conversions and 25% reduction in bounce rate.",
      tags: ["Web Development", "UI/UX Design", "E-commerce"],
      image: "bg-gradient-to-br from-blue-500/20 to-purple-600/20",
      stats: [
        { label: "Conversion Increase", value: "40%" },
        { label: "Bounce Rate Reduction", value: "25%" },
      ],
    },
    {
      title: "AI-Powered Health App",
      client: "MediCare Plus",
      description: "Developed a mobile application that uses AI to provide personalized health recommendations and track user health metrics.",
      tags: ["Mobile App", "AI", "Healthcare"],
      image: "bg-gradient-to-br from-green-500/20 to-blue-600/20",
      stats: [
        { label: "User Engagement", value: "85%" },
        { label: "App Rating", value: "4.8/5" },
      ],
    },
    {
      title: "Financial Analytics Dashboard",
      client: "InvestPro",
      description: "Created a real-time financial analytics platform with customizable dashboards and predictive modeling capabilities.",
      tags: ["Web App", "Data Visualization", "FinTech"],
      image: "bg-gradient-to-br from-orange-500/20 to-red-600/20",
      stats: [
        { label: "Data Processing Speed", value: "10x" },
        { label: "User Retention", value: "92%" },
      ],
    },
  ];

  return (
    <section id="case-studies" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Explore how we've helped businesses achieve their goals with innovative technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden group border border-border hover:shadow-lg transition-all">
              <div className={`h-48 ${study.image} relative group-hover:opacity-90 transition-opacity`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-xl font-medium text-foreground bg-background/80 px-4 py-2 rounded">
                    {study.client}
                  </div>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {study.title}
                </CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {study.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="bg-muted/50">{tag}</Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {study.description}
                </CardDescription>
                
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {study.stats.map((stat, i) => (
                    <div key={i} className="bg-muted/30 p-3 rounded text-center">
                      <div className="text-xl font-bold text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                  View Case Study
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;