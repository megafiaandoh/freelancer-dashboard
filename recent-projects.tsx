import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const projects = [
  {
    id: "PRJ001",
    name: "E-commerce Website Redesign",
    client: "Fashion Boutique",
    status: "In Progress",
    deadline: "April 20, 2025",
    budget: "$8,500",
  },
  {
    id: "PRJ002",
    name: "Mobile App Development",
    client: "Health Tech Startup",
    status: "In Progress",
    deadline: "May 15, 2025",
    budget: "$12,000",
  },
  {
    id: "PRJ003",
    name: "Brand Identity Design",
    client: "Organic Food Co.",
    status: "In Progress",
    deadline: "April 30, 2025",
    budget: "$5,200",
  },
  {
    id: "PRJ004",
    name: "SEO Optimization",
    client: "Local Restaurant",
    status: "In Progress",
    deadline: "April 15, 2025",
    budget: "$2,800",
  },
  {
    id: "PRJ005",
    name: "Social Media Campaign",
    client: "Fitness Studio",
    status: "In Progress",
    deadline: "May 5, 2025",
    budget: "$3,500",
  },
]

export function RecentProjects() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Projects</CardTitle>
        <CardDescription>You have {projects.length} active projects</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Deadline</TableHead>
              <TableHead className="text-right">Budget</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell className="font-medium">{project.name}</TableCell>
                <TableCell>{project.client}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                  >
                    {project.status}
                  </Badge>
                </TableCell>
                <TableCell>{project.deadline}</TableCell>
                <TableCell className="text-right">{project.budget}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
