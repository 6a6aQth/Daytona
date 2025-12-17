"use client"

import { AdminSidebar } from "@/components/admin-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { bookings, leads, vehicles } from "@/lib/dummy-data"
import { TrendingUp, Calendar, DollarSign, Users, Car, BarChart3 } from "lucide-react"
import { useAdminAuth } from "@/contexts/admin-auth-context"

export default function AdminReportsPage() {
  const { isAuthenticated } = useAdminAuth()
  
  const totalBookings = bookings.length
  const completedBookings = bookings.filter((b) => b.status === "completed").length
  const totalLeads = leads.length
  const conversionRate = totalLeads > 0 ? ((completedBookings / totalLeads) * 100).toFixed(1) : "0"

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="flex min-h-screen bg-white">
      <AdminSidebar />

      <div className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-1">Reports & Analytics</h1>
          <p className="text-neutral-500">Overview of your business performance</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white border-neutral-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <Calendar className="text-black" size={24} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-1">{totalBookings}</h3>
              <p className="text-sm text-neutral-500">Total Bookings</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-neutral-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center">
                  <TrendingUp className="text-primary" size={24} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-1">{completedBookings}</h3>
              <p className="text-sm text-neutral-500">Completed Services</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-neutral-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="text-primary" size={24} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-1">{totalLeads}</h3>
              <p className="text-sm text-neutral-500">Total Leads</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-neutral-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <DollarSign className="text-black" size={24} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-1">{conversionRate}%</h3>
              <p className="text-sm text-neutral-500">Conversion Rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Service Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-white border-neutral-200">
            <CardHeader className="border-b border-neutral-100">
              <div className="flex items-center gap-2">
                <BarChart3 className="text-primary" size={20} />
                <CardTitle className="text-lg font-semibold text-black">Service Type Breakdown</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {[
                  { type: "Full Service", count: bookings.filter((b) => b.serviceType === "Full Service").length },
                  { type: "Oil Change", count: bookings.filter((b) => b.serviceType === "Oil Change").length },
                  { type: "Brake Inspection", count: bookings.filter((b) => b.serviceType === "Brake Inspection").length },
                  { type: "Tyre Alignment", count: bookings.filter((b) => b.serviceType === "Tyre Alignment").length },
                ].map((service) => (
                  <div key={service.type} className="flex items-center justify-between">
                    <span className="text-sm text-black font-medium">{service.type}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-32 h-2 bg-neutral-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${totalBookings > 0 ? (service.count / totalBookings) * 100 : 0}%` }}
                        />
                      </div>
                      <span className="text-sm font-bold text-black w-8 text-right">{service.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-neutral-200">
            <CardHeader className="border-b border-neutral-100">
              <div className="flex items-center gap-2">
                <Car className="text-primary" size={20} />
                <CardTitle className="text-lg font-semibold text-black">Vehicle Inventory Status</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-primary/10 rounded-xl border border-primary/20">
                  <div>
                    <p className="font-semibold text-black">Total Vehicles</p>
                    <p className="text-sm text-neutral-500">In inventory</p>
                  </div>
                  <p className="text-3xl font-bold text-primary">{vehicles.length}</p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                    <p className="text-2xl font-bold text-black">
                      {vehicles.filter((v) => v.condition === "Excellent").length}
                    </p>
                    <p className="text-xs text-neutral-600 font-medium mt-1">Excellent</p>
                  </div>
                  <div className="text-center p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                    <p className="text-2xl font-bold text-black">
                      {vehicles.filter((v) => v.condition === "Good").length}
                    </p>
                    <p className="text-xs text-neutral-600 font-medium mt-1">Good</p>
                  </div>
                  <div className="text-center p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                    <p className="text-2xl font-bold text-black">
                      {vehicles.filter((v) => v.condition === "Fair").length}
                    </p>
                    <p className="text-xs text-neutral-600 font-medium mt-1">Fair</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Inquiry Type Analysis */}
        <Card className="bg-white border-neutral-200">
          <CardHeader className="border-b border-neutral-100">
            <div className="flex items-center gap-2">
              <Users className="text-primary" size={20} />
              <CardTitle className="text-lg font-semibold text-black">Lead Inquiry Analysis</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-6 bg-primary/10 rounded-xl border border-primary/20">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="text-black" size={24} />
                </div>
                <p className="text-3xl font-bold text-black mb-2">
                  {leads.filter((l) => l.inquiryType === "Price Request").length}
                </p>
                <p className="text-sm text-neutral-600 font-medium">Price Request</p>
              </div>
              <div className="text-center p-6 bg-black rounded-xl">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mx-auto mb-3">
                  <Car className="text-black" size={24} />
                </div>
                <p className="text-3xl font-bold text-white mb-2">
                  {leads.filter((l) => l.inquiryType === "Test Drive").length}
                </p>
                <p className="text-sm text-neutral-400 font-medium">Test Drive</p>
              </div>
              <div className="text-center p-6 bg-neutral-50 rounded-xl border border-neutral-200">
                <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center mx-auto mb-3">
                  <Users className="text-black" size={24} />
                </div>
                <p className="text-3xl font-bold text-black mb-2">
                  {leads.filter((l) => l.inquiryType === "General Enquiry").length}
                </p>
                <p className="text-sm text-neutral-600 font-medium">General Enquiry</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
