import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { VehicleCard } from "@/components/vehicle-card"
import { StatsSection } from "@/components/stats-section"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Wrench,
  Shield,
  Clock,
  Users,
  Star,
  ChevronRight,
  Phone,
  Calendar,
  Quote,
  CheckCircle2,
  ChevronDown,
} from "lucide-react"
import { vehicles, services } from "@/lib/dummy-data"

const testimonials = [
  {
    id: 1,
    name: "James Chirwa",
    role: "Business Owner",
    content:
      "Daytona has been servicing my fleet of vehicles for 5 years. Their professionalism and attention to detail is unmatched in Malawi.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Mwale",
    role: "Private Client",
    content:
      "I bought my Land Cruiser from Daytona and they've maintained it ever since. Absolutely trust them with all my automotive needs.",
    rating: 5,
  },
  {
    id: 3,
    name: "Peter Banda",
    role: "Corporate Manager",
    content:
      "Fast, reliable, and honest service. They diagnosed an issue other garages couldn't find. Highly recommended!",
    rating: 5,
  },
]

const faqs = [
  {
    question: "How do I book a service appointment?",
    answer:
      "You can book online through our website, call us directly, or visit our service center. We recommend booking at least 2 days in advance for regular services.",
  },
  {
    question: "Do you offer warranty on repairs?",
    answer:
      "Yes, all our repairs come with a 6-month warranty on parts and labor. We use only genuine or certified aftermarket parts.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, bank transfers, mobile money (Airtel Money, TNM Mpamba), and all major credit/debit cards.",
  },
  {
    question: "Do you provide vehicle pickup and delivery?",
    answer:
      "Yes, we offer complimentary pickup and delivery within Lilongwe for major services. Contact us for arrangements.",
  },
]

