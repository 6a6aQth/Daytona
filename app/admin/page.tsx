import { AdminSidebar } from "@/components/admin-sidebar"
import { StatsCard } from "@/components/stats-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StatusBadge } from "@/components/status-badge"
import { bookings, leads, vehicles } from "@/lib/dummy-data"
import { Calendar, MessageSquare, Car, TrendingUp, Clock, CheckCircle2 } from "lucide-react"

export default function AdminDashboardPage() {
  // Calculate stats
  const totalBookings = bookings.length
  const todayBookings = bookings.filter((b) => b.date === new Date().toISOString().split("T")[0]).length
  const pendingBookings = bookings.filter((b) => b.status === "pending").length
  const newLeads = leads.filter((l) => l.status === "new").length
  const availableVehicles = vehicles.length
  const inProgressBookings = bookings.filter((b) => b.status === "in-progress").length

  // Recent bookings
  const recentBookings = bookings.slice(0, 5)

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <div className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard title="Today's Bookings" value={todayBookings} icon={Calendar} trend="+12%" trendUp />
          <StatsCard title="Pending Bookings" value={pendingBookings} icon={Clock} trend="+3" trendUp />
          <StatsCard title="New Leads" value={newLeads} icon={MessageSquare} trend="+5" trendUp />
          <StatsCard title="Available Vehicles" value={availableVehicles} icon={Car} />
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Bookings</p>
                  <p className="text-3xl font-bold text-foreground">{totalBookings}</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calendar className="text-primary" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">In Progress</p>
                  <p className="text-3xl font-bold text-foreground">{inProgressBookings}</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center">
                  <TrendingUp className="text-chart-2" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Completed Today</p>
                  <p className="text-3xl font-bold text-foreground">
                    {
                      bookings.filter(
                        (b) => b.status === "completed" && b.date === new Date().toISOString().split("T")[0],
                      ).length
                    }
                  </p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center">
                  <CheckCircle2 className="text-chart-2" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Bookings */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Calendar className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{booking.customerName}</p>
                      <p className="text-sm text-muted-foreground">
                        {booking.serviceType} - {booking.vehicle}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right hidden md:block">
                      <p className="text-sm font-medium text-foreground">{booking.date}</p>
                      <p className="text-xs text-muted-foreground">{booking.time}</p>
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
