import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Waveform } from '@/components/ui/waveform';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen hero-gradient flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/30 z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20 pt-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Waveform className="mx-auto" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Ginger Groove Studios
          </h1>
          
          <p className="text-xl md:text-2xl font-medium mb-6 text-gray-200">
            Bring Your Sound To Life
          </p>
          
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Professional music production, mixing, mastering, and recording services 
            to elevate your artistry to the next level.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-chart-4 hover:bg-chart-4/90 text-black">
              <Link href="/quote">Get a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 text-center z-20">
        <div className="animate-bounce mx-auto">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="mx-auto text-white/60"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </div>
    </section>
  );
}