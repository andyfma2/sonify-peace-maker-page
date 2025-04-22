import React from 'react';
import { useToast } from "@/hooks/use-toast"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const PreOrderForm = () => {
  const [email, setEmail] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { toast } = useToast();
  const formRef = useIntersectionObserver();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // For now, just show a success message
    // This should be replaced with actual backend integration once Supabase is connected
    toast({
      title: "Thank you for your interest!",
      description: "We'll notify you when orders open on May 28th.",
    });
    
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <section id="pre-order" className="py-16 bg-secondary">
      <div className="container px-4 md:px-6">
        <div ref={formRef} className="max-w-md mx-auto text-center space-y-8 opacity-0">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Pre-Order Coming Soon</h2>
            <p className="text-muted-foreground">
              Be the first to know when orders open on May 28th
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Subscribing..." : "Notify Me"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PreOrderForm;
