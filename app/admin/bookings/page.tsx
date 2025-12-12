"use client"

import { useState } from "react"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { StatusBadge } from "@/components/status-badge"
import { bookings } from "@/lib/dummy-data"
import { Search, Filter, Eye } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AdminBookingsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.vehicle.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || booking.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <div className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Bookings Management</h1>
          <p className="text-muted-foreground">Manage and track all service bookings</p>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  placeholder="Search by customer name, booking ID, or vehicle..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <Filter size={16} className="mr-2" />
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground mb-1">Total Bookings</p>
              <p className="text-2xl font-bold text-foreground">{bookings.length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground mb-1">Pending</p>
              <p className="text-2xl font-bold text-foreground">
                {bookings.filter((b) => b.status === "pending").length}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground mb-1">In Progress</p>
              <p className="text-2xl font-bold text-foreground">
                {bookings.filter((b) => b.status === "in-progress").length}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground mb-1">Completed</p>
              <p className="text-2xl font-bold text-foreground">
                {bookings.filter((b) => b.status === "completed").length}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Bookings Table */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-border bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-semibold text-foreground">Booking ID</th>
                    <th className="text-left p-4 font-semibold text-foreground">Customer</th>
                    <th className="text-left p-4 font-semibold text-foreground">Vehicle</th>
                    <th className="text-left p-4 font-semibold text-foreground">Service</th>
                    <th className="text-left p-4 font-semibold text-foreground">Date & Time</th>
                    <th className="text-left p-4 font-semibold text-foreground">Status</th>
                    <th className="text-left p-4 font-semibold text-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBookings.map((booking) => (
                    <tr key={booking.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="p-4">
                        <span className="font-mono text-sm text-foreground">{booking.id}</span>
                      </td>
                      <td className="p-4">
                        <div>
                          <p className="font-medium text-foreground">{booking.customerName}</p>
                          <p className="text-xs text-muted-foreground">{booking.phone}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="text-sm text-foreground">{booking.vehicle}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-sm text-foreground">{booking.serviceType}</span>
                      </td>
                      <td className="p-4">
                        <div>
                          <p className="text-sm text-foreground">{booking.date}</p>
                          <p className="text-xs text-muted-foreground">{booking.time}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <StatusBadge status={booking.status} />
                      </td>
                      <td className="p-4">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <Eye size={16} />
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Booking Details</DialogTitle>
                              <DialogDescription>Reference: {booking.id}</DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <Label>Customer Name</Label>
                                <p className="text-foreground">{booking.customerName}</p>
                              </div>
                              <div>
                                <Label>Phone Number</Label>
                                <p className="text-foreground">{booking.phone}</p>
                              </div>
                              <div>
                                <Label>Vehicle</Label>
                                <p className="text-foreground">{booking.vehicle}</p>
                              </div>
                              <div>
                                <Label>Service Type</Label>
                                <p className="text-foreground">{booking.serviceType}</p>
                              </div>
                              <div>
                                <Label>Scheduled Date & Time</Label>
                                <p className="text-foreground">
                                  {booking.date} at {booking.time}
                                </p>
                              </div>
                              {booking.notes && (
                                <div>
                                  <Label>Notes</Label>
                                  <p className="text-foreground">{booking.notes}</p>
                                </div>
                              )}
                              <div>
                                <Label>Status</Label>
                                <div className="mt-2">
                                  <StatusBadge status={booking.status} />
                                </div>
                              </div>
                              <div className="pt-4">
                                <Label>Update Status</Label>
                                <Select defaultValue={booking.status}>
                                  <SelectTrigger className="mt-2">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="pending">Pending</SelectItem>
                                    <SelectItem value="confirmed">Confirmed</SelectItem>
                                    <SelectItem value="in-progress">In Progress</SelectItem>
                                    <SelectItem value="completed">Completed</SelectItem>
                                    <SelectItem value="cancelled">Cancelled</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
