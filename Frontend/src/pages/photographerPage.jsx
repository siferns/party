import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PhotographerEventDetailPage() {
    const navigate=useNavigate();
    const service = {
    title: "Memories Captured Photography",
    type: "Photography",
    price: "£400 for 3 hours",
    gallery: [
      "https://images.unsplash.com/photo-1519183071298-a2962be90b07?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524499982521-1ff24e40f2e9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497216643298-ec6c1a67f2f0?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Capture every special moment with professional photography services. From candid shots to posed portraits, we ensure your event memories are preserved in stunning, high-resolution images.",
    details: {
      inclusions: [
        { item: "Professional Photographer", quantity: "3 hours coverage" },
        { item: "High-Resolution Edited Photos", quantity: "Minimum 100 images" },
        { item: "Online Photo Gallery", quantity: "Private download link" },
        { item: "USB Photo Drive", quantity: "Digital archive" }
      ],
      specialNotes: "Special requests (e.g., group shots, candid style) welcomed. Travel within borough included.",
      setupTime: "Photographer arrives 15 minutes early to scout locations and coordinate shots."
    }
  };

  const [mainImage, setMainImage] = useState(service.gallery[0]);

  return (
    <div className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-6 py-4 border-b">
        <a href="/" className="text-2xl font-bold text-blue-800">Evoo</a>
        <div className="space-x-4 text-sm">
            <p onClick={()=>navigate('/#')} className="inline-block text-blue-700 hover:underline">Become a Provider</p>
            <p onClick={()=>navigate('/authorization')} className="inline-block text-blue-700 hover:underline">Login</p>
            <p onClick={()=>navigate('/authorization')} className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded-full">Sign Up</p>
        </div>
      </nav>
      <div className="max-w-5xl mx-auto px-6 py-10">
        <button className="text-blue-600 hover:underline mb-4">← Back to Dashboard</button>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column: Gallery + Reviews */}
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
                    <p className="font-semibold text-gray-800">Ella James</p>
                    <p className="text-yellow-500">★★★★★</p>
                  </div>
                  <p className="text-gray-700 text-sm">"Ella captured every moment beautifully. The online gallery was easy to use!"</p>
                  <p className="text-xs text-gray-500 mt-1">Birthday • April 2025</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow">
                  <div className="flex justify-between mb-2">
                    <p className="font-semibold text-gray-800">Michael Lee</p>
                    <p className="text-yellow-500">★★★★☆</p>
                  </div>
                  <p className="text-gray-700 text-sm">"Great quality photos, very professional and timely delivery."</p>
                  <p className="text-xs text-gray-500 mt-1">Wedding Reception • March 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Details + Price + Buttons */}
          <div>
            <h1 className="text-3xl font-bold text-blue-800 mb-2">{service.title}</h1>
            <p className="text-sm text-gray-500 mb-4">{service.type}</p>
            <p className="text-gray-700 mb-6">{service.description}</p>
            {/* Bold Blue Price */}
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
