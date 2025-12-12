import { Badge } from "@/components/ui/badge"

type Status = "pending" | "confirmed" | "in-progress" | "completed" | "cancelled" | "new"

interface StatusBadgeProps {
  status: Status
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const variants: Record<Status, { label: string; className: string }> = {
    pending: { label: "Pending", className: "bg-chart-4 text-white" },
    confirmed: { label: "Confirmed", className: "bg-chart-2 text-white" },
    "in-progress": { label: "In Progress", className: "bg-primary text-primary-foreground" },
    completed: { label: "Completed", className: "bg-chart-2 text-white" },
    cancelled: { label: "Cancelled", className: "bg-destructive text-destructive-foreground" },
    new: { label: "New", className: "bg-primary text-primary-foreground" },
  }

  const { label, className } = variants[status]

  return <Badge className={className}>{label}</Badge>
}
