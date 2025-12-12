import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Gauge, Fuel, ArrowRight } from "lucide-react"

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
  const conditionColor = {
    Excellent: "bg-primary text-primary-foreground",
    Good: "bg-chart-2 text-white",
    Fair: "bg-chart-4 text-white",
  }

  return (
    <Card className="group overflow-hidden hover:border-primary transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <Badge className={`absolute top-3 right-3 ${conditionColor[condition]}`}>{condition}</Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-foreground mb-1">{name}</h3>
        <p className="text-2xl font-bold text-primary mb-4">{price}</p>

        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar size={14} />
            <span>{year}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Gauge size={14} />
            <span>{mileage}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Fuel size={14} />
            <span>{fuelType}</span>
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors bg-transparent"
          asChild
        >
          <Link href={`/vehicles/${id}`}>
            View Details
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
