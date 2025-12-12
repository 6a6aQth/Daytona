"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 overflow-hidden">
              <Image
                src="/Daytona Mw Logo.png"
                alt="Daytona Malawi"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground leading-tight tracking-wider font-display">DAYTONA</span>
              <span className="text-[10px] text-primary font-semibold tracking-widest">MALAWI</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/vehicles", label: "Vehicles" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors group"
              >
                {link.label}
                <span className="absolute inset-x-4 -bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mr-2">
              <Phone size={14} className="text-primary" />
              <span>+265 xxx xxx</span>
            </div>
            <Button variant="outline" size="sm" asChild className="border-border hover:border-primary hover:bg-primary/10">
              <Link href="/booking-lookup">Check Booking</Link>
            </Button>
            <Button size="sm" asChild className="glow-gold-sm hover:glow-gold">
              <Link href="/book-service">
                Book Service
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <span
                className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "top-2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-2 w-6 h-0.5 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0 scale-x-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "top-2 -rotate-45" : "top-4"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-6 border-t border-border">
            <div className="flex flex-col gap-1">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/vehicles", label: "Vehicles" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="font-medium">{link.label}</span>
                  <ChevronRight size={18} className="text-muted-foreground" />
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3 pt-6 mt-4 border-t border-border">
              <Button variant="outline" asChild className="justify-center">
                <Link href="/booking-lookup">Check Booking</Link>
              </Button>
              <Button asChild className="justify-center glow-gold-sm">
                <Link href="/book-service">Book Service</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
