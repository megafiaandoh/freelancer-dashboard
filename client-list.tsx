import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const clients = [
  {
    id: "CL001",
    name: "Fashion Boutique",
    contact: "Sarah Johnson",
    email: "sarah@fashionboutique.com",
    projects: 2,
    status: "Active",
  },
  {
    id: "CL002",
    name: "Health Tech Startup",
    contact: "Michael Chen",
    email: "michael@healthtech.com",
    projects: 1,
    status: "Active",
  },
  {
    id: "CL003",
    name: "Organic Food Co.",
    contact: "Emma Wilson",
    email: "emma@organicfood.com",
    projects: 1,
    status: "Active",
  },
  {
    id: "CL004",
    name: "Local Restaurant",
    contact: "David Martinez",
    email: "david@localrestaurant.com",
    projects: 1,
    status: "Active",
  },
  {
    id: "CL005",
    name: "Fitness Studio",
    contact: "Jessica Brown",
    email: "jessica@fitnessstudio.com",
    projects: 1,
    status: "Active",
  },
  {
    id: "CL006",
    name: "Tech Innovations Inc.",
    contact: "Robert Taylor",
    email: "robert@techinnovations.com",
    projects: 0,
    status: "Inactive",
  },
]

export function ClientList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Client Directory</CardTitle>
        <CardDescription>Manage your client relationships</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {clients.map((client) => (
            <div key={client.id} className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${client.name.charAt(0)}`} />
                  <AvatarFallback>{client.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{client.name}</p>
                  <p className="text-sm text-muted-foreground">{client.contact}</p>
                  <p className="text-sm text-muted-foreground">{client.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm font-medium">{client.projects} Projects</p>
                </div>
                <Badge
                  variant="outline"
                  className={
                    client.status === "Active"
                      ? "bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-100 hover:text-gray-500"
                  }
                >
                  {client.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
