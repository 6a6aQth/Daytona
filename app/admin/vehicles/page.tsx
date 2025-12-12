"use client"

import { useState } from "react"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { vehicles } from "@/lib/dummy-data"
import { Search, Plus, Edit, Trash2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

export default function AdminVehiclesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredVehicles = vehicles.filter((vehicle) => {
    return vehicle.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <div className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Vehicle Inventory</h1>
            <p className="text-muted-foreground">Manage your vehicle listings</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus size={16} className="mr-2" />
                Add Vehicle
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Add New Vehicle</DialogTitle>
                <DialogDescription>Enter the details of the vehicle you want to list</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Vehicle Name</Label>
                    <Input placeholder="e.g., Toyota Corolla" />
                  </div>
                  <div className="space-y-2">
                    <Label>Year</Label>
                    <Input type="number" placeholder="2020" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Price (MWK)</Label>
                    <Input placeholder="15,000,000" />
                  </div>
                  <div className="space-y-2">
                    <Label>Mileage</Label>
                    <Input placeholder="50,000 km" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Fuel Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select fuel type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="petrol">Petrol</SelectItem>
                        <SelectItem value="diesel">Diesel</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Transmission</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select transmission" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="automatic">Automatic</SelectItem>
                        <SelectItem value="manual">Manual</SelectItem>
                        <SelectItem value="cvt">CVT</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Engine</Label>
                    <Input placeholder="2.0L Petrol" />
                  </div>
                  <div className="space-y-2">
                    <Label>Color</Label>
                    <Input placeholder="White" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Condition</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="excellent">Excellent</SelectItem>
                      <SelectItem value="good">Good</SelectItem>
                      <SelectItem value="fair">Fair</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea placeholder="Enter vehicle description..." className="min-h-24" />
                </div>
                <div className="space-y-2">
                  <Label>Features (comma separated)</Label>
                  <Input placeholder="AC, Power Windows, ABS, etc." />
                </div>
                <div className="space-y-2">
                  <Label>Upload Images</Label>
                  <Input type="file" multiple accept="image/*" />
                </div>
                <Button className="w-full">Add Vehicle</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Search */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                placeholder="Search vehicles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground mb-1">Total Vehicles</p>
              <p className="text-2xl font-bold text-foreground">{vehicles.length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground mb-1">Excellent</p>
              <p className="text-2xl font-bold text-foreground">
                {vehicles.filter((v) => v.condition === "Excellent").length}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground mb-1">Good</p>
              <p className="text-2xl font-bold text-foreground">
                {vehicles.filter((v) => v.condition === "Good").length}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground mb-1">Fair</p>
              <p className="text-2xl font-bold text-foreground">
                {vehicles.filter((v) => v.condition === "Fair").length}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map((vehicle) => (
            <Card key={vehicle.id}>
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image src={vehicle.image || "/placeholder.svg"} alt={vehicle.name} fill className="object-cover" />
                <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">{vehicle.condition}</Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-foreground mb-1">{vehicle.name}</h3>
                <p className="text-2xl font-bold text-primary mb-3">{vehicle.price}</p>
                <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-4">
                  <div>Year: {vehicle.year}</div>
                  <div>Mileage: {vehicle.mileage}</div>
                  <div>Fuel: {vehicle.fuelType}</div>
                  <div>Trans: {vehicle.transmission}</div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Edit size={14} className="mr-1" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent"
                  >
                    <Trash2 size={14} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
