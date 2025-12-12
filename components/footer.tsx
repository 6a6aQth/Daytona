import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, ArrowRight, Clock, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="relative bg-card border-t border-border overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="absolute top-0 left-1/4 w-1 h-32 bg-gradient-to-b from-primary/50 to-transparent" />
      <div className="absolute top-0 right-1/4 w-1 h-20 bg-gradient-to-b from-primary/30 to-transparent" />

      {/* Newsletter Section */}
      <div className="relative border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-lg">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Stay Updated with <span className="text-primary">Daytona</span>
              </h3>
              <p className="text-muted-foreground">
                Get the latest offers, service tips, and new vehicle arrivals delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-3 flex-col sm:flex-row w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-80 px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground"
              />
              <Button className="glow-gold-sm hover:glow-gold whitespace-nowrap">
                Subscribe
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-14 h-14 overflow-hidden">
                <Image
                  src="/Daytona Mw Logo.png"
                  alt="Daytona Malawi"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground leading-tight tracking-wider font-display">DAYTONA</span>
                <span className="text-xs text-primary font-semibold tracking-widest">MALAWI</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Your trusted partner for automotive service and quality vehicles in Malawi. Excellence in every detail
              since 2004.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Twitter, href: "#", label: "Twitter" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-muted/50 border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all group"
                >
                  <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Services" },
                { href: "/vehicles", label: "Vehicle Inventory" },
                { href: "/book-service", label: "Book Service" },
                { href: "/booking-lookup", label: "Track Booking" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group text-sm"
                  >
                    <ChevronRight
                      size={14}
                      className="text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary" />
              Services
            </h3>
            <ul className="space-y-3">
              {["Oil Change", "Full Service", "Brake Inspection", "Tyre Alignment", "Engine Diagnostics", "AC Service"].map(
                (service) => (
                  <li key={service}>
                    <span className="text-muted-foreground text-sm flex items-center gap-2 hover:text-foreground transition-colors cursor-default">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                      {service}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary" />
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-primary font-medium mb-0.5">Location</div>
                  <span className="text-muted-foreground text-sm">Lilongwe City Centre, Malawi</span>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-primary font-medium mb-0.5">Phone</div>
                  <span className="text-muted-foreground text-sm">+265 xxx xxx xxx</span>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-primary font-medium mb-0.5">Email</div>
                  <span className="text-muted-foreground text-sm">info@daytona.mw</span>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Clock size={18} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-primary font-medium mb-0.5">Hours</div>
                  <span className="text-muted-foreground text-sm">Mon-Sat: 8AM - 6PM</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border relative">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Daytona Malawi. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
