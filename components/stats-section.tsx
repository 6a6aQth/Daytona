"use client"

import dynamic from 'next/dynamic'

// Dynamically import Shuffle to avoid SSR issues with GSAP
const Shuffle = dynamic(() => import('./shuffle'), { ssr: false })

const stats = [
  { number: "20+", label: "Years Experience" },
  { number: "3.8k", label: "Services Completed" },
  { number: "30+", label: "Expert Technicians" },
  { number: "100%", label: "Customer Satisfaction" },
]

export function StatsSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card via-card to-background" />
      <div className="absolute inset-0 bg-gradient-spotlight opacity-50" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm card-hover-glow"
            >
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <Shuffle
                  text={stat.number}
                  tag="span"
                  className="text-5xl md:text-6xl font-bold text-primary stat-number"
                  shuffleDirection="right"
                  duration={0.5}
                  animationMode="evenodd"
                  shuffleTimes={2}
                  ease="power3.out"
                  stagger={0.04}
                  threshold={0.3}
                  triggerOnce={true}
                  triggerOnHover={true}
                  respectReducedMotion={true}
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

