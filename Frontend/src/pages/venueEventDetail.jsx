import React, { useState } from "react";

export default function VenueEventDetailPage() {
  const service = {
    title: "The Grand Hall",
    type: "Venue",
    price: "£1200 for 8 hours",
    gallery: [
      "https://images.unsplash.com/photo-1560185127-6c9c481bfb33?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574286926768-27f2f79d48e8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582719478173-39b63f34fd39?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80"
    ],
    description: "A versatile event space accommodating up to 200 guests, perfect for weddings, receptions, corporate events, and private parties. Elegant décor and modern amenities create an unforgettable atmosphere.",
    details: {
      inclusions: [
        { item: "Venue Rental", quantity: "8 hours" },
        { item: "Tables & Chairs", quantity: "200 seats" },
        { item: "Basic AV System", quantity: "Projector, microphone" },
        { item: "On-site Coordinator", quantity: "Full event support" }
      ],
      specialNotes: "Catering and entertainment can be arranged through our preferred partner list.",
      setupTime: "Access available 2 hours prior for setup and decoration."
    }
  };

  const [mainImage, setMainImage] = useState(service.gallery[0]);

  return (
    <div className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-6 py-4 border-b bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-blue-800">Evoo</h1>
      </nav>
      <div className="max-w-5xl mx-auto px-6 py-10">
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col gap-6">
            <img
              src={mainImage}
              alt={service.title}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <div className="grid grid-cols-4 gap-2">
              {service.gallery.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`${service.title} ${idx + 1}`}
                  className="w-full h-24 object-cover rounded-lg cursor-pointer border-2 transform transition-transform duration-300 hover:scale-105"
                  style={{ borderColor: mainImage === src ? '#2563eb' : 'transparent' }}
                  onClick={() => setMainImage(src)}
                />
              ))}
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-blue-800 mb-4">Customer Reviews</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg shadow">
                  <div className="flex justify-between mb-2">
                    <p className="font-semibold text-gray-800">Helen Carter</p>
                    <p className="text-yellow-500">★★★★★</p>
                  </div>
                  <p className="text-gray-700 text-sm">"Beautiful venue, perfect for our wedding reception! Highly recommend."</p>
                  <p className="text-xs text-gray-500 mt-1">Wedding • May 2025</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow">
                  <div className="flex justify-between mb-2">
                    <p className="font-semibold text-gray-800">Tom Walker</p>
                    <p className="text-yellow-500">★★★★☆</p>
                  </div>
                  <p className="text-gray-700 text-sm">"Spacious and well-maintained. Great support from the coordinator."</p>
                  <p className="text-xs text-gray-500 mt-1">Corporate Event • March 2025</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-blue-800 mb-2">{service.title}</h1>
            
            <p className="text-gray-700 mb-6">{service.description}</p>
            <p className="text-2xl font-semibold text-blue-700 mb-6">{service.price}</p>
            <div className="flex gap-4 mb-8">
              <a href="/checkout" className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700">Send Order Request</a>
              <button className="text-blue-600 border border-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50">Add to Event</button>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-blue-800 mb-2">What's Included</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {service.details.inclusions.map((inc, idx) => (
                    <li key={idx}>{inc.item} — {inc.quantity}</li>
                  ))}
                </ul>
              </div>
              <p className="text-gray-600"><strong>📝 Notes:</strong> {service.details.specialNotes}</p>
              <p className="text-gray-600"><strong>🕒 Setup:</strong> {service.details.setupTime}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
