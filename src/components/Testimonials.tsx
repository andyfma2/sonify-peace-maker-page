
import React from 'react';
import { 
  Card, 
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "After months of being woken up by my neighbor's TV, I installed Sonify and now sleep through the night. It's been life-changing!",
      name: "Sarah J.",
      role: "Apartment Resident",
      avatar: "SJ"
    },
    {
      quote: "Working from home became impossible with noisy neighbors. Sonify has made my home office a place where I can actually focus again.",
      name: "Mark T.",
      role: "Remote Professional",
      avatar: "MT"
    },
    {
      quote: "I was skeptical at first, but the difference is remarkable. The device looks great on my wall and has dramatically reduced the noise from next door.",
      name: "Priya K.",
      role: "Light Sleeper",
      avatar: "PK"
    },
    {
      quote: "We have three units in our apartment and the difference is night and day. Worth every penny for the peace of mind it brings.",
      name: "David L.",
      role: "Urban Dweller",
      avatar: "DL"
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-prose">
            Don't just take our word for it - see how Sonify has transformed homes and workspaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border hover:shadow-md transition-shadow duration-300 h-full">
              <CardHeader className="pb-2">
                <svg className="h-8 w-8 text-sonify-purple/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
              </CardHeader>
              <CardContent>
                <p className="text-lg italic mb-4">{testimonial.quote}</p>
              </CardContent>
              <CardFooter className="flex items-center gap-4 pt-2">
                <Avatar>
                  <AvatarFallback className="bg-sonify-purple text-white">{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-md max-w-3xl text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Proven Results</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
              <div>
                <div className="text-3xl font-bold text-sonify-purple">1.5hrs</div>
                <p className="text-sm text-muted-foreground">Average extra sleep per night</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-sonify-purple">50%</div>
                <p className="text-sm text-muted-foreground">Improved perceived quietness</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-sonify-purple">98%</div>
                <p className="text-sm text-muted-foreground">Customer satisfaction rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
