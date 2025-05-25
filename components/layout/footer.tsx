import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Music4Icon,
  InstagramIcon, 
  YoutubeIcon, 
  FacebookIcon, 
  TwitterIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Music4Icon className="h-6 w-6 text-chart-4" />
              <span className="font-playfair text-xl font-bold tracking-tight">
                Ginger Groove
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Bring your sound to life with our professional music production services.
            </p>
            <div className="flex space-x-3 mt-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                <InstagramIcon className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                <YoutubeIcon className="h-4 w-4" />
                <span className="sr-only">YouTube</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                <FacebookIcon className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                <TwitterIcon className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-muted-foreground hover:text-primary transition-colors">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#mixing" className="text-muted-foreground hover:text-primary transition-colors">
                  Mixing
                </Link>
              </li>
              <li>
                <Link href="/services#mastering" className="text-muted-foreground hover:text-primary transition-colors">
                  Mastering
                </Link>
              </li>
              <li>
                <Link href="/services#production" className="text-muted-foreground hover:text-primary transition-colors">
                  Production
                </Link>
              </li>
              <li>
                <Link href="/services#recording" className="text-muted-foreground hover:text-primary transition-colors">
                  Recording
                </Link>
              </li>
              <li>
                <Link href="/services#lyrics" className="text-muted-foreground hover:text-primary transition-colors">
                  Lyrics
                </Link>
              </li>
              <li>
                <Link href="/services#composition" className="text-muted-foreground hover:text-primary transition-colors">
                  Composition
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-4">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <PhoneIcon className="h-4 w-4 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MailIcon className="h-4 w-4 flex-shrink-0" />
                <span>hello@gingergroove.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPinIcon className="h-4 w-4 flex-shrink-0" />
                <span>123 Music Avenue, Melody City, MC 12345</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ginger Groove Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}