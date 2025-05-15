import React from "react";

export default function OrderConfirmationPage() {
  // Mock order summary data for Tandoori Delights
  const order = {
    providerName: "Tandoori Delights",
    date: "2025-05-12",
    guests: 20,
    totalPrice: "£300",
    packageDetails: {
      starters: [
        { item: "Vegetable Samosas", quantity: "40 pcs" },
        { item: "Paneer Tikka Skewers", quantity: "20 pcs" }
      ],
      mains: [
        { item: "Butter Chicken", quantity: "1 tray" },
        { item: "Chana Masala", quantity: "1 tray" },
        { item: "Steamed Basmati Rice", quantity: "1 tray" },
        { item: "Naan Bread", quantity: "40 pcs" }
      ],
      desserts: [
        { item: "Gulab Jamun", quantity: "40 pcs" },
        { item: "Mango Kulfi", quantity: "20 sticks" }
      ]
    }
  };

  return (<>
        <nav className="flex items-center justify-between w-full  px-6 py-4 border-b bg-white shadow-sm mb-6">
        <a href="/" className="text-2xl font-bold text-blue-800">Evoo</a>
        <div className="space-x-4 text-sm">
          <span className="text-gray-700">Hi, Priya</span>
          <a href="/myDashboard" className="text-blue-700 hover:underline">Dashboard</a>
          <button className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full">Logout</button>
        </div>
      </nav>
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left: Confirmation Message */}
        <div className="p-8 bg-blue-50 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-blue-800 mb-4">Order Confirmed!</h1>
          <p className="text-gray-700 mb-6">
            Thank you for your order with <strong>{order.providerName}</strong>.
            Your party is booked for <strong>{order.guests} guests</strong> on <strong>{order.date}</strong>.
          </p>
          <p className="text-gray-700">We’re processing your request and will send you a confirmation email shortly.</p>
        </div>

        {/* Right: Order Summary */}
        <div className="p-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Order Summary</h2>
          <p className="text-gray-600 mb-2">Provider: <strong>{order.providerName}</strong></p>
          <p className="text-gray-600 mb-2">Date: <strong>{order.date}</strong></p>
          <p className="text-gray-600 mb-4">Guests: <strong>{order.guests}</strong></p>
          <h3 className="font-semibold text-gray-800 mb-2">Package Includes:</h3>
          <div className="space-y-3 mb-4">
            <div>
              <p className="text-gray-700 font-medium">Starters:</p>
              <ul className="list-disc list-inside text-gray-600">
                {order.packageDetails.starters.map((s, i) => (
                    <li key={i}>{s.item} — {s.quantity}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Main Course:</p>
              <ul className="list-disc list-inside text-gray-600">
                {order.packageDetails.mains.map((m, i) => (
                    <li key={i}>{m.item} — {m.quantity}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Desserts:</p>
              <ul className="list-disc list-inside text-gray-600">
                {order.packageDetails.desserts.map((d, i) => (
                    <li key={i}>{d.item} — {d.quantity}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-lg font-semibold text-blue-800">Total Paid: {order.totalPrice}</p>
          <button
            onClick={() => window.location.href = "/myDashboard"}
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-semibold"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
