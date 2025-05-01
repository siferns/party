import React, { useState } from "react";

export default function CheckoutPage() {
  // Mock order summary
  const order = {
    title: "Tandoori Delights",
    price: "$300.00",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
    summary: [
      { label: "Package", value: "Tandoori Delights" },
      { label: "Guests", value: "20" },
      { label: "Event Date", value: "2025-05-12" },
      { label: "Event Time", value: "18:00" },
      { label: "Delivery Address", value: "123 Main St, London" },
      { label: "Subtotal", value: "$300.00" },
      { label: "Service Fee", value: "$15.00" },
      { label: "Total", value: "$315.00" }
    ]
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvv: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Processing payment for ${form.name} at ${form.address}`);
    // TODO: integrate auth & payment APIs
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden grid md:grid-cols-2">
        {/* Left: Order Summary */}
        <div className="p-8 border-r">
          <img src={order.image} alt={order.title} className="w-full h-40 object-cover rounded-lg mb-6" />
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
          <ul className="space-y-4">
            {order.summary.map((item, idx) => (
              <li key={idx} className="flex justify-between">
                <span className="text-gray-700">{item.label}</span>
                <span className="font-semibold text-gray-900">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Right: Payment, Sign Up & Event Details */}
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Details</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Create Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Delivery Address</label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">Payment Information</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={form.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9012 3456"
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Expiry (MM/YY)</label>
                <input
                  type="text"
                  name="expiry"
                  value={form.expiry}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={form.cvv}
                  onChange={handleChange}
                  placeholder="123"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              Confirm & Pay
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
