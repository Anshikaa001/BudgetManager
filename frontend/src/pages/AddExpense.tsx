import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { format } from 'date-fns';

function AddExpense() {
  const navigate = useNavigate();
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [recurrence, setRecurrence] = useState('once');
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => navigate('/')}
          className="text-gray-800 hover:text-gray-600"
        >
          Back Home
        </button>
        <h1 className="text-2xl font-bold text-center text-gray-800">Add expense/Income</h1>
        <div className="w-20"></div> {/* Spacer for alignment */}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="space-y-6">
          {/* Date */}
          <div className="relative">
            <label className="block text-gray-700 text-lg font-semibold mb-2">Date</label>
            <div className="relative">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg pr-10"
              />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* Recurrence */}
          <div>
            <label className="block text-gray-700 text-lg font-semibold mb-2">Recurrence</label>
            <select
              value={recurrence}
              onChange={(e) => setRecurrence(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white"
            >
              <option value="once">Once</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>

          {/* Amount */}
          <div>
            <label className="block text-gray-700 text-lg font-semibold mb-2">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Name */}
          <div>
            <label className="block text-gray-700 text-lg font-semibold mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700 text-lg font-semibold mb-2">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white"
            >
              <option value="">Select category</option>
              <option value="food">Food</option>
              <option value="transport">Transport</option>
              <option value="utilities">Utilities</option>
              <option value="entertainment">Entertainment</option>
              <option value="shopping">Shopping</option>
              <option value="others">Others</option>
            </select>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg"
          >
            SAVE
          </button>
        </div>
      </form>

      
    </div>
  );
}

export default AddExpense;