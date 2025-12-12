"use client"

import { use, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { vehicles } from "@/lib/dummy-data"
import { Calendar, Gauge, Fuel, Cog, Palette, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export default function VehicleDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const vehicle = vehicles.find((v) => v.id === id)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [inquiryType, setInquiryType] = useState("price")

  if (!vehicle) {
    notFound()
  }

  // Mock multiple images (in production, you'd have multiple images per vehicle)
  const vehicleImages = [vehicle.image, vehicle.image, vehicle.image]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % vehicleImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + vehicleImages.length) % vehicleImages.length)
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/vehicles" className="text-primary hover:underline">
              ← Back to Vehicles
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-muted">
                <Image
                  src={vehicleImages[currentImageIndex] || "/placeholder.svg"}
                  alt={vehicle.name}
                  fill
                  className="object-cover"
                />

                {/* Navigation Arrows */}
                {vehicleImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}

                {/* Condition Badge */}
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">{vehicle.condition}</Badge>
              </div>

              {/* Thumbnail Strip */}
              <div className="grid grid-cols-3 gap-2">
                {vehicleImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative aspect-video rounded-lg overflow-hidden ${
                      currentImageIndex === idx ? "ring-2 ring-primary" : "opacity-60 hover:opacity-100"
                    } transition-all`}
                  >
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`${vehicle.name} ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Vehicle Details */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{vehicle.name}</h1>
              <p className="text-4xl font-bold text-primary mb-6">{vehicle.price}</p>

              {/* Key Specs */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <Card>
                  <CardContent className="p-4 flex items-center gap-3">
                    <Calendar className="text-primary" size={24} />
                    <div>
                      <p className="text-xs text-muted-foreground">Year</p>
                      <p className="font-semibold text-foreground">{vehicle.year}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 flex items-center gap-3">
                    <Gauge className="text-primary" size={24} />
                    <div>
                      <p className="text-xs text-muted-foreground">Mileage</p>
                      <p className="font-semibold text-foreground">{vehicle.mileage}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 flex items-center gap-3">
                    <Fuel className="text-primary" size={24} />
                    <div>
                      <p className="text-xs text-muted-foreground">Fuel Type</p>
                      <p className="font-semibold text-foreground">{vehicle.fuelType}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 flex items-center gap-3">
                    <Cog className="text-primary" size={24} />
                    <div>
                      <p className="text-xs text-muted-foreground">Transmission</p>
                      <p className="font-semibold text-foreground">{vehicle.transmission}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-foreground mb-3">Description</h2>
                <p className="text-muted-foreground">{vehicle.description}</p>
              </div>

              {/* Additional Details */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-foreground mb-3">Details</h2>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Cog size={16} className="text-primary" />
                    <span className="text-muted-foreground">Engine: {vehicle.engine}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Palette size={16} className="text-primary" />
                    <span className="text-muted-foreground">Color: {vehicle.color}</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-foreground mb-3">Features</h2>
                <div className="grid grid-cols-2 gap-2">
                  {vehicle.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="mt-16">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Interested in this vehicle?</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Phiri" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+265 xxx xxx xxx" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <Select value={inquiryType} onValueChange={setInquiryType}>
                        <SelectTrigger id="inquiryType">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="price">Price Request</SelectItem>
                          <SelectItem value="test-drive">Schedule Test Drive</SelectItem>
                          <SelectItem value="general">General Enquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your interest in this vehicle..."
                      className="min-h-32"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" size="lg" className="flex-1">
                      Send Inquiry
                    </Button>
                    <Button type="button" size="lg" variant="outline" className="flex-1 bg-transparent">
                      Call Us: +265 xxx xxx xxx
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
