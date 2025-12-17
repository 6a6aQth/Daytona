"use client"

import { useState } from "react"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { StatusBadge } from "@/components/status-badge"
import { bookings } from "@/lib/dummy-data"
import { Search, Filter, Eye, Calendar, Clock, CheckCircle2 } from "lucide-react"
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
import { useAdminAuth } from "@/contexts/admin-auth-context"

export default function AdminBookingsPage() {
  const { isAuthenticated } = useAdminAuth()
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

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="flex min-h-screen bg-white">
      <AdminSidebar />

      <div className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-1">Bookings Management</h1>
          <p className="text-neutral-500">Manage and track all service bookings</p>
        </div>

        {/* Filters */}
        <Card className="mb-6 bg-white border-neutral-200">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
                <Input
                  placeholder="Search by customer name, booking ID, or vehicle..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-neutral-50 border-neutral-200 text-black placeholder:text-neutral-400"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-48 bg-neutral-50 border-neutral-200 text-black">
                  <Filter size={16} className="mr-2 text-neutral-400" />
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
          <Card className="bg-white border-neutral-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <Calendar className="text-black" size={20} />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Total Bookings</p>
                  <p className="text-2xl font-bold text-black">{bookings.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white border-neutral-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center">
                  <Clock className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Pending</p>
                  <p className="text-2xl font-bold text-black">
                    {bookings.filter((b) => b.status === "pending").length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white border-neutral-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">In Progress</p>
                  <p className="text-2xl font-bold text-black">
                    {bookings.filter((b) => b.status === "in-progress").length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white border-neutral-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <CheckCircle2 className="text-black" size={20} />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Completed</p>
                  <p className="text-2xl font-bold text-black">
                    {bookings.filter((b) => b.status === "completed").length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bookings Table */}
        <Card className="bg-white border-neutral-200">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-neutral-200 bg-neutral-50">
                  <tr>
                    <th className="text-left p-4 font-semibold text-black text-sm">Booking ID</th>
                    <th className="text-left p-4 font-semibold text-black text-sm">Customer</th>
                    <th className="text-left p-4 font-semibold text-black text-sm">Vehicle</th>
                    <th className="text-left p-4 font-semibold text-black text-sm">Service</th>
                    <th className="text-left p-4 font-semibold text-black text-sm">Date & Time</th>
                    <th className="text-left p-4 font-semibold text-black text-sm">Status</th>
                    <th className="text-left p-4 font-semibold text-black text-sm">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {filteredBookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-neutral-50 transition-colors">
                      <td className="p-4">
                        <span className="font-mono text-sm text-black">{booking.id}</span>
                      </td>
                      <td className="p-4">
                        <div>
                          <p className="font-medium text-black">{booking.customerName}</p>
                          <p className="text-xs text-neutral-500">{booking.phone}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="text-sm text-neutral-700">{booking.vehicle}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-sm text-neutral-700">{booking.serviceType}</span>
                      </td>
                      <td className="p-4">
                        <div>
                          <p className="text-sm text-black">{booking.date}</p>
                          <p className="text-xs text-neutral-500">{booking.time}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <StatusBadge status={booking.status} />
                      </td>
                      <td className="p-4">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm" className="text-neutral-600 hover:text-black hover:bg-neutral-100">
                              <Eye size={16} />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="bg-white">
                            <DialogHeader>
                              <DialogTitle className="text-black">Booking Details</DialogTitle>
                              <DialogDescription>Reference: {booking.id}</DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <Label className="text-neutral-600">Customer Name</Label>
                                <p className="text-black">{booking.customerName}</p>
                              </div>
                              <div>
                                <Label className="text-neutral-600">Phone Number</Label>
                                <p className="text-black">{booking.phone}</p>
                              </div>
                              <div>
                                <Label className="text-neutral-600">Vehicle</Label>
                                <p className="text-black">{booking.vehicle}</p>
                              </div>
                              <div>
                                <Label className="text-neutral-600">Service Type</Label>
                                <p className="text-black">{booking.serviceType}</p>
                              </div>
                              <div>
                                <Label className="text-neutral-600">Scheduled Date & Time</Label>
                                <p className="text-black">
                                  {booking.date} at {booking.time}
                                </p>
                              </div>
                              {booking.notes && (
                                <div>
                                  <Label className="text-neutral-600">Notes</Label>
                                  <p className="text-black">{booking.notes}</p>
                                </div>
                              )}
                              <div>
                                <Label className="text-neutral-600">Status</Label>
                                <div className="mt-2">
                                  <StatusBadge status={booking.status} />
                                </div>
                              </div>
                              <div className="pt-4">
                                <Label className="text-neutral-600">Update Status</Label>
                                <Select defaultValue={booking.status}>
                                  <SelectTrigger className="mt-2 bg-neutral-50 border-neutral-200">
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
