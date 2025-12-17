"use client"

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Dynamically import GhostCursor to avoid SSR issues with Three.js
const GhostCursor = dynamic(() => import('./ghost-cursor'), { ssr: false })

const stats = [
  { number: 20, suffix: "+", label: "Years Experience" },
  { number: 3.8, suffix: "k", label: "Services Completed", decimals: 1 },
  { number: 30, suffix: "+", label: "Expert Technicians" },
  { number: 100, suffix: "%", label: "Customer Satisfaction" },
]

// Load Orbitron font
if (typeof window !== 'undefined') {
  const link = document.createElement('link')
  link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap'
  link.rel = 'stylesheet'
  if (!document.querySelector('link[href*="Orbitron"]')) {
    document.head.appendChild(link)
  }
}

interface AnimatedNumberProps {
  value: number
  suffix: string
  decimals?: number
}

function AnimatedNumber({ value, suffix, decimals = 0 }: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const elementRef = useRef<HTMLSpanElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const isInView = useRef(false)

  const animateNumber = () => {
    // Reset to 0 and animate up
    setDisplayValue(0)
    gsap.to({ val: 0 }, {
      val: value,
      duration: 0.8,
      ease: "power3.out",
      onUpdate: function() {
        const current = this.targets()[0].val
        setDisplayValue(decimals > 0 ? parseFloat(current.toFixed(decimals)) : Math.floor(current))
      }
    })
  }

  useEffect(() => {
    if (!elementRef.current) return

    const trigger = ScrollTrigger.create({
      trigger: elementRef.current,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => {
        isInView.current = true
        animateNumber() // Initial animation
        
        // Repeat every 3 seconds
        intervalRef.current = setInterval(() => {
          if (isInView.current) {
            animateNumber()
          }
        }, 3000)
      },
      onLeave: () => {
        isInView.current = false
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
        }
      },
      onEnterBack: () => {
        isInView.current = true
        animateNumber()
        
        intervalRef.current = setInterval(() => {
          if (isInView.current) {
            animateNumber()
          }
        }, 3000)
      },
      onLeaveBack: () => {
        isInView.current = false
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
        }
      }
    })

    return () => {
      trigger.kill()
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [value, decimals])

  return (
    <span 
      ref={elementRef} 
      className="text-5xl md:text-6xl font-bold text-primary tabular-nums"
      style={{ 
        fontFamily: "'Orbitron', sans-serif",
        letterSpacing: '-0.02em',
        fontWeight: 700
      }}
    >
      {displayValue.toFixed(decimals)}{suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-card to-background" />
      <div className="absolute inset-0 bg-gradient-spotlight opacity-50" />
      
      {/* Ghost Cursor Animation - Gold color behind content */}
      <GhostCursor
        color="#F1C40F"
        brightness={1.2}
        edgeIntensity={0.2}
        trailLength={40}
        inertia={0.6}
        grainIntensity={0.03}
        bloomStrength={0.15}
        bloomRadius={1.2}
        bloomThreshold={0.02}
        fadeDelayMs={800}
        fadeDurationMs={1200}
        zIndex={1}
      />

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm card-hover-glow animate-slide-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <AnimatedNumber 
                  value={stat.number} 
                  suffix={stat.suffix} 
                  decimals={stat.decimals}
                />
              </div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
