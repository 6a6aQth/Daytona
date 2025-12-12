import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Target, Eye, Users, CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const teamMembers = [
  { name: "Michael Banda", role: "Master Technician", experience: "15+ years", initials: "MB" },
  { name: "Sarah Phiri", role: "Service Manager", experience: "12+ years", initials: "SP" },
  { name: "James Mwale", role: "Diagnostic Specialist", experience: "10+ years", initials: "JM" },
  { name: "Grace Chirwa", role: "Sales Manager", experience: "8+ years", initials: "GC" },
]

export default function AboutPage() {
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
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-slide-up">
              About <span className="text-primary">Daytona</span> Malawi
            </h1>
            <p className="text-lg text-muted-foreground text-pretty animate-slide-up stagger-1 opacity-0">
              Your trusted automotive partner since 2004, delivering excellence in vehicle service and sales across
              Malawi.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">Our Story</span>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Two Decades of <span className="text-primary">Excellence</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2004, Daytona Malawi began with a simple mission: to provide honest, reliable automotive
                  service and quality vehicles to the people of Malawi. Over the past two decades, we've grown from a
                  small workshop to become one of the most trusted names in automotive care.
                </p>
                <p>
                  Our commitment to excellence has earned us the loyalty of thousands of customers who trust us with
                  their vehicles. From routine maintenance to complex repairs, and from budget-friendly cars to premium
                  SUVs, we handle every service and sale with the same dedication to quality.
                </p>
                <p>
                  Today, we're proud to serve Malawi with a team of over 30 expert technicians, state-of-the-art
                  diagnostic equipment, and a carefully curated selection of quality pre-owned vehicles.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" size={24} />
                  <span className="text-foreground font-medium">Certified Experts</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" size={24} />
                  <span className="text-foreground font-medium">Quality Guaranteed</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" size={24} />
                  <span className="text-foreground font-medium">Customer First</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden glow-gold-sm">
                <Image src="/modern-automotive-workshop.jpg" alt="Daytona Workshop" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 p-5 rounded-xl bg-card border border-border glow-gold-sm">
                <div className="text-4xl font-bold text-primary mb-1">20+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 px-4 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="absolute bottom-0 right-0 w-1 h-32 bg-gradient-to-t from-primary to-transparent" />

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
              Our Foundation
            </span>
            <h2 className="text-4xl font-bold text-foreground">
              What <span className="text-primary">Drives</span> Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                content:
                  "To provide exceptional automotive service and quality vehicles that exceed customer expectations while building lasting relationships based on trust and integrity.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                content:
                  "To be Malawi's premier automotive service provider and trusted vehicle dealer, known for excellence, innovation, and customer satisfaction.",
              },
              {
                icon: Award,
                title: "Our Values",
                content: "Integrity • Excellence • Customer First • Continuous Improvement",
                isList: true,
              },
            ].map((item, index) => (
              <Card
                key={item.title}
                className={`border-border/50 bg-background/50 backdrop-blur-sm card-hover-glow animate-slide-up stagger-${index + 1} opacity-0`}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <item.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                  {item.isList ? (
                    <ul className="text-muted-foreground space-y-2">
                      {item.content.split(" • ").map((value) => (
                        <li key={value} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {value}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground">{item.content}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute top-0 left-0 w-1 h-32 bg-gradient-to-b from-primary to-transparent" />

        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">Our Team</span>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Meet Our <span className="text-primary">Expert</span> Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Certified professionals dedicated to keeping your vehicle running smoothly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className={`border-border/50 card-hover-lift overflow-hidden group animate-slide-up stagger-${index + 1} opacity-0`}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/20 mx-auto mb-5 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    <span className="text-2xl font-bold text-primary">{member.initials}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.experience} experience</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-amber-500 to-primary" />

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "20+", label: "Years in Business" },
              { number: "3,800+", label: "Vehicles Serviced" },
              { number: "30+", label: "Expert Staff" },
              { number: "98%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <div key={stat.label} className={`text-center animate-slide-up stagger-${index + 1} opacity-0`}>
                <div className="text-5xl md:text-6xl font-bold text-primary-foreground mb-2">{stat.number}</div>
                <div className="text-sm text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-spotlight opacity-30" />

        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Experience <span className="text-primary">Excellence?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of satisfied customers who trust Daytona with their automotive needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="h-14 px-8 glow-gold-sm hover:glow-gold">
              <Link href="/book-service">
                Book Service
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-14 px-8">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
