"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { StatusBadge } from "@/components/status-badge"
import { bookings } from "@/lib/dummy-data"
import { Search, Calendar, Clock, Car, Phone, User } from "lucide-react"

export default function BookingLookupPage() {
  const [bookingRef, setBookingRef] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [searchResult, setSearchResult] = useState<(typeof bookings)[0] | null>(null)
  const [searched, setSearched] = useState(false)

  const handleSearch = () => {
    // Simulate lookup - in production, this would be an API call
    const found = bookings.find(
      (booking) => booking.id === bookingRef.toUpperCase() && booking.phone.includes(phoneNumber.slice(-7)),
    )
    setSearchResult(found || null)
    setSearched(true)
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Check Your Booking</h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Enter your booking reference and phone number to check your service status
              </p>
            </div>

            {/* Search Form */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="bookingRef">
                      Booking Reference <span className="text-destructive">*</span>
                    </Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                      <Input
                        id="bookingRef"
                        placeholder="e.g., BK001"
                        value={bookingRef}
                        onChange={(e) => setBookingRef(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      Phone Number <span className="text-destructive">*</span>
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+265 xxx xxx xxx"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <Button onClick={handleSearch} size="lg" className="w-full">
                    <Search size={18} className="mr-2" />
                    Check Booking Status
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Search Results */}
            {searched && (
              <>
                {searchResult ? (
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h2 className="text-2xl font-bold text-foreground mb-2">Booking Details</h2>
                          <p className="text-sm text-muted-foreground">Reference: {searchResult.id}</p>
                        </div>
                        <StatusBadge status={searchResult.status} />
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3 pb-4 border-b border-border">
                          <User className="text-primary flex-shrink-0 mt-1" size={20} />
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Customer Name</p>
                            <p className="text-foreground font-medium">{searchResult.customerName}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 pb-4 border-b border-border">
                          <Phone className="text-primary flex-shrink-0 mt-1" size={20} />
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Phone Number</p>
                            <p className="text-foreground font-medium">{searchResult.phone}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 pb-4 border-b border-border">
                          <Car className="text-primary flex-shrink-0 mt-1" size={20} />
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Vehicle</p>
                            <p className="text-foreground font-medium">{searchResult.vehicle}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 pb-4 border-b border-border">
                          <Calendar className="text-primary flex-shrink-0 mt-1" size={20} />
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Service Type</p>
                            <p className="text-foreground font-medium">{searchResult.serviceType}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 pb-4 border-b border-border">
                          <Clock className="text-primary flex-shrink-0 mt-1" size={20} />
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Scheduled Date & Time</p>
                            <p className="text-foreground font-medium">
                              {searchResult.date} at {searchResult.time}
                            </p>
                          </div>
                        </div>

                        {searchResult.notes && (
                          <div className="flex items-start gap-3">
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Notes</p>
                              <p className="text-foreground">{searchResult.notes}</p>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="mt-6 pt-6 border-t border-border">
                        <p className="text-sm text-muted-foreground text-center">
                          Need to make changes? Call us at +265 xxx xxx xxx
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <CardContent className="p-12 text-center">
                      <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                        <Search className="text-destructive" size={32} />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Booking Not Found</h3>
                      <p className="text-muted-foreground mb-6">
                        We couldn't find a booking with this reference and phone number. Please check your details and
                        try again.
                      </p>
                      <Button variant="outline" onClick={() => setSearched(false)} className="bg-transparent">
                        Try Again
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </>
            )}

            {/* Help Section */}
            {!searched && (
              <Card className="bg-muted/50 border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Need Help?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Your booking reference was sent to you via SMS and email when you completed your booking. If you
                    can't find it, please contact us:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="outline" className="flex-1 bg-transparent">
                      <Phone size={16} className="mr-2" />
                      Call Us
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      <Search size={16} className="mr-2" />
                      Visit Us
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
