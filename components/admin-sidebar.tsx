"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Calendar, MessageSquare, Car, FileText, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/admin/bookings", icon: Calendar, label: "Bookings" },
  { href: "/admin/leads", icon: MessageSquare, label: "Leads" },
  { href: "/admin/vehicles", icon: Car, label: "Vehicles" },
  { href: "/admin/reports", icon: FileText, label: "Reports" },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 min-h-screen bg-card border-r border-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">D</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground leading-tight">DAYTONA</span>
            <span className="text-xs text-muted-foreground">Admin Portal</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-border">
        <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
          <Link href="/admin/login">
            <LogOut size={20} className="mr-3" />
            Logout
          </Link>
        </Button>
      </div>
    </div>
  )
}
