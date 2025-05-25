import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Music4Icon,
  AwardIcon,
  UsersIcon,
  HeadphonesIcon,
  ClockIcon
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Ginger Groove</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our story, our team, and our passion for creating exceptional music.
          </p>
        </div>
        
        {/* Studio Story */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2018 by renowned producer Alex Rivera, Ginger Groove Studios was born 
                out of a passion for creating authentic, high-quality music across all genres.
              </p>
              <p className="text-muted-foreground mb-4">
                What started as a small project studio has grown into a full-service music production 
                facility, serving hundreds of artists from independent musicians to established acts.
              </p>
              <p className="text-muted-foreground mb-4">
                Our philosophy is simple: we believe that great music comes from collaboration, 
                creativity, and technical excellence. We work closely with each client to understand 
                their vision and help bring it to life with our expertise and state-of-the-art equipment.
              </p>
              <div className="flex items-center space-x-4 mt-6">
                <div className="flex -space-x-2">
                  <div className="h-10 w-10 rounded-full bg-chart-1 flex items-center justify-center text-black font-bold">A</div>
                  <div className="h-10 w-10 rounded-full bg-chart-2 flex items-center justify-center text-white font-bold">M</div>
                  <div className="h-10 w-10 rounded-full bg-chart-3 flex items-center justify-center text-white font-bold">J</div>
                  <div className="h-10 w-10 rounded-full bg-chart-4 flex items-center justify-center text-black font-bold">S</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Alex Rivera</span> and the founding team
                </p>
              </div>
            </div>
            
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Ginger Groove Studios"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-border/50 bg-card/50">
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 rounded-full bg-chart-1/20 flex items-center justify-center mb-3 mx-auto">
                  <Music4Icon className="h-6 w-6 text-chart-1" />
                </div>
                <h3 className="text-3xl font-bold mb-1">500+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50 bg-card/50">
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 rounded-full bg-chart-2/20 flex items-center justify-center mb-3 mx-auto">
                  <AwardIcon className="h-6 w-6 text-chart-2" />
                </div>
                <h3 className="text-3xl font-bold mb-1">12</h3>
                <p className="text-muted-foreground">Industry Awards</p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50 bg-card/50">
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 rounded-full bg-chart-3/20 flex items-center justify-center mb-3 mx-auto">
                  <UsersIcon className="h-6 w-6 text-chart-3" />
                </div>
                <h3 className="text-3xl font-bold mb-1">300+</h3>
                <p className="text-muted-foreground">Satisfied Clients</p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50 bg-card/50">
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 rounded-full bg-chart-4/20 flex items-center justify-center mb-3 mx-auto">
                  <HeadphonesIcon className="h-6 w-6 text-chart-4" />
                </div>
                <h3 className="text-3xl font-bold mb-1">7</h3>
                <p className="text-muted-foreground">Years of Excellence</p>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our talented professionals bring decades of combined experience to your projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Team Member 1 */}
            <Card className="border-border/50 overflow-hidden">
              <div className="h-64 relative">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Alex Rivera"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">Alex Rivera</h3>
                <p className="text-sm text-muted-foreground mb-4">Founder & Lead Producer</p>
                <p className="text-sm text-muted-foreground">
                  Grammy-nominated producer with 15+ years of industry experience working with top artists.
                </p>
              </CardContent>
            </Card>
            
            {/* Team Member 2 */}
            <Card className="border-border/50 overflow-hidden">
              <div className="h-64 relative">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Maria Chen"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">Maria Chen</h3>
                <p className="text-sm text-muted-foreground mb-4">Mixing Engineer</p>
                <p className="text-sm text-muted-foreground">
                  Specializing in creating balanced, dynamic mixes across all genres from pop to metal.
                </p>
              </CardContent>
            </Card>
            
            {/* Team Member 3 */}
            <Card className="border-border/50 overflow-hidden">
              <div className="h-64 relative">
                <img
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="James Wilson"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">James Wilson</h3>
                <p className="text-sm text-muted-foreground mb-4">Mastering Engineer</p>
                <p className="text-sm text-muted-foreground">
                  Bringing the final polish to your tracks with precision and attention to detail.
                </p>
              </CardContent>
            </Card>
            
            {/* Team Member 4 */}
            <Card className="border-border/50 overflow-hidden">
              <div className="h-64 relative">
                <img
                  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Sofia Rodriguez"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">Sofia Rodriguez</h3>
                <p className="text-sm text-muted-foreground mb-4">Songwriter & Composer</p>
                <p className="text-sm text-muted-foreground">
                  Award-winning songwriter with a gift for crafting memorable melodies and lyrics.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Our Studio */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Studio</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A creative space designed for optimal sound and comfort.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="h-[400px] rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/690779/pexels-photo-690779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Ginger Groove Studios Control Room"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="h-[190px] rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/165971/pexels-photo-165971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Live Room"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[190px] rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Vocal Booth"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Control Room</h3>
                <p className="text-sm text-muted-foreground">
                  Acoustically treated control room featuring top-of-the-line monitors, consoles, and outboard gear.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Live Room</h3>
                <p className="text-sm text-muted-foreground">
                  Spacious tracking room with adjustable acoustics, perfect for full band recordings and drum tracking.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Isolation Booths</h3>
                <p className="text-sm text-muted-foreground">
                  Multiple iso booths designed for clean vocal and instrument recordings with zero bleed.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Studio Hours */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Studio Hours</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-border/30">
                  <div className="flex items-center">
                    <ClockIcon className="h-5 w-5 text-chart-4 mr-3" />
                    <span>Monday - Friday</span>
                  </div>
                  <span className="font-medium">10:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border/30">
                  <div className="flex items-center">
                    <ClockIcon className="h-5 w-5 text-chart-4 mr-3" />
                    <span>Saturday</span>
                  </div>
                  <span className="font-medium">12:00 PM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border/30">
                  <div className="flex items-center">
                    <ClockIcon className="h-5 w-5 text-chart-4 mr-3" />
                    <span>Sunday</span>
                  </div>
                  <span className="font-medium">By Appointment Only</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                After-hours sessions available by special arrangement for clients with ongoing projects.
              </p>
              <Button asChild className="mt-6">
                <Link href="/quote">Book a Session</Link>
              </Button>
            </div>
            
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">What Our Clients Say</h3>
                <div className="space-y-6">
                  <div>
                    <p className="italic text-muted-foreground mb-2">
                      "The team at Ginger Groove has an incredible ear for sound. They helped refine my tracks 
                      while preserving my unique style and vision."
                    </p>
                    <p className="text-sm font-medium">- Marcus Chen, Producer & DJ</p>
                  </div>
                  <div>
                    <p className="italic text-muted-foreground mb-2">
                      "Working with Ginger Groove Studios was a game-changer for my album. Their attention to 
                      detail and creative input took my music to the next level."
                    </p>
                    <p className="text-sm font-medium">- Sarah Johnson, Independent Artist</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 px-4 rounded-lg bg-card">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Make Music with Us?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Contact us today to discuss your project or schedule a studio tour.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/quote">Get a Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="mailto:hello@gingergroove.com">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}