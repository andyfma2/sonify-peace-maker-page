
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BedDouble, Music, Wifi } from "lucide-react";
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

// Define the benefits array that was missing
const benefits = [
  {
    title: "Better Sleep",
    description: "Experience deeper, more restful sleep with reduced ambient noise disruptions.",
    icon: <BedDouble className="h-6 w-6 text-champagne-600" />,
    stats: [
      { value: "7.5hr", label: "Avg. Sleep Time" },
      { value: "92%", label: "Sleep Quality" },
      { value: "65%", label: "Noise Reduction" },
      { value: "3x", label: "Fewer Wakeups" }
    ]
  },
  {
    title: "Enhanced Focus",
    description: "Improve concentration and productivity by eliminating distracting sounds.",
    icon: <Music className="h-6 w-6 text-champagne-600" />,
    stats: [
      { value: "45%", label: "Better Focus" },
      { value: "2.5hr", label: "Added Productivity" },
      { value: "70%", label: "Noise Reduction" },
      { value: "4x", label: "Fewer Distractions" }
    ]
  },
  {
    title: "Smart Home Ready",
    description: "Seamlessly integrates with your existing smart home ecosystem.",
    icon: <Wifi className="h-6 w-6 text-champagne-600" />,
    stats: [
      { value: "100%", label: "WiFi Reliability" },
      { value: "5", label: "Supported Platforms" },
      { value: "15m", label: "Wireless Range" },
      { value: "1-Click", label: "Setup" }
    ]
  }
];

const Benefits = () => {
  const headerRef = useIntersectionObserver();
  const cardsRef = useIntersectionObserver();

  return (
    <section id="benefits" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div ref={headerRef} className="flex flex-col items-center text-center space-y-4 mb-12 opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Key Benefits</h2>
          <p className="text-lg text-muted-foreground max-w-prose">
            Experience advanced features that go beyond traditional noise reduction
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-0">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border hover:shadow-md transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center gap-4">
                <div className="bg-champagne-50 p-3 rounded-lg">
                  {benefit.icon}
                </div>
                <CardTitle className="text-xl text-center">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center mb-6">{benefit.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {benefit.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-lg font-bold text-champagne-600">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
