"use client"

import { AdminSidebar } from "@/components/admin-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StatusBadge } from "@/components/status-badge"
import { bookings, leads, vehicles } from "@/lib/dummy-data"
import { Calendar, MessageSquare, Car, TrendingUp, Clock, CheckCircle2, ArrowUpRight } from "lucide-react"
import { useAdminAuth } from "@/contexts/admin-auth-context"

export default function AdminDashboardPage() {
  const { isAuthenticated } = useAdminAuth()
  
  const totalBookings = bookings.length
  const todayBookings = bookings.filter((b) => b.date === new Date().toISOString().split("T")[0]).length
  const pendingBookings = bookings.filter((b) => b.status === "pending").length
  const newLeads = leads.filter((l) => l.status === "new").length
  const availableVehicles = vehicles.length
  const inProgressBookings = bookings.filter((b) => b.status === "in-progress").length
  const completedToday = bookings.filter(
    (b) => b.status === "completed" && b.date === new Date().toISOString().split("T")[0]
  ).length

  const recentBookings = bookings.slice(0, 5)

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="flex min-h-screen bg-white">
      <AdminSidebar />

      <div className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-black mb-1">Dashboard</h1>
              <p className="text-neutral-500">Welcome back! Here's what's happening today.</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-full border border-neutral-200">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-neutral-600">Live Updates</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white border-neutral-200 hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-500 mb-1">Today's Bookings</p>
                  <p className="text-3xl font-bold text-black">{todayBookings}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <ArrowUpRight className="text-primary" size={14} />
                    <span className="text-xs font-medium text-primary">+12%</span>
                    <span className="text-xs text-neutral-400">vs yesterday</span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <Calendar className="text-black" size={22} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-neutral-200 hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-500 mb-1">Pending Bookings</p>
                  <p className="text-3xl font-bold text-black">{pendingBookings}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-xs text-neutral-400">needs attention</span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center">
                  <Clock className="text-primary" size={22} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-neutral-200 hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-500 mb-1">New Leads</p>
                  <p className="text-3xl font-bold text-black">{newLeads}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <ArrowUpRight className="text-primary" size={14} />
                    <span className="text-xs font-medium text-primary">+5</span>
                    <span className="text-xs text-neutral-400">this week</span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <MessageSquare className="text-black" size={22} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-neutral-200 hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-500 mb-1">Available Vehicles</p>
                  <p className="text-3xl font-bold text-black">{availableVehicles}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-xs text-neutral-400">In inventory</span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center">
                  <Car className="text-primary" size={22} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white border-neutral-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-500 mb-1">Total Bookings</p>
                  <p className="text-3xl font-bold text-black">{totalBookings}</p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Calendar className="text-primary" size={28} />
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-neutral-100">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-500">All time</span>
                  <span className="text-primary font-medium flex items-center gap-1">
                    <TrendingUp size={14} />
                    Growing
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-neutral-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-500 mb-1">In Progress</p>
                  <p className="text-3xl font-bold text-black">{inProgressBookings}</p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center">
                  <TrendingUp className="text-primary" size={28} />
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-neutral-100">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-500">Currently active</span>
                  <span className="text-black font-medium">Working on it</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-neutral-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-500 mb-1">Completed Today</p>
                  <p className="text-3xl font-bold text-black">{completedToday}</p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="text-primary" size={28} />
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-neutral-100">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-500">Jobs finished</span>
                  <span className="text-primary font-medium flex items-center gap-1">
                    <CheckCircle2 size={14} />
                    Done
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Bookings */}
        <Card className="bg-white border-neutral-200">
          <CardHeader className="border-b border-neutral-100">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold text-black">Recent Bookings</CardTitle>
              <a href="/admin/bookings" className="text-sm text-primary hover:underline font-medium flex items-center gap-1">
                View all
                <ArrowUpRight size={14} />
              </a>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-neutral-100">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-4 hover:bg-neutral-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Calendar className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-black">{booking.customerName}</p>
                      <p className="text-sm text-neutral-500">
                        {booking.serviceType} • {booking.vehicle}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right hidden md:block">
                      <p className="text-sm font-medium text-black">{booking.date}</p>
                      <p className="text-xs text-neutral-500">{booking.time}</p>
                    </div>
                    <StatusBadge status={booking.status} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
