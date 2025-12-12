"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { services } from "@/lib/dummy-data"
import { Calendar, Check, ChevronLeft, ChevronRight } from "lucide-react"

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
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Check className="text-primary" size={40} />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">Booking Confirmed!</h2>
          <p className="text-muted-foreground mb-6">
            Your service has been successfully booked. We've sent a confirmation to your email.
          </p>
          <div className="bg-muted rounded-lg p-6 mb-6">
            <p className="text-sm text-muted-foreground mb-2">Your Booking Reference</p>
            <p className="text-3xl font-bold text-primary">{bookingReference}</p>
            <p className="text-xs text-muted-foreground mt-2">Please save this reference number</p>
          </div>
          <div className="space-y-2 text-left mb-6 max-w-md mx-auto">
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
          <Button size="lg" onClick={() => (window.location.href = "/")}>
            Back to Home
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step <= currentStep ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                {step}
              </div>
              {step < 3 && (
                <div
                  className={`flex-1 h-1 mx-2 ${step < currentStep ? "bg-primary" : "bg-muted"} transition-colors`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Service Details</span>
          <span>Schedule</span>
          <span>Your Information</span>
        </div>
      </div>

      <Card>
        <CardContent className="p-8">
          {/* Step 1: Service & Vehicle Details */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Service & Vehicle Details</h2>
                <p className="text-muted-foreground">Tell us about your vehicle and the service you need</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="serviceType">
                  Service Type <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={bookingData.serviceType}
                  onValueChange={(value) => updateBookingData("serviceType", value)}
                >
                  <SelectTrigger id="serviceType">
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
                  <Label htmlFor="vehicleMake">
                    Vehicle Make <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="vehicleMake"
                    placeholder="e.g., Toyota"
                    value={bookingData.vehicleMake}
                    onChange={(e) => updateBookingData("vehicleMake", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="vehicleModel">
                    Vehicle Model <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="vehicleModel"
                    placeholder="e.g., Corolla"
                    value={bookingData.vehicleModel}
                    onChange={(e) => updateBookingData("vehicleModel", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="vehicleYear">Year</Label>
                  <Input
                    id="vehicleYear"
                    placeholder="e.g., 2020"
                    value={bookingData.vehicleYear}
                    onChange={(e) => updateBookingData("vehicleYear", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="vehicleReg">
                    Registration Number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="vehicleReg"
                    placeholder="e.g., MA 1234"
                    value={bookingData.vehicleReg}
                    onChange={(e) => updateBookingData("vehicleReg", e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Date & Time */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Schedule Your Service</h2>
                <p className="text-muted-foreground">Choose your preferred date and time</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">
                  Preferred Date <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={bookingData.date}
                  onChange={(e) => updateBookingData("date", e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">
                  Preferred Time <span className="text-destructive">*</span>
                </Label>
                <Select value={bookingData.time} onValueChange={(value) => updateBookingData("time", value)}>
                  <SelectTrigger id="time">
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

              <Card className="bg-muted/50 border-0">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div className="text-sm text-muted-foreground">
                      <p className="font-medium text-foreground mb-1">Business Hours</p>
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 3: Customer Information */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Your Information</h2>
                <p className="text-muted-foreground">We'll use this to confirm your booking</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="customerName">
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="customerName"
                  placeholder="John Phiri"
                  value={bookingData.customerName}
                  onChange={(e) => updateBookingData("customerName", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">
                    Phone Number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+265 xxx xxx xxx"
                    value={bookingData.phone}
                    onChange={(e) => updateBookingData("phone", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={bookingData.email}
                    onChange={(e) => updateBookingData("email", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  placeholder="Any specific concerns or requests..."
                  value={bookingData.notes}
                  onChange={(e) => updateBookingData("notes", e.target.value)}
                  className="min-h-24"
                />
              </div>

              {/* Summary */}
              <Card className="bg-muted/50 border-0">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-3">Booking Summary</h3>
                  <div className="space-y-2 text-sm">
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
                </CardContent>
              </Card>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8">
            {currentStep > 1 && (
              <Button variant="outline" onClick={handleBack} className="flex-1 bg-transparent">
                <ChevronLeft size={16} className="mr-2" />
                Back
              </Button>
            )}
            {currentStep < totalSteps ? (
              <Button onClick={handleNext} className="flex-1">
                Next
                <ChevronRight size={16} className="ml-2" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} className="flex-1">
                Confirm Booking
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
