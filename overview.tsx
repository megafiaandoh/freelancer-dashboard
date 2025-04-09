"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"

// Define the data outside the component
const data = [
  { name: "Jan", total: 1800 },
  { name: "Feb", total: 2200 },
  { name: "Mar", total: 2800 },
  { name: "Apr", total: 3200 },
  { name: "May", total: 4000 },
  { name: "Jun", total: 3800 },
  { name: "Jul", total: 4200 },
  { name: "Aug", total: 3600 },
  { name: "Sep", total: 4800 },
  { name: "Oct", total: 5200 },
  { name: "Nov", total: 4800 },
  { name: "Dec", total: 6000 },
]

export function Overview() {
  // Use dynamic import for recharts to avoid SSR issues
  const [ChartComponents, setChartComponents] = useState<any>(null)

  useEffect(() => {
    // Dynamically import recharts only on the client side
    const loadCharts = async () => {
      try {
        const { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } = await import("recharts")
        setChartComponents({ BarChart, Bar, XAxis, YAxis, ResponsiveContainer })
      } catch (error) {
        console.error("Failed to load chart components:", error)
      }
    }

    loadCharts()
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue Overview</CardTitle>
        <CardDescription>Your monthly revenue for the past year</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        {ChartComponents ? (
          <ChartComponents.ResponsiveContainer width="100%" height={350}>
            <ChartComponents.BarChart data={data}>
              <ChartComponents.XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <ChartComponents.YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value: number) => `$${value}`}
              />
              <ChartComponents.Bar dataKey="total" fill="#16a34a" radius={[4, 4, 0, 0]} className="fill-primary" />
            </ChartComponents.BarChart>
          </ChartComponents.ResponsiveContainer>
        ) : (
          <div className="flex h-[350px] w-full items-center justify-center bg-muted/10">
            <p className="text-sm text-muted-foreground">Loading chart data...</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
