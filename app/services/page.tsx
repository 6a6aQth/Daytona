import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/dummy-data"
import Link from "next/link"
import Image from "next/image"
import {
  CheckCircle2,
  Droplet,
  Wrench,
  Disc,
  CircleDot,
  Cpu,
  Wind,
  ArrowRight,
  Shield,
  Clock,
  BadgeCheck,
} from "lucide-react"

const iconMap: Record<string, any> = {
  droplet: Droplet,
  wrench: Wrench,
  disc: Disc,
  circle: CircleDot,
  cpu: Cpu,
  wind: Wind,
}

const includedItems = [
  "Multi-point vehicle inspection",
  "Fluid level checks",
  "Brake system inspection",
  "Tyre pressure and condition check",
  "Battery health assessment",
  "Air filter inspection",
  "Detailed service report",
  "Expert recommendations",
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="absolute inset-0 bg-gradient-spotlight opacity-50" />
        <div className="absolute top-0 left-0 w-1 h-32 bg-gradient-to-b from-primary to-transparent" />

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block animate-fade-in">
              Our Services
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-slide-up">
              Expert <span className="text-primary">Auto Care</span> Services
            </h1>
            <p className="text-lg text-muted-foreground text-pretty animate-slide-up stagger-1 opacity-0">
              Comprehensive automotive care from certified technicians using state-of-the-art equipment
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Wrench
              return (
                <Card
                  key={service.id}
                  className={`group border-border/50 card-hover-lift overflow-hidden animate-slide-up stagger-${(index % 3) + 1} opacity-0`}
                >
                  {/* Service Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                    {/* Icon overlay */}
                    <div className="absolute bottom-4 left-4 w-14 h-14 rounded-xl bg-primary/90 flex items-center justify-center">
                      <Icon className="text-primary-foreground" size={28} />
                    </div>
                    {/* Duration badge */}
                    <span className="absolute top-4 right-4 text-xs text-foreground bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full border border-border/50">
                      {service.duration}
                    </span>
                  </div>
                  <CardContent className="p-6 relative">
                    {/* Gold accent line */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
                      <div>
                        <div className="text-3xl font-bold text-primary">{service.price}</div>
                      </div>
                    </div>
                    <Button className="w-full group-hover:glow-gold-sm transition-all" asChild>
                      <Link href="/book-service">
                        Book Now
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 px-4 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="absolute bottom-0 right-0 w-1 h-32 bg-gradient-to-t from-primary to-transparent" />

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Every Service
              </span>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                What's <span className="text-primary">Included</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Every service comes with our comprehensive inspection package
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {includedItems.map((item, index) => (
                <div
                  key={item}
                  className={`flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/30 transition-colors animate-slide-up stagger-${(index % 4) + 1} opacity-0`}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-primary" size={20} />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Service */}
      <section className="py-24 px-4 relative">
        <div className="absolute top-0 left-0 w-1 h-32 bg-gradient-to-b from-primary to-transparent" />

        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              The <span className="text-primary">Daytona</span> Difference
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We set the standard for automotive service excellence in Malawi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BadgeCheck,
                title: "Certified Technicians",
                description:
                  "Our team is fully trained and certified to work on all makes and models with the latest techniques.",
              },
              {
                icon: Shield,
                title: "Quality Parts",
                description:
                  "We use only genuine or certified aftermarket parts for all repairs, ensuring lasting performance.",
              },
              {
                icon: Clock,
                title: "6-Month Warranty",
                description:
                  "All our services come with a comprehensive 6-month warranty for your complete peace of mind.",
              },
            ].map((feature, index) => (
              <Card
                key={feature.title}
                className={`border-border/50 card-hover-glow animate-slide-up stagger-${index + 1} opacity-0`}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="text-primary" size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-amber-500 to-primary" />

        <div className="container mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Book Your Service?
          </h2>
          <p className="text-lg mb-10 text-primary-foreground/90 max-w-2xl mx-auto">
            Schedule your appointment today and experience professional automotive care that exceeds expectations.
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="h-14 px-10 text-lg bg-background text-primary hover:bg-background/90"
          >
            <Link href="/book-service">
              Book Service Now
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
