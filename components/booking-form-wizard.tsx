"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { services } from "@/lib/dummy-data"
import { Calendar, Check, ChevronLeft, ChevronRight, Car, User, Wrench, ArrowRight, Home } from "lucide-react"
import Link from "next/link"

interface BookingData {
  // Step 1
  serviceType: string
  vehicleMake: string
  vehicleModel: string
  vehicleYear: string
  vehicleReg: string
  // Step 2
  date: string
  time: string
  // Step 3
  customerName: string
  phone: string
  email: string
  notes: string
}

const steps = [
  { id: 1, title: "Service & Vehicle", icon: Car },
  { id: 2, title: "Schedule", icon: Calendar },
  { id: 3, title: "Your Details", icon: User },
]

export function BookingFormWizard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [bookingData, setBookingData] = useState<BookingData>({
    serviceType: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    vehicleReg: "",
    date: "",
    time: "",
    customerName: "",
    phone: "",
    email: "",
    notes: "",
  })
  const [bookingReference, setBookingReference] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const totalSteps = 3

  const updateBookingData = (field: keyof BookingData, value: string) => {
    setBookingData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    // Generate booking reference
    const ref = `BK${Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0")}`
    setBookingReference(ref)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto border-border/50 overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-primary via-amber-500 to-transparent" />
        <CardContent className="p-10 text-center">
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8 glow-gold-sm">
            <Check className="text-primary" size={48} />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">Booking Confirmed!</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Your service has been successfully booked. We've sent a confirmation to your email.
          </p>
          <div className="bg-card border border-border rounded-xl p-6 mb-8 glow-gold-sm">
            <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Your Booking Reference</p>
            <p className="text-4xl font-bold text-primary mb-2">{bookingReference}</p>
            <p className="text-xs text-muted-foreground">Please save this reference number</p>
          </div>
          <div className="space-y-3 text-left mb-8 max-w-md mx-auto p-6 rounded-xl bg-muted/30 border border-border/50">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Service:</span>
              <span className="text-foreground font-medium">
                {services.find((s) => s.id === bookingData.serviceType)?.name}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Date & Time:</span>
              <span className="text-foreground font-medium">
                {bookingData.date} at {bookingData.time}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Vehicle:</span>
              <span className="text-foreground font-medium">{bookingData.vehicleReg}</span>
            </div>
          </div>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="outline" asChild className="bg-transparent">
              <Link href="/booking-lookup">
                Check Booking Status
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
            <Button size="lg" asChild className="glow-gold-sm hover:glow-gold">
              <Link href="/">
                <Home size={16} className="mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-6">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center font-semibold transition-all ${
                    step.id <= currentStep
                      ? "bg-primary text-primary-foreground glow-gold-sm"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step.id < currentStep ? (
                    <Check size={24} />
                  ) : (
                    <step.icon size={24} />
                  )}
                </div>
                <span
                  className={`text-xs font-medium ${
                    step.id <= currentStep ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {step.title}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-4 rounded-full transition-colors ${
                    step.id < currentStep ? "bg-primary" : "bg-muted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <Card className="border-border/50 overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-primary via-amber-500 to-transparent" />
        <CardContent className="p-8">
          {/* Step 1: Service & Vehicle Details */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Wrench className="text-primary" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Service & Vehicle</h2>
                  <p className="text-muted-foreground text-sm">Tell us about your vehicle and the service you need</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="serviceType" className="text-foreground font-medium">
                  Service Type <span className="text-primary">*</span>
                </Label>
                <Select
                  value={bookingData.serviceType}
                  onValueChange={(value) => updateBookingData("serviceType", value)}
                >
                  <SelectTrigger id="serviceType" className="h-12 bg-muted/50 border-border">
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.id} value={service.id}>
                        {service.name} - {service.price}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="vehicleMake" className="text-foreground font-medium">
                    Vehicle Make <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="vehicleMake"
                    placeholder="e.g., Toyota"
                    value={bookingData.vehicleMake}
                    onChange={(e) => updateBookingData("vehicleMake", e.target.value)}
                    className="h-12 bg-muted/50 border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="vehicleModel" className="text-foreground font-medium">
                    Vehicle Model <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="vehicleModel"
                    placeholder="e.g., Corolla"
                    value={bookingData.vehicleModel}
                    onChange={(e) => updateBookingData("vehicleModel", e.target.value)}
                    className="h-12 bg-muted/50 border-border"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="vehicleYear" className="text-foreground font-medium">
                    Year
                  </Label>
                  <Input
                    id="vehicleYear"
                    placeholder="e.g., 2020"
                    value={bookingData.vehicleYear}
                    onChange={(e) => updateBookingData("vehicleYear", e.target.value)}
                    className="h-12 bg-muted/50 border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="vehicleReg" className="text-foreground font-medium">
                    Registration Number <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="vehicleReg"
                    placeholder="e.g., MA 1234"
                    value={bookingData.vehicleReg}
                    onChange={(e) => updateBookingData("vehicleReg", e.target.value)}
                    className="h-12 bg-muted/50 border-border"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Date & Time */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Calendar className="text-primary" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Schedule Your Service</h2>
                  <p className="text-muted-foreground text-sm">Choose your preferred date and time</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date" className="text-foreground font-medium">
                  Preferred Date <span className="text-primary">*</span>
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={bookingData.date}
                  onChange={(e) => updateBookingData("date", e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="h-12 bg-muted/50 border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="time" className="text-foreground font-medium">
                  Preferred Time <span className="text-primary">*</span>
                </Label>
                <Select value={bookingData.time} onValueChange={(value) => updateBookingData("time", value)}>
                  <SelectTrigger id="time" className="h-12 bg-muted/50 border-border">
                    <SelectValue placeholder="Select time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="08:00 AM">08:00 AM</SelectItem>
                    <SelectItem value="09:00 AM">09:00 AM</SelectItem>
                    <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                    <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                    <SelectItem value="12:00 PM">12:00 PM</SelectItem>
                    <SelectItem value="01:00 PM">01:00 PM</SelectItem>
                    <SelectItem value="02:00 PM">02:00 PM</SelectItem>
                    <SelectItem value="03:00 PM">03:00 PM</SelectItem>
                    <SelectItem value="04:00 PM">04:00 PM</SelectItem>
                    <SelectItem value="05:00 PM">05:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="p-5 rounded-xl bg-muted/30 border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="text-primary" size={18} />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground mb-2">Business Hours</p>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Customer Information */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <User className="text-primary" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Your Information</h2>
                  <p className="text-muted-foreground text-sm">We'll use this to confirm your booking</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="customerName" className="text-foreground font-medium">
                  Full Name <span className="text-primary">*</span>
                </Label>
                <Input
                  id="customerName"
                  placeholder="John Phiri"
                  value={bookingData.customerName}
                  onChange={(e) => updateBookingData("customerName", e.target.value)}
                  className="h-12 bg-muted/50 border-border"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-medium">
                    Phone Number <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+265 xxx xxx xxx"
                    value={bookingData.phone}
                    onChange={(e) => updateBookingData("phone", e.target.value)}
                    className="h-12 bg-muted/50 border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={bookingData.email}
                    onChange={(e) => updateBookingData("email", e.target.value)}
                    className="h-12 bg-muted/50 border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes" className="text-foreground font-medium">
                  Additional Notes (Optional)
                </Label>
                <Textarea
                  id="notes"
                  placeholder="Any specific concerns or requests..."
                  value={bookingData.notes}
                  onChange={(e) => updateBookingData("notes", e.target.value)}
                  className="min-h-24 bg-muted/50 border-border resize-none"
                />
              </div>

              {/* Summary */}
              <div className="p-5 rounded-xl bg-muted/30 border border-border/50">
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <Check className="text-primary" size={18} />
                  Booking Summary
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Service:</span>
                    <span className="text-foreground font-medium">
                      {services.find((s) => s.id === bookingData.serviceType)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Vehicle:</span>
                    <span className="text-foreground font-medium">
                      {bookingData.vehicleMake} {bookingData.vehicleModel} ({bookingData.vehicleReg})
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date & Time:</span>
                    <span className="text-foreground font-medium">
                      {bookingData.date} at {bookingData.time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8 pt-6 border-t border-border">
            {currentStep > 1 && (
              <Button variant="outline" onClick={handleBack} className="flex-1 h-12 bg-transparent">
                <ChevronLeft size={18} className="mr-2" />
                Back
              </Button>
            )}
            {currentStep < totalSteps ? (
              <Button onClick={handleNext} className="flex-1 h-12 glow-gold-sm hover:glow-gold">
                Next Step
                <ChevronRight size={18} className="ml-2" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} className="flex-1 h-12 glow-gold-sm hover:glow-gold">
                <Check size={18} className="mr-2" />
                Confirm Booking
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
