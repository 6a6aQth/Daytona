import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">D</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground leading-tight">DAYTONA</span>
                <span className="text-xs text-muted-foreground">MALAWI</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Your trusted partner for automotive service and quality vehicles in Malawi.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/vehicles" className="text-muted-foreground hover:text-primary transition-colors">
                  Vehicle Inventory
                </Link>
              </li>
              <li>
                <Link href="/book-service" className="text-muted-foreground hover:text-primary transition-colors">
                  Book Service
                </Link>
              </li>
              <li>
                <Link href="/booking-lookup" className="text-muted-foreground hover:text-primary transition-colors">
                  Track Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Oil Change</li>
              <li className="text-muted-foreground">Full Service</li>
              <li className="text-muted-foreground">Brake Inspection</li>
              <li className="text-muted-foreground">Tyre Alignment</li>
              <li className="text-muted-foreground">Engine Diagnostics</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">Lilongwe, Malawi</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">+265 xxx xxx xxx</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">info@daytona.mw</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Daytona Malawi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
