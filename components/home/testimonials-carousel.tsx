"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Working with Ginger Groove Studios was a game-changer for my album. Their attention to detail and creative input took my music to the next level.",
    name: "Sarah Johnson",
    title: "Independent Artist",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    quote: "The team at Ginger Groove has an incredible ear for sound. They helped refine my tracks while preserving my unique style and vision.",
    name: "Marcus Chen",
    title: "Producer & DJ",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    quote: "I've recorded at many studios, but none compare to the quality and atmosphere at Ginger Groove. It's my go-to studio for all my projects now.",
    name: "Alicia Rodriguez",
    title: "Vocalist & Songwriter",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <QuoteIcon className="h-10 w-10 text-chart-4/60 mb-4" />
                  <p className="text-lg italic mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center mt-8 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === activeIndex ? 'bg-chart-4' : 'bg-muted'
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12"
        onClick={prevTestimonial}
      >
        <ChevronLeftIcon className="h-6 w-6" />
        <span className="sr-only">Previous testimonial</span>
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12"
        onClick={nextTestimonial}
      >
        <ChevronRightIcon className="h-6 w-6" />
        <span className="sr-only">Next testimonial</span>
      </Button>
    </div>
  );
}