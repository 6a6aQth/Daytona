import { AdminSidebar } from "@/components/admin-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { bookings, leads, vehicles } from "@/lib/dummy-data"
import { TrendingUp, Calendar, DollarSign, Users } from "lucide-react"

export default function AdminReportsPage() {
  // Calculate metrics
  const totalBookings = bookings.length
  const completedBookings = bookings.filter((b) => b.status === "completed").length
  const totalLeads = leads.length
  const conversionRate = totalLeads > 0 ? ((completedBookings / totalLeads) * 100).toFixed(1) : "0"

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <div className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Reports & Analytics</h1>
          <p className="text-muted-foreground">Overview of your business performance</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calendar className="text-primary" size={24} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{totalBookings}</h3>
              <p className="text-sm text-muted-foreground">Total Bookings</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center">
                  <TrendingUp className="text-chart-2" size={24} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{completedBookings}</h3>
              <p className="text-sm text-muted-foreground">Completed Services</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-chart-4/10 flex items-center justify-center">
                  <Users className="text-chart-4" size={24} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{totalLeads}</h3>
              <p className="text-sm text-muted-foreground">Total Leads</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <DollarSign className="text-primary" size={24} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{conversionRate}%</h3>
              <p className="text-sm text-muted-foreground">Conversion Rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Service Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Service Type Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { type: "Full Service", count: bookings.filter((b) => b.serviceType === "Full Service").length },
                  { type: "Oil Change", count: bookings.filter((b) => b.serviceType === "Oil Change").length },
                  {
                    type: "Brake Inspection",
                    count: bookings.filter((b) => b.serviceType === "Brake Inspection").length,
                  },
                  {
                    type: "Tyre Alignment",
                    count: bookings.filter((b) => b.serviceType === "Tyre Alignment").length,
                  },
                ].map((service) => (
                  <div key={service.type} className="flex items-center justify-between">
                    <span className="text-sm text-foreground">{service.type}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{ width: `${(service.count / totalBookings) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-foreground w-8 text-right">{service.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Vehicle Inventory Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-semibold text-foreground">Total Vehicles</p>
                    <p className="text-sm text-muted-foreground">In inventory</p>
                  </div>
                  <p className="text-3xl font-bold text-primary">{vehicles.length}</p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <p className="text-2xl font-bold text-foreground">
                      {vehicles.filter((v) => v.condition === "Excellent").length}
                    </p>
                    <p className="text-xs text-muted-foreground">Excellent</p>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <p className="text-2xl font-bold text-foreground">
                      {vehicles.filter((v) => v.condition === "Good").length}
                    </p>
                    <p className="text-xs text-muted-foreground">Good</p>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <p className="text-2xl font-bold text-foreground">
                      {vehicles.filter((v) => v.condition === "Fair").length}
                    </p>
                    <p className="text-xs text-muted-foreground">Fair</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Inquiry Type Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>Lead Inquiry Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { type: "Price Request", count: leads.filter((l) => l.inquiryType === "Price Request").length },
                { type: "Test Drive", count: leads.filter((l) => l.inquiryType === "Test Drive").length },
                { type: "General Enquiry", count: leads.filter((l) => l.inquiryType === "General Enquiry").length },
              ].map((inquiry) => (
                <div key={inquiry.type} className="text-center p-6 bg-muted/50 rounded-lg">
                  <p className="text-3xl font-bold text-foreground mb-2">{inquiry.count}</p>
                  <p className="text-sm text-muted-foreground">{inquiry.type}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
