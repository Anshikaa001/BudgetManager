import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Calendar, Bell, User, X} from 'lucide-react';
import { Link } from "react-router-dom";


function Dashboard() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // 👈 sidebar toggle

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white relative">
      {/* Sidebar */}
      {isSidebarOpen && (
  <div className="absolute top-0 left-0 w-64 h-full bg-white shadow-md z-50 p-6">
    {/* Close button */}
    <button className="absolute top-4 right-4" onClick={toggleSidebar}>
      <X className="w-5 h-5 text-gray-700 hover:text-red-500" />
    </button>

    <h2 className="text-2xl font-bold mb-6">Menu</h2>
    <ul className="space-y-4 text-gray-700">
  <li className="hover:text-blue-600 cursor-pointer">
    <Link to="/budgeting" onClick={toggleSidebar}>Budgeting</Link>
  </li>
  <li className="hover:text-blue-600 cursor-pointer">
    <Link to="/transactions" onClick={toggleSidebar}>Transactions</Link>
  </li>
  <li className="hover:text-blue-600 cursor-pointer">
    <Link to="/analytics" onClick={toggleSidebar}>Analytics</Link>
  </li>
  <li className="hover:text-blue-600 cursor-pointer">
    <Link to="/goals" onClick={toggleSidebar}>Save goals</Link>
  </li>
</ul>

  </div>
)}


      {/* Header */}
      <header className="p-4 flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <button className="p-2" onClick={toggleSidebar}>
            <Menu className="w-6 h-6" />
          </button>
          <button className="p-2">
            <Calendar className="w-6 h-6" />
          </button>
        </div>
        <div className="flex gap-4">
          <button className="p-2">
            <Bell className="w-6 h-6" />
          </button>
          <button className="p-2">
            <User className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-8">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-800">
            "Invest in assets, not just aesthetics."
          </h1>
          <p className="text-gray-600 mt-2">"Track. Save. Succeed."</p>
        </div>

        {/* Add Expense Button */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => navigate('/add')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add expense
          </button>
        </div>

        {/* Budget Card */}
        <div className="bg-[#005B7F] text-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl mb-4">Total budget</h2>
          <div className="text-4xl font-bold mb-6">Rs 10,000</div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-sm opacity-80">Left to spend</p>
              <p className="text-lg font-semibold">Rs 8,500</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-sm opacity-80">Expense</p>
              <p className="text-lg font-semibold">Rs 1,500</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-sm opacity-80">Income</p>
              <p className="text-lg font-semibold">Rs 10,000</p>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
<div className="mt-12 bg-white rounded-xl shadow-md p-6">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Transactions</h2>
  <div className="overflow-x-auto">
    <table className="min-w-full table-auto">
     
      <thead>
        <tr className="bg-blue-100 text-gray-700">
          <th className="px-4 py-2 text-left">Date</th>
          <th className="px-4 py-2 text-left">Description</th>
          <th className="px-4 py-2 text-left">Amount</th>
          <th className="px-4 py-2 text-left">Category</th>
        </tr>
      </thead>
     
    </table>
  </div>
</div>

      </main>
    </div>

    
  );
}

export default Dashboard;
