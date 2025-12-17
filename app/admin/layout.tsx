import type React from "react"
import { AdminAuthProvider } from "@/contexts/admin-auth-context"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AdminAuthProvider>
      <div className="admin-theme">
        {children}
      </div>
    </AdminAuthProvider>
  )
}
