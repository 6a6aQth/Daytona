"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Calendar, MessageSquare, Car, FileText, LogOut, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAdminAuth } from "@/contexts/admin-auth-context"

const navItems = [
  { href: "/admin", icon: LayoutDashboard, label: "Dashboard", description: "Overview & stats" },
  { href: "/admin/bookings", icon: Calendar, label: "Bookings", description: "Manage appointments" },
  { href: "/admin/leads", icon: MessageSquare, label: "Leads", description: "Customer inquiries" },
  { href: "/admin/vehicles", icon: Car, label: "Vehicles", description: "Inventory management" },
  { href: "/admin/reports", icon: FileText, label: "Reports", description: "Analytics & insights" },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const { logout } = useAdminAuth()

  return (
    <div className="w-72 min-h-screen bg-black border-r border-neutral-800 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-neutral-800">
        <Link href="/admin" className="flex items-center gap-3">
          <Image
            src="/Daytona Mw Logo.png"
            alt="Daytona Logo"
            width={140}
            height={45}
            className="h-10 w-auto"
          />
        </Link>
        <div className="mt-3 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full inline-flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium text-primary">Admin Portal</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="mb-3">
          <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider px-4">
            Navigation
          </span>
        </div>
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${
                    isActive
                      ? "bg-primary text-black"
                      : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
                  }`}
                >
                  <div className={`p-2 rounded-lg ${
                    isActive 
                      ? "bg-black/20" 
                      : "bg-neutral-800 group-hover:bg-neutral-700"
                  }`}>
                    <Icon size={18} className={isActive ? "text-black" : "text-neutral-400 group-hover:text-primary"} />
                  </div>
                  <div className="flex-1">
                    <span className="font-medium block">{item.label}</span>
                    <span className={`text-xs ${isActive ? "text-black/70" : "text-neutral-500"}`}>
                      {item.description}
                    </span>
                  </div>
                  {isActive && <ChevronRight size={16} className="text-black/70" />}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* User section & Logout */}
      <div className="p-4 border-t border-neutral-800">
        <div className="px-4 py-3 bg-neutral-900 rounded-xl mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black font-bold">
              A
            </div>
            <div>
              <p className="font-medium text-white text-sm">Admin User</p>
              <p className="text-xs text-neutral-500">Administrator</p>
            </div>
          </div>
        </div>
        <Button
          variant="outline"
          onClick={logout}
          className="w-full justify-start bg-transparent border-neutral-800 text-neutral-400 hover:bg-neutral-900 hover:text-white hover:border-neutral-700 transition-colors"
        >
          <LogOut size={18} className="mr-3" />
          Sign Out
        </Button>
      </div>
    </div>
  )
}
