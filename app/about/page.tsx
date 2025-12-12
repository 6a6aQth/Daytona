import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Target, Eye, Users } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Daytona Malawi</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Your trusted automotive partner since 2004, delivering excellence in vehicle service and sales across
              Malawi.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
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
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/modern-automotive-workshop.jpg" alt="Daytona Workshop" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 bg-background">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide exceptional automotive service and quality vehicles that exceed customer expectations while
                  building lasting relationships based on trust and integrity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be Malawi's premier automotive service provider and trusted vehicle dealer, known for excellence,
                  innovation, and customer satisfaction.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Award className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Values</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Integrity in every interaction</li>
                  <li>• Excellence in service delivery</li>
                  <li>• Customer satisfaction first</li>
                  <li>• Continuous improvement</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Expert Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Certified professionals dedicated to keeping your vehicle running smoothly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Michael Banda", role: "Master Technician", experience: "15+ years" },
              { name: "Sarah Phiri", role: "Service Manager", experience: "12+ years" },
              { name: "James Mwale", role: "Diagnostic Specialist", experience: "10+ years" },
              { name: "Grace Chirwa", role: "Sales Manager", experience: "8+ years" },
            ].map((member) => (
              <Card key={member.name}>
                <CardContent className="p-6">
                  <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                    <Users className="text-primary" size={40} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground text-center mb-1">{member.name}</h3>
                  <p className="text-sm text-primary text-center mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground text-center">{member.experience} experience</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">20+</div>
              <div className="text-sm opacity-90">Years in Business</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">3,800+</div>
              <div className="text-sm opacity-90">Vehicles Serviced</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">30+</div>
              <div className="text-sm opacity-90">Expert Staff</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-90">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
