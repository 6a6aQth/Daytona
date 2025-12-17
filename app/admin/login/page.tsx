"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAdminAuth } from "@/contexts/admin-auth-context"
import { Lock, Eye, EyeOff, AlertCircle, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AdminLoginPage() {
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAdminAuth()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 500))

    const success = login(password)
    if (!success) {
      setError("Invalid password. Please try again.")
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left side - Decorative */}
      <div className="hidden lg:flex lg:w-1/2 bg-black relative overflow-hidden">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F1C40F' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        
        {/* Gold accent lines */}
        <div className="absolute left-0 top-1/4 w-1 h-32 bg-primary" />
        <div className="absolute right-0 bottom-1/4 w-1 h-32 bg-primary" />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-12 xl:px-20">
          <div className="mb-8">
            <Image
              src="/Daytona Mw Logo.png"
              alt="Daytona Logo"
              width={180}
              height={60}
              className="h-16 w-auto"
            />
          </div>
          <h1 className="text-4xl xl:text-5xl font-bold text-white mb-4 leading-tight">
            Admin<br />
            <span className="text-primary">Dashboard</span>
          </h1>
          <p className="text-neutral-400 text-lg max-w-md">
            Manage your bookings, leads, vehicles, and business operations all in one place.
          </p>
          
          {/* Feature highlights */}
          <div className="mt-12 space-y-4">
            {["Booking Management", "Lead Tracking", "Vehicle Inventory", "Reports & Analytics"].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-neutral-300">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden mb-8 text-center">
            <Image
              src="/Daytona Mw Logo.png"
              alt="Daytona Logo"
              width={150}
              height={50}
              className="h-12 w-auto mx-auto mb-4"
            />
          </div>

          {/* Login card */}
          <div className="bg-white rounded-2xl border border-neutral-200 p-8 md:p-10 shadow-sm">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lock className="text-black" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-black mb-2">Welcome Back</h2>
              <p className="text-neutral-500">Enter your password to access the admin panel</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="password" className="text-black font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                      setError("")
                    }}
                    className="h-12 pr-12 bg-neutral-50 border-neutral-200 focus:border-primary focus:ring-primary/20 text-black placeholder:text-neutral-400"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 border border-red-200">
                  <AlertCircle className="text-red-500 flex-shrink-0" size={18} />
                  <span className="text-sm text-red-600">{error}</span>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={isLoading}
                className="w-full h-12 bg-primary hover:bg-primary/90 text-black font-semibold"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    <span>Signing in...</span>
                  </div>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-neutral-100">
              <Link
                href="/"
                className="flex items-center justify-center gap-2 text-sm text-neutral-500 hover:text-primary transition-colors"
              >
                <ArrowLeft size={16} />
                Back to Website
              </Link>
            </div>
          </div>

          <p className="text-center text-xs text-neutral-400 mt-6">
            Protected admin area. Unauthorized access is prohibited.
          </p>
        </div>
      </div>
    </div>
  )
}
