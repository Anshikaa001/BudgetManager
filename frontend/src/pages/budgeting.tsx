import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

const budgetsData = [
  {
    name: "Shopping",
    amount: 2300,
    spent: 150,
    items: 1,
    icon: "🛍️",
  },
  {
    name: "Home Decor",
    amount: 3800,
    spent: 3300,
    items: 3,
    icon: "🛋️",
  },
  {
    name: "Garden",
    amount: 1500,
    spent: 160,
    items: 2,
    icon: "🌴",
  },
  {
    name: "Car",
    amount: 2500,
    spent: 120,
    items: 1,
    icon: "🚗",
  },
  {
    name: "Youtube",
    amount: 5000,
    spent: 1100,
    items: 2,
    icon: "📺",
  },
];

export default function BudgetPage() {
  const [isOpen, setIsOpen] = useState(false); // ✅ Now it's inside the component
  const [budgets, setBudgets] = useState(budgetsData);
  const [newBudget, setNewBudget] = useState({ name: "", amount: "" });
  const [editingIndex, setEditingIndex] = useState<number | null>(null);


  const handleSave = () => {
    if (editingIndex !== null) {
      const updated = [...budgets];
      updated[editingIndex] = {
        ...updated[editingIndex],
        name: newBudget.name,
        amount: parseFloat(newBudget.amount),
      };
      setBudgets(updated);
    } else {
      setBudgets([
        ...budgets,
        {
          name: newBudget.name,
          amount: parseFloat(newBudget.amount),
          spent: 0,
          items: 0,
          icon: "📊",
        },
      ]);
    }
    setNewBudget({ name: "", amount: "" });
    setEditingIndex(null);
  };

  const openModalToEdit = (index: number) => {
    setEditingIndex(index);
    const { name, amount } = budgets[index];
    setNewBudget({ name, amount: amount.toString() });
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Budgets</h1>
        <Button onClick={() => (window.location.href = "/")}>Back Home</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        <Dialog>
        <DialogTrigger onClick={() => setIsOpen(true)}>
  <Card className="flex justify-center items-center h-32 cursor-pointer hover:bg-muted">
    <p className="text-lg font-semibold">+ Create New Budget</p>
  </Card>
</DialogTrigger>


  {isOpen && (
    <DialogContent>
      <h2 className="text-lg font-semibold mb-2">
        {editingIndex !== null ? "Update Budget" : "Create Budget"}
      </h2>
      <Input
        placeholder="Budget Name"
        className="mb-2"
        value={newBudget.name}
        onChange={(e) =>
          setNewBudget({ ...newBudget, name: e.target.value })
        }
      />
      <Input
        placeholder="Total Amount"
        type="number"
        className="mb-4"
        value={newBudget.amount}
        onChange={(e) =>
          setNewBudget({ ...newBudget, amount: e.target.value })
        }
      />
      <Button onClick={() => { handleSave(); setIsOpen(false); }} className="w-full">
        Save
      </Button>
    </DialogContent>
  )}
</Dialog>


        {budgets.map((budget, index) => {
          const remaining = budget.amount - budget.spent;
          const progress = (budget.spent / budget.amount) * 100;
          return (
            <Card
              key={index}
              className="p-4 cursor-pointer hover:shadow-lg"
              onClick={() => openModalToEdit(index)}
            >
              <CardContent>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{budget.icon}</span>
                  <div>
                    <h3 className="font-semibold text-lg">{budget.name}</h3>
                    <p className="text-sm text-muted-foreground">{budget.items} Item</p>
                  </div>
                </div>
                <div className="flex justify-between text-sm mb-1">
                  <span>{budget.spent} Spend</span>
                  <span>{remaining} Remaining</span>
                </div>
                <Progress value={progress} className="h-2" />
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
