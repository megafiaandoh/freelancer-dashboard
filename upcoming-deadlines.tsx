import { CalendarIcon, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const deadlines = [
  {
    id: "DL001",
    project: "E-commerce Website Redesign",
    client: "Fashion Boutique",
    deadline: "April 20, 2025",
    daysLeft: 12,
  },
  {
    id: "DL002",
    project: "SEO Optimization",
    client: "Local Restaurant",
    deadline: "April 15, 2025",
    daysLeft: 7,
  },
  {
    id: "DL003",
    project: "Brand Identity Design",
    client: "Organic Food Co.",
    deadline: "April 30, 2025",
    daysLeft: 22,
  },
  {
    id: "DL004",
    project: "Social Media Campaign",
    client: "Fitness Studio",
    deadline: "May 5, 2025",
    daysLeft: 27,
  },
]

export function UpcomingDeadlines() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Deadlines</CardTitle>
        <CardDescription>Stay on top of your project timelines</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {deadlines.map((deadline) => (
            <div key={deadline.id} className="flex items-start gap-4 rounded-lg border p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50">
                <CalendarIcon className="h-5 w-5 text-green-700" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{deadline.project}</p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{deadline.daysLeft} days left</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Client: {deadline.client}</p>
                <p className="text-sm font-medium">Due: {deadline.deadline}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
