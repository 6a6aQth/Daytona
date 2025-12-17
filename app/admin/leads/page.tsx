"use client"

import { useState } from "react"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { leads } from "@/lib/dummy-data"
import { Search, Eye, Mail, Phone, MessageSquare, UserPlus, Users } from "lucide-react"
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

export default function AdminLeadsPage() {
  const { isAuthenticated } = useAdminAuth()
  const [searchTerm, setSearchTerm] = useState("")

  const filteredLeads = leads.filter((lead) => {
    return (
      lead.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.vehicleInterest.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
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
          <h1 className="text-3xl font-bold text-black mb-1">Leads Management</h1>
          <p className="text-neutral-500">Track and manage vehicle inquiries</p>
        </div>

        {/* Search */}
        <Card className="mb-6 bg-white border-neutral-200">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
              <Input
                placeholder="Search by customer name, vehicle, or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-neutral-50 border-neutral-200 text-black placeholder:text-neutral-400"
              />
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="bg-white border-neutral-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <Users className="text-black" size={20} />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Total Leads</p>
                  <p className="text-2xl font-bold text-black">{leads.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white border-neutral-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center">
                  <UserPlus className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">New Leads</p>
                  <p className="text-2xl font-bold text-black">{leads.filter((l) => l.status === "new").length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white border-neutral-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Contacted</p>
                  <p className="text-2xl font-bold text-black">
                    {leads.filter((l) => l.status === "contacted").length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Leads Table */}
        <Card className="bg-white border-neutral-200">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-neutral-200 bg-neutral-50">
                  <tr>
                    <th className="text-left p-4 font-semibold text-black text-sm">Lead ID</th>
                    <th className="text-left p-4 font-semibold text-black text-sm">Customer</th>
                    <th className="text-left p-4 font-semibold text-black text-sm">Vehicle Interest</th>
                    <th className="text-left p-4 font-semibold text-black text-sm">Inquiry Type</th>
                    <th className="text-left p-4 font-semibold text-black text-sm">Date</th>
                    <th className="text-left p-4 font-semibold text-black text-sm">Status</th>
                    <th className="text-left p-4 font-semibold text-black text-sm">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-neutral-50 transition-colors">
                      <td className="p-4">
                        <span className="font-mono text-sm text-black">{lead.id}</span>
                      </td>
                      <td className="p-4">
                        <div>
                          <p className="font-medium text-black">{lead.customerName}</p>
                          <p className="text-xs text-neutral-500">{lead.email}</p>
                          <p className="text-xs text-neutral-500">{lead.phone}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="text-sm text-neutral-700">{lead.vehicleInterest}</span>
                      </td>
                      <td className="p-4">
                        <Badge variant="outline" className="bg-neutral-50 border-neutral-200 text-black">
                          {lead.inquiryType}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <span className="text-sm text-neutral-700">{lead.date}</span>
                      </td>
                      <td className="p-4">
                        <Badge className={lead.status === "new" 
                          ? "bg-primary text-black" 
                          : "bg-black text-white"
                        }>
                          {lead.status === "new" ? "New" : "Contacted"}
                        </Badge>
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
                              <DialogTitle className="text-black">Lead Details</DialogTitle>
                              <DialogDescription>Reference: {lead.id}</DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <Label className="text-neutral-600">Customer Name</Label>
                                <p className="text-black">{lead.customerName}</p>
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <Label className="text-neutral-600">Email</Label>
                                  <p className="text-black text-sm">{lead.email}</p>
                                </div>
                                <div>
                                  <Label className="text-neutral-600">Phone</Label>
                                  <p className="text-black text-sm">{lead.phone}</p>
                                </div>
                              </div>
                              <div>
                                <Label className="text-neutral-600">Vehicle Interest</Label>
                                <p className="text-black">{lead.vehicleInterest}</p>
                              </div>
                              <div>
                                <Label className="text-neutral-600">Inquiry Type</Label>
                                <p className="text-black">{lead.inquiryType}</p>
                              </div>
                              <div>
                                <Label className="text-neutral-600">Message</Label>
                                <p className="text-black">{lead.message}</p>
                              </div>
                              <div>
                                <Label className="text-neutral-600">Status</Label>
                                <Select defaultValue={lead.status}>
                                  <SelectTrigger className="mt-2 bg-neutral-50 border-neutral-200">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="new">New</SelectItem>
                                    <SelectItem value="contacted">Contacted</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="flex gap-2 pt-4">
                                <Button className="flex-1 bg-primary hover:bg-primary/90 text-black">
                                  <Mail size={16} className="mr-2" />
                                  Email
                                </Button>
                                <Button variant="outline" className="flex-1 border-neutral-200 text-black hover:bg-neutral-50">
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
