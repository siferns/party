import React, { useState } from "react";

export default function MyDashboard() {
  const [events, setEvents] = useState([
    {
      date: "2025-05-12",
      name: "25th Anniversary",
      status: "Partially Booked",
      budget: 1500,
      ordered: [
        { title: "Tandoori Delights", type: "Catering", price: "£300", status: "Confirmed" },
        { title: "Venue Vibes", type: "Venue", price: "£1", status: "Pending" }
      ],
      pending: [
        { title: "DJ Sonic Boom", type: "DJ", price: "£500" },
        { title: "Moments Captured", type: "Photography", price: "£250" }
      ]
    },
    {
      date: "2025-02-12",
      name: "Son's Birthday",
      status: "Confirmed",
      budget: 1000,
      ordered: [
        { title: "Sushi Sensation", type: "Catering", price: "£400", status: "Confirmed" },
        { title: "Creative Face Paints", type: "Entertainment", price: "£150", status: "Confirmed" }
      ],
      pending: []
    }
  ]);
  const [editingBudgetIdx, setEditingBudgetIdx] = useState(null);
  const [budgetInput, setBudgetInput] = useState("");

  const parsePrice = (price) => Number(price.replace("$", ""));

  const handleRemove = (eventIndex, category, itemIndex) => {
    setEvents((prev) => {
      const updated = [...prev];
      updated[eventIndex][category].splice(itemIndex, 1);
      return updated;
    });
  };

  const saveBudget = (idx) => {
    setEvents((prev) => {
      const updated = [...prev];
      updated[idx].budget = Number(budgetInput);
      return updated;
    });
    setEditingBudgetIdx(null);
  };

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4 border-b bg-white shadow-sm sticky top-0 z-10">
        <a href="/" className="text-2xl font-bold text-blue-800">Evoo</a>
        <div className="space-x-4 text-sm">
          <span className="text-gray-700">Hi, Priya</span>
          <a href="/dashboard" className="text-blue-700 hover:underline">Dashboard</a>
          <button className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full">Logout</button>
        </div>
      </nav>
      <div className="min-h-screen bg-white px-6 py-10 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">My Events</h1>
        <div className="space-y-8">
          {events.map((event, idx) => {
            const orderedTotal = event.ordered.reduce((acc, item) => acc + parsePrice(item.price), 0);
            const pendingTotal = event.pending.reduce((acc, item) => acc + parsePrice(item.price), 0);
            const combinedTotal = orderedTotal + pendingTotal;
            const usedPercent = Math.min((combinedTotal / event.budget) * 100, 100);

            return (
              <div key={idx} className="border rounded-xl p-6 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h2
                      className="text-xl font-semibold text-blue-700 hover:underline cursor-pointer"
                      onClick={() => alert(`View details for ${event.name}`)}
                    >
                      📅 {event.name}
                    </h2>
                    <p className="text-sm text-gray-500">{event.date}</p>
                  </div>
                  <span className={`text-sm font-medium px-3 py-1 rounded-full mt-2 md:mt-0 ${
                    event.status === "Confirmed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {event.status}
                  </span>
                </div>
                {/* Budget Bar */}
                <div className="mb-4">
                  <div className="flex items-center gap-2">
                    {editingBudgetIdx === idx ? (
                      <>
                        <input
                          type="number"
                          className="border rounded px-2 py-1 w-24"
                          value={budgetInput}
                          onChange={(e) => setBudgetInput(e.target.value)}
                          onBlur={() => saveBudget(idx)}
                          autoFocus
                        />
                        <button
                          onClick={() => saveBudget(idx)}
                          className="text-sm text-blue-600 hover:underline"
                        >
                          Save
                        </button>
                      </>
                    ) : (
                      <p>
                        Budget: <span className="font-semibold text-blue-600">£{event.budget}</span>
                        <button
                          onClick={() => {
                            setEditingBudgetIdx(idx);
                            setBudgetInput(event.budget);
                          }}
                          className="ml-2 text-gray-500 hover:text-gray-700"
                        >
                          ✏️
                        </button>
                      </p>
                    )}
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${usedPercent}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    ${combinedTotal} of £{event.budget} used ({usedPercent.toFixed(0)}%)
                  </p>
                </div>
                {/* Services */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-2">✔️ Ordered Services</h3>
                    {event.ordered.length > 0 ? (
                      <ul className="space-y-2 mb-2">
                        {event.ordered.map((item, i) => (
                          <li
                            key={i}
                            className="flex justify-between items-center bg-blue-50 p-3 rounded cursor-pointer hover:bg-blue-100"
                            onClick={() => alert(`View ${item.title} details`)}
                          >
                            <div>
                              <p className="font-medium text-gray-700">{item.title}</p>
                              <p className="text-sm text-gray-500">{item.type}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-blue-700">{item.price}</p>
                              <p className={`text-sm ${item.status === "Confirmed" ? `text-green-600` : `text-yellow-600`}`}>{item.status}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : <p className="text-sm text-gray-500">No services booked yet.</p>}
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-2">⏳ Pending Services</h3>
                    {event.pending.length > 0 ? (
                      <ul className="space-y-2 mb-2">
                        {event.pending.map((item, i) => (
                          <li key={i} className="flex justify-between items-center border p-3 rounded">
                            <div>
                              <p className="font-medium text-gray-700">{item.title}</p>
                              <p className="text-sm text-gray-500">{item.type}</p>
                            </div>
                            <div className="text-right flex flex-col items-end">
                              <p className="text-blue-700 font-semibold">{item.price}</p>
                              <button
                                onClick={() => handleRemove(idx, 'pending', i)}
                                className="text-xs text-red-500 hover:underline mt-1"
                              >
                                🗑️ Remove
                              </button>
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : <p className="text-sm text-gray-500">Nothing pending.</p>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
