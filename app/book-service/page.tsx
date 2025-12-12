import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BookingFormWizard } from "@/components/booking-form-wizard"
import { CheckCircle2, Clock, Shield, Phone } from "lucide-react"

export default function BookServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="absolute inset-0 bg-gradient-spotlight opacity-50" />
        <div className="absolute top-0 left-0 w-1 h-32 bg-gradient-to-b from-primary to-transparent" />

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block animate-fade-in">
              Schedule Service
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-slide-up">
              Book Your <span className="text-primary">Service</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty animate-slide-up stagger-1 opacity-0">
              Complete the form below to schedule your vehicle service. We'll confirm your booking shortly.
            </p>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-slide-up stagger-2 opacity-0">
            {[
              { icon: CheckCircle2, text: "Certified Technicians" },
              { icon: Clock, text: "Quick Turnaround" },
              { icon: Shield, text: "6-Month Warranty" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50"
              >
                <item.icon className="text-primary" size={16} />
                <span className="text-sm text-muted-foreground">{item.text}</span>
              </div>
            ))}
          </div>

          <BookingFormWizard />

          {/* Help section */}
          <div className="mt-12 text-center animate-slide-up stagger-3 opacity-0">
            <p className="text-muted-foreground mb-4">Need help with your booking?</p>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-card border border-border/50">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="text-primary" size={18} />
              </div>
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Call us directly</div>
                <div className="text-foreground font-semibold">+265 xxx xxx xxx</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
