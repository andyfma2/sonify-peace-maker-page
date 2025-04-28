
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

// Define the testimonials array that was missing
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "NYC Apartment Dweller",
    quote: "Living next to a busy street was unbearable until I installed Sonify. I finally sleep through the night without being woken up by traffic or sirens.",
    avatar: "SJ"
  },
  {
    name: "Mark Williams",
    role: "Remote Professional",
    quote: "Working from home with noisy neighbors was affecting my productivity. Sonify has transformed my home office into a peaceful environment where I can focus.",
    avatar: "MW"
  },
  {
    name: "Jessica Chen",
    role: "Parent of 2",
    quote: "As a mother of two young children, quiet nap times are essential. Sonify has been a game-changer for creating a calm sleeping environment for my kids.",
    avatar: "JC"
  },
  {
    name: "Robert Patel",
    role: "Light Sleeper",
    quote: "I've tried everything from white noise machines to earplugs. Nothing worked until Sonify. It's the only solution that's actually delivered on its promise.",
    avatar: "RP"
  }
];

const Testimonials = () => {
  const headerRef = useIntersectionObserver();
  const testimonialsRef = useIntersectionObserver();
  const statsRef = useIntersectionObserver();

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div ref={headerRef} className="flex flex-col items-center text-center space-y-4 mb-12 opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-dark">What Our Customers Say</h2>
          <p className="text-lg text-slate-medium max-w-prose">
            Don't just take our word for it - see how Sonify has transformed homes and workspaces.
          </p>
        </div>

        <div ref={testimonialsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-0">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border hover:shadow-md transition-shadow duration-300 h-full bg-slate-dark text-white">
              <CardHeader className="pb-2">
                <svg className="h-8 w-8 text-sonify-purple/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
              </CardHeader>
              <CardContent>
                <p className="text-lg italic mb-4 text-white">{testimonial.quote}</p>
              </CardContent>
              <CardFooter className="flex items-center gap-4 pt-2">
                <Avatar>
                  <AvatarFallback className="bg-sonify-purple text-white">{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-300">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div ref={statsRef} className="mt-12 flex justify-center opacity-0">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-md max-w-3xl text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-dark">Proven Results</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
              <div>
                <div className="text-3xl font-bold text-slate-dark">55%</div>
                <p className="text-sm text-slate-medium">Average noise reduction</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-dark">1.5hrs</div>
                <p className="text-sm text-slate-medium">Extra sleep per night</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-dark">98%</div>
                <p className="text-sm text-slate-medium">Customer satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
