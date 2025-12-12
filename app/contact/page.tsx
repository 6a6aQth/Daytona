import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    lines: ["+265 xxx xxx xxx", "+265 yyy yyy yyy"],
    action: "Call us anytime",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@daytona.mw", "service@daytona.mw"],
    action: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    title: "Location",
    lines: ["Lilongwe City Centre", "Malawi"],
    action: "Visit our showroom",
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM", "Sunday: Closed"],
    action: "",
  },
]

export default function ContactPage() {
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
              Contact Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-slide-up">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty animate-slide-up stagger-1 opacity-0">
              Have questions? We're here to help with all your automotive needs. Reach out today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Card
                  key={item.title}
                  className={`border-border/50 card-hover-glow animate-slide-up stagger-${index + 1} opacity-0`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="text-primary" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground mb-2 text-lg">{item.title}</h3>
                        {item.lines.map((line, i) => (
                          <p key={i} className="text-muted-foreground text-sm">
                            {line}
                          </p>
                        ))}
                        {item.action && (
                          <p className="text-primary text-xs mt-2 font-medium">{item.action}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-border/50 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-primary via-amber-500 to-transparent" />
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MessageSquare className="text-primary" size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">Send us a Message</h2>
                      <p className="text-sm text-muted-foreground">We'll get back to you within 24 hours</p>
                    </div>
                  </div>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-foreground font-medium">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          className="h-12 bg-muted/50 border-border focus:border-primary focus:ring-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-foreground font-medium">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="Phiri"
                          className="h-12 bg-muted/50 border-border focus:border-primary focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="h-12 bg-muted/50 border-border focus:border-primary focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+265 xxx xxx xxx"
                        className="h-12 bg-muted/50 border-border focus:border-primary focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-foreground font-medium">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        placeholder="How can we help you?"
                        className="h-12 bg-muted/50 border-border focus:border-primary focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground font-medium">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        className="min-h-32 bg-muted/50 border-border focus:border-primary focus:ring-primary resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full h-14 text-lg glow-gold-sm hover:glow-gold">
                      <Send size={20} className="mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-4 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">Find Us</span>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Visit Our <span className="text-primary">Location</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We're conveniently located in Lilongwe City Centre
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden h-96 bg-muted border border-border relative glow-gold-sm">
            {/* Map placeholder with styled overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-primary" size={40} />
                </div>
                <p className="text-foreground font-semibold text-lg">Lilongwe City Centre</p>
                <p className="text-muted-foreground">Malawi</p>
              </div>
            </div>
            {/* Decorative grid pattern */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(241, 196, 15, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(241, 196, 15, 0.1) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
