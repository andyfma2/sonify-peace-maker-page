
import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/164ec7e6-9781-413e-9eaf-873bfafc4af6.png" 
              alt="Sonify Logo" 
              className="h-8 w-auto mr-2" 
            />
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#how-it-works" className="text-sm font-medium text-slate-dark hover:text-book-cloth transition-colors">
            How It Works
          </a>
          <a href="#benefits" className="text-sm font-medium text-slate-dark hover:text-book-cloth transition-colors">
            Benefits
          </a>
          <a href="#features" className="text-sm font-medium text-slate-dark hover:text-book-cloth transition-colors">
            Features
          </a>
          <a href="#testimonials" className="text-sm font-medium text-slate-dark hover:text-book-cloth transition-colors">
            Testimonials
          </a>
          <a href="#faq" className="text-sm font-medium text-slate-dark hover:text-book-cloth transition-colors">
            FAQ
          </a>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button
            className="hidden md:flex bg-slate-dark text-white hover:bg-slate-medium"
            onClick={() => document.getElementById('order-now')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Order Now
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <a href="#how-it-works" className="text-base font-medium text-slate-dark hover:text-book-cloth transition-colors">
                  How It Works
                </a>
                <a href="#benefits" className="text-base font-medium text-slate-dark hover:text-book-cloth transition-colors">
                  Benefits
                </a>
                <a href="#features" className="text-base font-medium text-slate-dark hover:text-book-cloth transition-colors">
                  Features
                </a>
                <a href="#testimonials" className="text-base font-medium text-slate-dark hover:text-book-cloth transition-colors">
                  Testimonials
                </a>
                <a href="#faq" className="text-base font-medium text-slate-dark hover:text-book-cloth transition-colors">
                  FAQ
                </a>
                <Button
                  className="mt-4 w-full bg-slate-dark text-white hover:bg-slate-medium"
                  onClick={() => document.getElementById('order-now')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Order Now
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
