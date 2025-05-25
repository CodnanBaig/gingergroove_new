import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MusicIcon, 
  HeadphonesIcon, 
  MicIcon, 
  PenToolIcon, 
  SlidersIcon,
  SpeakerIcon,
  ArrowRightIcon,
  MapPinIcon
} from 'lucide-react';
import { Waveform } from '@/components/ui/waveform';
import HeroSection from '@/components/home/hero-section';
import TestimonialsCarousel from '@/components/home/testimonials-carousel';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      
      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From concept to final product, we offer comprehensive music production services to bring your vision to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 - Mixing */}
            <Card className="service-card border-border/50 overflow-hidden">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-chart-1/20 flex items-center justify-center mb-4">
                  <SlidersIcon className="h-6 w-6 text-chart-1" />
                </div>
                <h3 className="text-xl font-bold mb-2">Mixing</h3>
                <p className="text-muted-foreground mb-4">
                  Professional mixing to balance your tracks and create a cohesive sound that stands out.
                </p>
                <Link href="/services#mixing" className="group inline-flex items-center text-sm font-medium text-primary">
                  Learn More
                  <ArrowRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
            
            {/* Service 2 - Mastering */}
            <Card className="service-card border-border/50 overflow-hidden">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-chart-2/20 flex items-center justify-center mb-4">
                  <HeadphonesIcon className="h-6 w-6 text-chart-2" />
                </div>
                <h3 className="text-xl font-bold mb-2">Mastering</h3>
                <p className="text-muted-foreground mb-4">
                  Final polish for your music, optimized for all platforms and playback systems.
                </p>
                <Link href="/services#mastering" className="group inline-flex items-center text-sm font-medium text-primary">
                  Learn More
                  <ArrowRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
            
            {/* Service 3 - Production */}
            <Card className="service-card border-border/50 overflow-hidden">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-chart-3/20 flex items-center justify-center mb-4">
                  <MusicIcon className="h-6 w-6 text-chart-3" />
                </div>
                <h3 className="text-xl font-bold mb-2">Production</h3>
                <p className="text-muted-foreground mb-4">
                  Full-service music production from arrangement to final delivery.
                </p>
                <Link href="/services#production" className="group inline-flex items-center text-sm font-medium text-primary">
                  Learn More
                  <ArrowRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
            
            {/* Service 4 - Recording */}
            <Card className="service-card border-border/50 overflow-hidden">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-chart-4/20 flex items-center justify-center mb-4">
                  <MicIcon className="h-6 w-6 text-chart-4" />
                </div>
                <h3 className="text-xl font-bold mb-2">Recording</h3>
                <p className="text-muted-foreground mb-4">
                  High-quality recording sessions in our state-of-the-art studio environment.
                </p>
                <Link href="/services#recording" className="group inline-flex items-center text-sm font-medium text-primary">
                  Learn More
                  <ArrowRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
            
            {/* Service 5 - Lyrics */}
            <Card className="service-card border-border/50 overflow-hidden">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-chart-5/20 flex items-center justify-center mb-4">
                  <PenToolIcon className="h-6 w-6 text-chart-5" />
                </div>
                <h3 className="text-xl font-bold mb-2">Lyrics Writing</h3>
                <p className="text-muted-foreground mb-4">
                  Creative lyric writing and development to express your musical vision.
                </p>
                <Link href="/services#lyrics" className="group inline-flex items-center text-sm font-medium text-primary">
                  Learn More
                  <ArrowRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
            
            {/* Service 6 - Composition */}
            <Card className="service-card border-border/50 overflow-hidden">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <SpeakerIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Composition</h3>
                <p className="text-muted-foreground mb-4">
                  Custom music composition for artists, media, and commercial projects.
                </p>
                <Link href="/services#composition" className="group inline-flex items-center text-sm font-medium text-primary">
                  Learn More
                  <ArrowRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-chart-4 hover:bg-chart-4/90 text-black">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 px-4 gradient-bg">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it – hear from the artists we've worked with.
            </p>
          </div>
          
          <TestimonialsCarousel />
        </div>
      </section>
      
      {/* Contact & Location Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit Our Studio</h2>
              <p className="text-muted-foreground mb-6">
                Drop by our state-of-the-art studio for a tour or to discuss your project in person. 
                We're conveniently located in the heart of the city.
              </p>
              
              <div className="flex items-start space-x-3 mb-4">
                <MapPinIcon className="h-5 w-5 text-chart-1 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Ginger Groove Studios</p>
                  <p className="text-muted-foreground">123 Music Avenue</p>
                  <p className="text-muted-foreground">Melody City, MC 12345</p>
                </div>
              </div>
              
              <Button asChild className="mt-4">
                <Link href="/quote">Get a Quote</Link>
              </Button>
            </div>
            
            <div className="h-[400px] rounded-lg overflow-hidden relative">
              {/* This would be a real map in production */}
              <div className="absolute inset-0 bg-card/50 flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="text-xl font-bold mb-2">Studio Location Map</h3>
                  <p className="text-muted-foreground mb-4">Interactive map would be displayed here.</p>
                  <MapPinIcon className="h-16 w-16 text-chart-1 mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-chart-4/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's work together to bring your musical vision to life. Contact us today to get started.
          </p>
          <Button asChild size="lg">
            <Link href="/quote">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}