export default function HomePage() {
  const featuredVehicles = vehicles.slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
        {/* Solid black background base */}
        <div className="absolute inset-0 bg-background" />

        {/* Hero Background Image - Right Side Only */}
        <div className="absolute right-0 top-20 bottom-0 w-full lg:w-[55%] overflow-hidden">
          <Image
            src="/Hero Section.png"
            alt="Daytona Auto Service Hero"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
        </div>

        {/* Gold accent decorations */}
        <div className="absolute left-0 top-1/3 w-1 h-40 bg-gradient-to-b from-primary to-transparent" />
        <div className="absolute right-0 bottom-1/3 w-1 h-40 bg-gradient-to-t from-primary to-transparent" />

        <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">Your Trusted Auto Partner Since 2004</span>
            </div>

            {/* Main headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight animate-slide-up">
              Premier Auto Service
              <br />
              <span className="text-gradient-gold">&</span> Quality Vehicles
              <br />
              in <span className="text-primary">Malawi</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl animate-slide-up stagger-1 opacity-0">
              Expert automotive care and trusted pre-owned vehicles. Your journey starts here with professional service
              you can rely on.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up stagger-2 opacity-0">
              <Button size="lg" asChild className="text-lg h-14 px-8 glow-gold-sm hover:glow-gold transition-all">
                <Link href="/book-service">
                  <Calendar className="mr-2" size={20} />
                  Book Service Now
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg h-14 px-8 bg-transparent border-muted-foreground/30 hover:border-primary hover:bg-primary/10"
              >
                <Link href="/vehicles">
                  Browse Vehicles
                  <ChevronRight className="ml-2" />
                </Link>
              </Button>
            </div>

            {/* Quick contact */}
            <div className="flex items-center gap-6 animate-slide-up stagger-3 opacity-0">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Call us anytime</div>
                  <div className="text-foreground font-semibold">+265 xxx xxx xxx</div>
                </div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="text-primary" size={20} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Working hours</div>
                  <div className="text-foreground font-semibold">Mon-Sat: 8AM-6PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
          <span className="text-xs text-muted-foreground">Scroll to explore</span>
          <ChevronDown className="text-primary" size={24} />
        </div>
      </section>

      {/* Stats Section with Shuffle Animation */}
      <StatsSection />

      {/* Services Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute top-0 left-0 w-1 h-32 bg-gradient-to-b from-primary to-transparent" />

        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
            <div className="max-w-2xl mb-8 lg:mb-0">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Our Services
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Comprehensive <span className="text-primary">Auto Care</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                From routine maintenance to complex repairs, our certified technicians deliver excellence with every
                service.
              </p>
            </div>
            <Button variant="outline" asChild className="self-start lg:self-auto">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={service.id}
                className={`group border-border/50 card-hover-lift overflow-hidden animate-slide-up stagger-${(index % 3) + 1} opacity-0`}
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  {/* Duration badge */}
                  <span className="absolute top-4 right-4 text-xs text-foreground bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full border border-border/50">
                    {service.duration}
                  </span>
                </div>
                <CardContent className="p-6 relative">
                  {/* Gold accent line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-5 line-clamp-2">{service.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button size="sm" variant="outline" asChild className="bg-transparent hover:bg-primary hover:text-primary-foreground">
                      <Link href="/book-service">Book Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-24 px-4 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
        <div className="absolute bottom-0 right-0 w-1 h-32 bg-gradient-to-t from-primary to-transparent" />

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
              Featured Inventory
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Quality <span className="text-primary">Pre-Owned</span> Vehicles
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Handpicked and thoroughly inspected vehicles ready for the road
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredVehicles.map((vehicle, index) => (
              <div key={vehicle.id} className={`animate-slide-up stagger-${index + 1} opacity-0`}>
                <VehicleCard {...vehicle} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" asChild className="h-14 px-8">
              <Link href="/vehicles">
                View All Vehicles
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 relative">
        <div className="absolute top-0 right-0 w-1 h-32 bg-gradient-to-b from-primary to-transparent" />

        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Excellence in Every <span className="text-primary">Detail</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                With over 20 years of experience, we've built our reputation on trust, quality, and exceptional customer
                service.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Trusted Service",
                    description: "20+ years of reliable automotive care with thousands of satisfied customers",
                  },
                  {
                    icon: Users,
                    title: "Expert Team",
                    description: "Certified technicians with extensive training and hands-on experience",
                  },
                  {
                    icon: Clock,
                    title: "Fast Turnaround",
                    description: "Efficient service delivery without compromising on quality",
                  },
                  {
                    icon: Star,
                    title: "Quality Parts",
                    description: "Only genuine and certified replacement parts for lasting performance",
                  },
                ].map((feature, index) => (
                  <div
                    key={feature.title}
                    className={`flex gap-5 p-4 rounded-xl border border-transparent hover:border-primary/20 hover:bg-card transition-all animate-slide-in-left stagger-${index + 1} opacity-0`}
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="text-primary" size={28} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[600px] rounded-2xl overflow-hidden glow-gold-sm">
                <Image
                  src="/modern-automotive-workshop.jpg"
                  alt="Our Workshop"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              </div>

              {/* Floating stats card */}
              <div className="absolute -bottom-8 -left-8 p-6 rounded-xl bg-card border border-border glow-gold-sm">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="text-primary" size={32} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">98%</div>
                    <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-spotlight opacity-30" />

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Our <span className="text-primary">Clients</span> Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className={`border-border/50 bg-background/50 backdrop-blur-sm card-hover-lift animate-slide-up stagger-${index + 1} opacity-0`}
              >
                <CardContent className="p-8">
                  <Quote className="text-primary/30 mb-6" size={40} />
                  <p className="text-foreground mb-6 leading-relaxed">{testimonial.content}</p>
                  <div className="flex items-center gap-2 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-primary fill-primary" size={16} />
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute top-0 left-0 w-1 h-32 bg-gradient-to-b from-primary to-transparent" />

        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                FAQ
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Find answers to common questions about our services and processes.
              </p>

              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-bold text-foreground mb-2">Still have questions?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Can't find what you're looking for? Our team is here to help.
                </p>
                <Button asChild>
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className={`group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors animate-slide-up stagger-${index + 1} opacity-0`}
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                    <ChevronDown className="text-primary flex-shrink-0 transition-transform group-open:rotate-180" size={20} />
                  </summary>
                  <p className="text-muted-foreground mt-4 text-sm leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-amber-500 to-primary" />

        <div className="container mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Experience <span className="opacity-90">Excellence?</span>
          </h2>
          <p className="text-lg mb-10 text-primary-foreground/90 max-w-2xl mx-auto">
            Book your service today or visit our showroom to find your next vehicle. Our team is ready to serve you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="h-14 px-8 text-lg bg-background text-primary hover:bg-background/90"
              asChild
            >
              <Link href="/book-service">
                <Calendar className="mr-2" size={20} />
                Book Service
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-lg border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              asChild
            >
              <Link href="/contact">
                <Phone className="mr-2" size={20} />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
