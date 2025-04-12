"use client"

import React, { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts"

const COLORS = ["#C83C5D", "#F87992", "#FF9FA7", "#A5D8FF", "#FFC078", "#B197FC"]

export default function Analytics() {
  const [incomeData, setIncomeData] = useState<{ name: string; value: number }[]>([])
  const [expenseData, setExpenseData] = useState<{ name: string; value: number }[]>([])
  const [budgetData, setBudgetData] = useState<{ category: string; budget: number; actual: number }[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/analytics?from=2025-04-01&to=2025-04-30")
        const data = await res.json()

        setIncomeData(data.incomeByCategory) // e.g., [{ name: "Salary", value: 1000 }, ...]
        setExpenseData(data.expenses) // e.g., [{ name: "Groceries", value: 200 }, ...]
        setBudgetData(data.budgetVsActual)
      } catch (error) {
        console.error("Error fetching analytics:", error)
      }
    }

    fetchData()
  }, [])

  const renderPieChart = (title: string, data: { name: string; value: number }[]) => (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-600 mb-4">01 Apr 25 - 30 Apr 25 ⌄</p>

        <div className="w-full h-64">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 space-y-1 text-sm">
          {data.map((item, index) => (
            <p key={index} className="flex items-center gap-2">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              {item.name} – ₹{item.value}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="p-6 min-h-screen bg-[#f6fefd]">
      <a href="/" className="text-sm text-black">back home</a>
      <h1 className="text-3xl font-extrabold text-center my-6">Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Expense Pie */}
        <div className="col-span-1 space-y-6">
          {renderPieChart("Expenses", expenseData)}
          {renderPieChart("Income", incomeData)}
        </div>

        {/* Budget vs Actual Bar Graph */}
        <Card className="col-span-1 md:col-span-2">
          <CardContent className="pt-6 h-full">
            <h2 className="text-lg font-semibold">Budget vs Actual Spend</h2>
            <p className="text-sm text-gray-600 mb-4">01 Apr 25 - 30 Apr 25 ⌄</p>

            <div className="w-full h-96">
              <ResponsiveContainer>
                <BarChart data={budgetData}>
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="budget" fill="#83b3f9" />
                  <Bar dataKey="actual" fill="#f97b7b" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>

    
  )
}
