"use client"

import { useState } from "react"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { vehicles } from "@/lib/dummy-data"
import { Search, Plus, Edit, Trash2, Car, CheckCircle2 } from "lucide-react"
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
import { useAdminAuth } from "@/contexts/admin-auth-context"

export default function AdminVehiclesPage() {
  const { isAuthenticated } = useAdminAuth()
  const [searchTerm, setSearchTerm] = useState("")

  const filteredVehicles = vehicles.filter((vehicle) => {
    return vehicle.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="flex min-h-screen bg-white">
      <AdminSidebar />

      <div className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-black mb-1">Vehicle Inventory</h1>
            <p className="text-neutral-500">Manage your vehicle listings</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90 text-black">
                <Plus size={16} className="mr-2" />
                Add Vehicle
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl bg-white">
              <DialogHeader>
                <DialogTitle className="text-black">Add New Vehicle</DialogTitle>
                <DialogDescription>Enter the details of the vehicle you want to list</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-black">Vehicle Name</Label>
                    <Input placeholder="e.g., Toyota Corolla" className="bg-neutral-50 border-neutral-200" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-black">Year</Label>
                    <Input type="number" placeholder="2020" className="bg-neutral-50 border-neutral-200" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-black">Price (MWK)</Label>
                    <Input placeholder="15,000,000" className="bg-neutral-50 border-neutral-200" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-black">Mileage</Label>
                    <Input placeholder="50,000 km" className="bg-neutral-50 border-neutral-200" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-black">Fuel Type</Label>
                    <Select>
                      <SelectTrigger className="bg-neutral-50 border-neutral-200">
                        <SelectValue placeholder="Select fuel type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="petrol">Petrol</SelectItem>
                        <SelectItem value="diesel">Diesel</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-black">Transmission</Label>
                    <Select>
                      <SelectTrigger className="bg-neutral-50 border-neutral-200">
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
                    <Label className="text-black">Engine</Label>
                    <Input placeholder="2.0L Petrol" className="bg-neutral-50 border-neutral-200" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-black">Color</Label>
                    <Input placeholder="White" className="bg-neutral-50 border-neutral-200" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-black">Condition</Label>
                  <Select>
                    <SelectTrigger className="bg-neutral-50 border-neutral-200">
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
                  <Label className="text-black">Description</Label>
                  <Textarea placeholder="Enter vehicle description..." className="min-h-24 bg-neutral-50 border-neutral-200" />
                </div>
                <div className="space-y-2">
                  <Label className="text-black">Features (comma separated)</Label>
                  <Input placeholder="AC, Power Windows, ABS, etc." className="bg-neutral-50 border-neutral-200" />
                </div>
                <div className="space-y-2">
                  <Label className="text-black">Upload Images</Label>
                  <Input type="file" multiple accept="image/*" className="bg-neutral-50 border-neutral-200" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-black">Add Vehicle</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Search */}
        <Card className="mb-6 bg-white border-neutral-200">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
              <Input
                placeholder="Search vehicles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-neutral-50 border-neutral-200 text-black placeholder:text-neutral-400"
              />
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="bg-white border-neutral-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <Car className="text-black" size={20} />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Total Vehicles</p>
                  <p className="text-2xl font-bold text-black">{vehicles.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white border-neutral-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center">
                  <CheckCircle2 className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Excellent</p>
                  <p className="text-2xl font-bold text-black">
                    {vehicles.filter((v) => v.condition === "Excellent").length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white border-neutral-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Good</p>
                  <p className="text-2xl font-bold text-black">
                    {vehicles.filter((v) => v.condition === "Good").length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white border-neutral-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center">
                  <CheckCircle2 className="text-neutral-500" size={20} />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Fair</p>
                  <p className="text-2xl font-bold text-black">
                    {vehicles.filter((v) => v.condition === "Fair").length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map((vehicle) => (
            <Card key={vehicle.id} className="bg-white border-neutral-200 overflow-hidden hover:border-primary/50 transition-colors">
              <div className="relative h-48 overflow-hidden">
                <Image src={vehicle.image || "/placeholder.svg"} alt={vehicle.name} fill className="object-cover" />
                <Badge className={`absolute top-3 right-3 ${
                  vehicle.condition === "Excellent" 
                    ? "bg-primary text-black" 
                    : vehicle.condition === "Good"
                    ? "bg-black text-white"
                    : "bg-neutral-500 text-white"
                }`}>
                  {vehicle.condition}
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-black mb-1">{vehicle.name}</h3>
                <p className="text-2xl font-bold text-primary mb-3">{vehicle.price}</p>
                <div className="grid grid-cols-2 gap-2 text-xs text-neutral-500 mb-4">
                  <div className="flex items-center gap-1">
                    <span className="font-medium text-black">Year:</span> {vehicle.year}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium text-black">Mileage:</span> {vehicle.mileage}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium text-black">Fuel:</span> {vehicle.fuelType}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium text-black">Trans:</span> {vehicle.transmission}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 border-neutral-200 text-black hover:bg-neutral-50">
                    <Edit size={14} className="mr-1" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
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
