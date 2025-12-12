import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/dummy-data"
import Link from "next/link"
import { CheckCircle2, Droplet, Wrench, Disc, CircleDot, Cpu, Wind } from "lucide-react"

const iconMap: Record<string, any> = {
  droplet: Droplet,
  wrench: Wrench,
  disc: Disc,
  circle: CircleDot,
  cpu: Cpu,
  wind: Wind,
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Services</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Comprehensive automotive care from expert technicians using state-of-the-art equipment
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Wrench
              return (
                <Card key={service.id} className="hover:border-primary transition-all hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="text-primary" size={32} />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-3">{service.name}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-primary">{service.price}</div>
                        <div className="text-xs text-muted-foreground">Duration: {service.duration}</div>
                      </div>
                    </div>
                    <Button className="w-full" asChild>
                      <Link href="/book-service">Book Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">What's Included in Every Service</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Multi-point vehicle inspection",
                "Fluid level checks",
                "Brake system inspection",
                "Tyre pressure and condition check",
                "Battery health assessment",
                "Air filter inspection",
                "Detailed service report",
                "Expert recommendations",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Service */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Choose Our Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Certified Technicians</h3>
                <p className="text-muted-foreground">
                  Our team is fully trained and certified to work on all makes and models
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Quality Parts</h3>
                <p className="text-muted-foreground">
                  We use only genuine or certified aftermarket parts for all repairs
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Warranty Guaranteed</h3>
                <p className="text-muted-foreground">
                  All our services come with a comprehensive warranty for your peace of mind
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Service?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Schedule your appointment today and experience professional automotive care
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/book-service">Book Service Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
