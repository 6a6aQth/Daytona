"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { VehicleCard } from "@/components/vehicle-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { vehicles } from "@/lib/dummy-data"
import { Search, SlidersHorizontal } from "lucide-react"

export default function VehiclesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [priceRange, setPriceRange] = useState("all")
  const [fuelType, setFuelType] = useState("all")
  const [condition, setCondition] = useState("all")
  const [showFilters, setShowFilters] = useState(false)

  const filteredVehicles = vehicles.filter((vehicle) => {
    const matchesSearch = vehicle.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFuel = fuelType === "all" || vehicle.fuelType.toLowerCase() === fuelType.toLowerCase()
    const matchesCondition = condition === "all" || vehicle.condition === condition

    // Simple price range filter
    const priceNum = Number.parseInt(vehicle.price.replace(/[^\d]/g, ""))
    let matchesPrice = true
    if (priceRange === "low") matchesPrice = priceNum < 15000000
    else if (priceRange === "mid") matchesPrice = priceNum >= 15000000 && priceNum < 35000000
    else if (priceRange === "high") matchesPrice = priceNum >= 35000000

    return matchesSearch && matchesFuel && matchesCondition && matchesPrice
  })

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Vehicle Inventory</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Browse our selection of quality pre-owned vehicles, each thoroughly inspected and ready for the road
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Listing */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                <div className="flex items-center justify-between mb-4 lg:mb-6">
                  <h2 className="text-xl font-bold text-foreground">Filters</h2>
                  <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setShowFilters(!showFilters)}>
                    <SlidersHorizontal size={20} />
                  </Button>
                </div>

                <Card className={`${showFilters ? "block" : "hidden lg:block"}`}>
                  <CardContent className="p-6 space-y-6">
                    {/* Search */}
                    <div className="space-y-2">
                      <Label htmlFor="search">Search</Label>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                        <Input
                          id="search"
                          placeholder="Search vehicles..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    {/* Price Range */}
                    <div className="space-y-2">
                      <Label htmlFor="price">Price Range</Label>
                      <Select value={priceRange} onValueChange={setPriceRange}>
                        <SelectTrigger id="price">
                          <SelectValue placeholder="Select price range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Prices</SelectItem>
                          <SelectItem value="low">Under 15M MWK</SelectItem>
                          <SelectItem value="mid">15M - 35M MWK</SelectItem>
                          <SelectItem value="high">Above 35M MWK</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Fuel Type */}
                    <div className="space-y-2">
                      <Label htmlFor="fuel">Fuel Type</Label>
                      <Select value={fuelType} onValueChange={setFuelType}>
                        <SelectTrigger id="fuel">
                          <SelectValue placeholder="Select fuel type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Types</SelectItem>
                          <SelectItem value="petrol">Petrol</SelectItem>
                          <SelectItem value="diesel">Diesel</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Condition */}
                    <div className="space-y-2">
                      <Label htmlFor="condition">Condition</Label>
                      <Select value={condition} onValueChange={setCondition}>
                        <SelectTrigger id="condition">
                          <SelectValue placeholder="Select condition" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Conditions</SelectItem>
                          <SelectItem value="Excellent">Excellent</SelectItem>
                          <SelectItem value="Good">Good</SelectItem>
                          <SelectItem value="Fair">Fair</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Reset Button */}
                    <Button
                      variant="outline"
                      className="w-full bg-transparent"
                      onClick={() => {
                        setSearchTerm("")
                        setPriceRange("all")
                        setFuelType("all")
                        setCondition("all")
                      }}
                    >
                      Reset Filters
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Vehicle Grid */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                  Showing {filteredVehicles.length} of {vehicles.length} vehicles
                </p>
              </div>

              {filteredVehicles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredVehicles.map((vehicle) => (
                    <VehicleCard key={vehicle.id} {...vehicle} />
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-12 text-center">
                    <p className="text-muted-foreground">No vehicles found matching your filters.</p>
                    <Button
                      variant="outline"
                      className="mt-4 bg-transparent"
                      onClick={() => {
                        setSearchTerm("")
                        setPriceRange("all")
                        setFuelType("all")
                        setCondition("all")
                      }}
                    >
                      Reset Filters
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
