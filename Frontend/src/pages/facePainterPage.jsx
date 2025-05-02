import React, { useState } from "react";

export default function FacePainterEventDetailPage() {
  const service = {
    title: "Magic Face Paints",
    type: "Entertainment",
    price: "£250 for 2 hours",
    gallery: [
      "https://images.unsplash.com/photo-1582719478173-39b63f34fd39?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503061426453-b013b2dd99c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556324306-d9009a212a58?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Enchant young guests with vibrant, professional face painting. From superheroes to animals, each design is safe, hygienic, and full of color.",
    details: {
      inclusions: [
        { item: "Face Painter Artist", quantity: "2 hours" },
        { item: "Hypoallergenic Paints", quantity: "All faces" },
        { item: "Up to 30 Designs", quantity: "Custom themes" },
        { item: "Cleanup Service", quantity: "Wipes and removal supplies" }
      ],
      specialNotes: "Please inform us of any allergies. Designs can match party themes.",
      setupTime: "Artist arrives 15 minutes early with full kit."
    }
  };

  const [mainImage, setMainImage] = useState(service.gallery[0]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className="flex items-center justify-between px-6 py-4 border-b bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-blue-800">Evoo</h1>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* Left Column: Gallery + Reviews */}
          <div className="flex flex-col gap-6">
            {/* Main Image */}
            <img
              src={mainImage}
              alt={service.title}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {service.gallery.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Face Paint ${idx + 1}`}
                  className="w-full h-24 object-cover rounded-lg cursor-pointer border-2 transform transition-transform duration-300 hover:scale-105"
                  style={{ borderColor: mainImage === src ? '#2563eb' : 'transparent' }}
                  onClick={() => setMainImage(src)}
                />
              ))}
            </div>
            {/* Reviews */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-blue-800 mb-4">Customer Reviews</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg shadow">
                  <div className="flex justify-between mb-2">
                    <p className="font-semibold text-gray-800">Lucy Brown</p>
                    <p className="text-yellow-500">★★★★★</p>
                  </div>
                  <p className="text-gray-700 text-sm">"Kids loved their face paint! Very creative and gentle with the paint."</p>
                  <p className="text-xs text-gray-500 mt-1">Birthday Party • April 2025</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow">
                  <div className="flex justify-between mb-2">
                    <p className="font-semibold text-gray-800">Jordan Smith</p>
                    <p className="text-yellow-500">★★★★☆</p>
                  </div>
                  <p className="text-gray-700 text-sm">"Fantastic attention to detail and very professional."</p>
                  <p className="text-xs text-gray-500 mt-1">Community Fair • March 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Details + Pricing + Buttons */}
          <div>
            <h1 className="text-3xl font-bold text-blue-800 mb-2">{service.title}</h1>
            {/* Small grey type and price */}
            <p className="text-sm text-gray-500 mb-4">{service.type} • {service.price}</p>
            {/* Description */}
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed">{service.description}</p>
            </div>
            {/* Bold blue price */}
            <p className="text-2xl font-semibold text-blue-700 mb-6">{service.price}</p>
            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <a
                href="/checkout"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700"
              >
                Send Order Request
              </a>
              <button className="text-blue-600 border border-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50">
                Add to Event
              </button>
            </div>
            {/* Inclusions and notes */}
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
