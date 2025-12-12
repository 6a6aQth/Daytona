"use client"

import { useState } from "react"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { leads } from "@/lib/dummy-data"
import { Search, Eye, Mail, Phone } from "lucide-react"
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

export default function AdminLeadsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredLeads = leads.filter((lead) => {
    return (
      lead.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.vehicleInterest.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <div className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Leads Management</h1>
          <p className="text-muted-foreground">Track and manage vehicle inquiries</p>
        </div>

        {/* Search */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                placeholder="Search by customer name, vehicle, or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground mb-1">Total Leads</p>
              <p className="text-2xl font-bold text-foreground">{leads.length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground mb-1">New Leads</p>
              <p className="text-2xl font-bold text-foreground">{leads.filter((l) => l.status === "new").length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground mb-1">Contacted</p>
              <p className="text-2xl font-bold text-foreground">
                {leads.filter((l) => l.status === "contacted").length}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Leads Table */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-border bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-semibold text-foreground">Lead ID</th>
                    <th className="text-left p-4 font-semibold text-foreground">Customer</th>
                    <th className="text-left p-4 font-semibold text-foreground">Vehicle Interest</th>
                    <th className="text-left p-4 font-semibold text-foreground">Inquiry Type</th>
                    <th className="text-left p-4 font-semibold text-foreground">Date</th>
                    <th className="text-left p-4 font-semibold text-foreground">Status</th>
                    <th className="text-left p-4 font-semibold text-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="p-4">
                        <span className="font-mono text-sm text-foreground">{lead.id}</span>
                      </td>
                      <td className="p-4">
                        <div>
                          <p className="font-medium text-foreground">{lead.customerName}</p>
                          <p className="text-xs text-muted-foreground">{lead.email}</p>
                          <p className="text-xs text-muted-foreground">{lead.phone}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="text-sm text-foreground">{lead.vehicleInterest}</span>
                      </td>
                      <td className="p-4">
                        <Badge variant="outline" className="bg-transparent">
                          {lead.inquiryType}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <span className="text-sm text-foreground">{lead.date}</span>
                      </td>
                      <td className="p-4">
                        <Badge className={lead.status === "new" ? "bg-primary text-primary-foreground" : ""}>
                          {lead.status === "new" ? "New" : "Contacted"}
                        </Badge>
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
                              <DialogTitle>Lead Details</DialogTitle>
                              <DialogDescription>Reference: {lead.id}</DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <Label>Customer Name</Label>
                                <p className="text-foreground">{lead.customerName}</p>
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <Label>Email</Label>
                                  <p className="text-foreground text-sm">{lead.email}</p>
                                </div>
                                <div>
                                  <Label>Phone</Label>
                                  <p className="text-foreground text-sm">{lead.phone}</p>
                                </div>
                              </div>
                              <div>
                                <Label>Vehicle Interest</Label>
                                <p className="text-foreground">{lead.vehicleInterest}</p>
                              </div>
                              <div>
                                <Label>Inquiry Type</Label>
                                <p className="text-foreground">{lead.inquiryType}</p>
                              </div>
                              <div>
                                <Label>Message</Label>
                                <p className="text-foreground">{lead.message}</p>
                              </div>
                              <div>
                                <Label>Status</Label>
                                <Select defaultValue={lead.status}>
                                  <SelectTrigger className="mt-2">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="new">New</SelectItem>
                                    <SelectItem value="contacted">Contacted</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="flex gap-2 pt-4">
                                <Button className="flex-1">
                                  <Mail size={16} className="mr-2" />
                                  Email
                                </Button>
                                <Button variant="outline" className="flex-1 bg-transparent">
                                  <Phone size={16} className="mr-2" />
                                  Call
                                </Button>
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
