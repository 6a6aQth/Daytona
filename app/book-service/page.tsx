import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BookingFormWizard } from "@/components/booking-form-wizard"

export default function BookServicePage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Book Your Service</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Complete the form below to schedule your vehicle service. We'll confirm your booking shortly.
            </p>
          </div>

          <BookingFormWizard />
        </div>
      </section>

      <Footer />
    </div>
  )
}
