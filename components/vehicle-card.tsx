import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Gauge, Fuel, ArrowRight, Sparkles } from "lucide-react"

interface VehicleCardProps {
  id: string
  name: string
  year: number
  price: string
  mileage: string
  fuelType: string
  image: string
  condition: "Excellent" | "Good" | "Fair"
}

export function VehicleCard({ id, name, year, price, mileage, fuelType, image, condition }: VehicleCardProps) {
  const conditionConfig = {
    Excellent: {
      bg: "bg-primary text-primary-foreground",
      icon: Sparkles,
    },
    Good: {
      bg: "bg-emerald-500/90 text-white",
      icon: null,
    },
    Fair: {
      bg: "bg-amber-500/90 text-white",
      icon: null,
    },
  }

  const config = conditionConfig[condition]

  return (
    <Card className="group overflow-hidden border-border/50 bg-card hover:border-primary/50 transition-all duration-500 card-hover-lift">
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
        
        {/* Gold accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Condition Badge */}
        <Badge className={`absolute top-4 right-4 ${config.bg} flex items-center gap-1 px-3 py-1`}>
          {config.icon && <config.icon size={12} />}
          {condition}
        </Badge>
        
        {/* Year Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-background/80 backdrop-blur-sm text-foreground border border-border/50">
            {year}
          </span>
        </div>
      </div>

      <CardContent className="p-5">
        {/* Vehicle Name */}
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
          {name}
        </h3>
        
        {/* Price */}
        <p className="text-2xl font-bold text-primary mb-5">{price}</p>

        {/* Specs Grid */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          <div className="flex flex-col items-center p-2.5 rounded-lg bg-muted/50 border border-border/50">
            <Calendar size={16} className="text-primary mb-1" />
            <span className="text-xs text-muted-foreground">{year}</span>
          </div>
          <div className="flex flex-col items-center p-2.5 rounded-lg bg-muted/50 border border-border/50">
            <Gauge size={16} className="text-primary mb-1" />
            <span className="text-xs text-muted-foreground">{mileage}</span>
          </div>
          <div className="flex flex-col items-center p-2.5 rounded-lg bg-muted/50 border border-border/50">
            <Fuel size={16} className="text-primary mb-1" />
            <span className="text-xs text-muted-foreground">{fuelType}</span>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          variant="outline"
          className="w-full border-border group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 bg-transparent"
          asChild
        >
          <Link href={`/vehicles/${id}`}>
            View Details
            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
