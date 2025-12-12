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
import { Search, SlidersHorizontal, Car, X } from "lucide-react"

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

  const resetFilters = () => {
    setSearchTerm("")
    setPriceRange("all")
    setFuelType("all")
    setCondition("all")
  }

  const hasActiveFilters = searchTerm || priceRange !== "all" || fuelType !== "all" || condition !== "all"

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
              Vehicle Inventory
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-slide-up">
              Quality <span className="text-primary">Pre-Owned</span> Vehicles
            </h1>
            <p className="text-lg text-muted-foreground text-pretty animate-slide-up stagger-1 opacity-0">
              Browse our selection of handpicked vehicles, each thoroughly inspected and ready for the road
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Listing */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                <div className="flex items-center justify-between mb-4 lg:mb-6">
                  <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <SlidersHorizontal size={20} className="text-primary" />
                    Filters
                  </h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="lg:hidden"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    {showFilters ? <X size={20} /> : <SlidersHorizontal size={20} />}
                  </Button>
                </div>

                <Card
                  className={`border-border/50 overflow-hidden ${showFilters ? "block" : "hidden lg:block"}`}
                >
                  <div className="h-1 bg-gradient-to-r from-primary via-amber-500 to-transparent" />
                  <CardContent className="p-6 space-y-6">
                    {/* Search */}
                    <div className="space-y-2">
                      <Label htmlFor="search" className="text-foreground font-medium">
                        Search
                      </Label>
                      <div className="relative">
                        <Search
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                          size={18}
                        />
                        <Input
                          id="search"
                          placeholder="Search vehicles..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10 h-11 bg-muted/50 border-border focus:border-primary"
                        />
                      </div>
                    </div>

                    {/* Price Range */}
                    <div className="space-y-2">
                      <Label htmlFor="price" className="text-foreground font-medium">
                        Price Range
                      </Label>
                      <Select value={priceRange} onValueChange={setPriceRange}>
                        <SelectTrigger id="price" className="h-11 bg-muted/50 border-border">
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
                      <Label htmlFor="fuel" className="text-foreground font-medium">
                        Fuel Type
                      </Label>
                      <Select value={fuelType} onValueChange={setFuelType}>
                        <SelectTrigger id="fuel" className="h-11 bg-muted/50 border-border">
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
                      <Label htmlFor="condition" className="text-foreground font-medium">
                        Condition
                      </Label>
                      <Select value={condition} onValueChange={setCondition}>
                        <SelectTrigger id="condition" className="h-11 bg-muted/50 border-border">
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
                    {hasActiveFilters && (
                      <Button variant="outline" className="w-full bg-transparent" onClick={resetFilters}>
                        <X size={16} className="mr-2" />
                        Reset Filters
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Vehicle Grid */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-8 p-4 rounded-xl bg-card border border-border/50">
                <p className="text-muted-foreground">
                  Showing <span className="text-primary font-semibold">{filteredVehicles.length}</span> of{" "}
                  <span className="text-foreground font-semibold">{vehicles.length}</span> vehicles
                </p>
                {hasActiveFilters && (
                  <Button variant="ghost" size="sm" onClick={resetFilters} className="text-primary">
                    Clear all
                  </Button>
                )}
              </div>

              {filteredVehicles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredVehicles.map((vehicle, index) => (
                    <div
                      key={vehicle.id}
                      className={`animate-slide-up stagger-${(index % 4) + 1} opacity-0`}
                    >
                      <VehicleCard {...vehicle} />
                    </div>
                  ))}
                </div>
              ) : (
                <Card className="border-border/50">
                  <CardContent className="p-16 text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Car className="text-primary" size={40} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">No vehicles found</h3>
                    <p className="text-muted-foreground mb-6">
                      No vehicles match your current filters. Try adjusting your search criteria.
                    </p>
                    <Button variant="outline" onClick={resetFilters}>
                      <X size={16} className="mr-2" />
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
