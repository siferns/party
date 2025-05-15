// src/pages/EmptyDashboard.jsx
// src/pages/EmptyDashboard.jsx
// src/pages/EmptyDashboard.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../componenets/ui/card";

export default function EmptyDashboard() {
  const navigate = useNavigate();
  const [events] = useState([
    {
      date: "12-05-2025",
      name: "My Upcoming Event",
      status: "Not Started",
      budget: 1000,
      ordered: [],
      pending: [
        {
          title: "Tandoori Delights",
          type: "Catering",
          price: "£300",
          navigateTo:"/listing/tandooriDelights"
        }
      ]
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="flex items-center justify-between px-6 py-4 border-b">
        <a href="/" className="text-2xl font-bold text-blue-800">Evoo</a>
        <div className="space-x-4 text-sm">
            <p onClick={()=>navigate('/#')} className="inline-block text-blue-700 hover:underline">Become a Provider</p>
            <p onClick={()=>navigate('/authorization')} className="inline-block text-blue-700 hover:underline">Login</p>
            <p onClick={()=>navigate('/authorization')} className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded-full">Sign Up</p>
        </div>
      </nav>

      {/* Body */}
      <div className="px-6 py-10 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">Your Events</h1>

        <div className="space-y-8">
          {events.map((event, idx) => {
            const usedPercent = 30;

            return (
              <Card key={idx} className="shadow-sm">
                <CardContent className="p-6">
                  {/* Event header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h2 className="text-xl font-semibold text-blue-700">
                        📅 {event.name}
                      </h2>
                      <p className="text-sm text-gray-500">{event.date}</p>
                    </div>
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-800">
                      {event.status}
                    </span>
                  </div>

                  {/* Budget bar */}
                  <div className="mb-4">
                    <p>
                      Budget:{" "}
                      <span className="font-semibold text-blue-600">
                        £{event.budget}
                      </span>
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${usedPercent}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      £300 of £{event.budget} used ({usedPercent}%)
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Pending Services (moved to left) */}
                    <div>
                      <h3 className="font-semibold text-blue-800 mb-2">
                        ⏳ Pending Services
                      </h3>
                      {event.pending.length > 0 ? (
                        <ul className="space-y-2">
                          {event.pending.map((item, i) => (
                            <li
                              key={i}
                              className="flex justify-between items-center border p-3 rounded"
                              onClick={()=>{navigate(`${item.navigateTo}`)}}
                            >
                              <div >
                                <p className="font-medium text-gray-700">
                                  {item.title}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {item.type}
                                </p>
                              </div>
                              <p className="font-semibold text-blue-700">
                                {item.price}
                              </p>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-gray-500">Nothing pending.</p>
                      )}
                    </div>

                    {/* Ordered Services (moved to right) */}
                    <div>
                      <h3 className="font-semibold text-blue-800 mb-2">
                        ✔️ Ordered Services
                      </h3>
                      <p className="text-sm text-gray-500">
                        No services booked yet.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
