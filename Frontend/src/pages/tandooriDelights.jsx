import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TandooriDelight() {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const [eventName, setEventName] = useState("");
  const [eventBudget, setEventBudget] = useState("");

  const listing = {
    title: "Tandoori Delights",
    type: "Catering",
    description:
      "Authentic Indian cuisine with customizable packages for parties of 10 to 100 guests. Includes starters, mains, and desserts with vegetarian and non-vegetarian options.",
    price: "£300 for 20 guests",
    gallery: [
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=400&q=80"
    ],
    details: {
      starters: [
        { item: "Vegetable Samosas", quantity: "40 pieces" },
        { item: "Paneer Tikka Skewers", quantity: "20 pieces" }
      ],
      mains: [
        { item: "Butter Chicken", quantity: "1 tray" },
        { item: "Chana Masala (Chickpea Curry)", quantity: "1 tray" },
        { item: "Steamed Basmati Rice", quantity: "1 tray" },
        { item: "Naan Bread", quantity: "40 pieces" }
      ],
      desserts: [
        { item: "Gulab Jamun", quantity: "40 pieces" },
        { item: "Mango Kulfi", quantity: "20 sticks" }
      ],
      allergies: "Contains dairy, nuts, and gluten.",
      preparation:
        "Food is delivered hot. Reheat in oven at 180°C for 10 minutes if needed."
    }
  };

  const [mainImage, setMainImage] = useState(listing.gallery[0]);

  const openModal = () => {
    setEventName("");
    setEventBudget("");
    setModalOpen(true);
  };

  const handleContinue = () => {
    setModalOpen(false);
    // TODO: persist eventName & eventBudget if necessary
    navigate("/emptyDashboard");
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Blur background when modal open */}
      <div className={`transition-filter ${isModalOpen ? "filter blur-sm" : ""}`}>
        {/* Header */}
        <nav className="flex items-center justify-between px-6 py-4 border-b">
          <a href="/" className="text-2xl font-bold text-blue-800">
            Evoo
          </a>
          <div className="space-x-4 text-sm">
            <p
              onClick={() => navigate("/#")}
              className="inline-block text-blue-700 hover:underline cursor-pointer"
            >
              Become a Provider
            </p>
            <p
              onClick={() => navigate("/authorization")}
              className="inline-block text-blue-700 hover:underline cursor-pointer"
            >
              Login
            </p>
            <p
              onClick={() => navigate("/authorization")}
              className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded-full cursor-pointer"
            >
              Sign Up
            </p>
          </div>
        </nav>

        {/* Content */}
        <div className="px-6 py-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Column */}
            <div className="flex flex-col gap-6">
              <img
                src={mainImage}
                alt={listing.title}
                className="w-full h-96 object-cover rounded-2xl shadow-md"
                onError={e =>
                  (e.currentTarget.src =
                    "https://via.placeholder.com/1200x480?text=No+Image")
                }
              />
              <div className="grid grid-cols-4 gap-2">
                {listing.gallery.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`${listing.title} ${idx + 1}`}
                    className={`w-full h-24 object-cover rounded-lg cursor-pointer border-2 transform transition-transform duration-300 ${
                      mainImage === src ? "border-blue-600" : "border-transparent"
                    } hover:scale-105`}
                    onClick={() => setMainImage(src)}
                    onError={e =>
                      (e.currentTarget.src =
                        "https://via.placeholder.com/400x240?text=No+Image")
                    }
                  />
                ))}
              </div>

              {/* Reviews */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  Customer Reviews
                </h3>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg shadow">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold text-gray-800">
                        Priya Sharma
                      </p>
                      <p className="text-yellow-500">★★★★★</p>
                    </div>
                    <p className="text-gray-700 text-sm">
                      "Absolutely delicious! The food was delivered hot and
                      fresh. Everyone loved the samosas and butter chicken!"
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      Birthday Party • March 2025
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg shadow">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold text-gray-800">Ahmed Khan</p>
                      <p className="text-yellow-500">★★★★☆</p>
                    </div>
                    <p className="text-gray-700 text-sm">
                      "Great flavours and very generous portions. Would
                      definitely recommend!"
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      Family Reunion • February 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h1 className="text-4xl font-bold text-blue-800 mb-2">
                {listing.title}
              </h1>
              <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide">
                {listing.type}
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                {listing.description}
              </p>
              <p className="text-2xl font-semibold text-blue-700 mb-6">
                {listing.price}
              </p>

              <div className="flex gap-4 mb-10">
                <button
                  onClick={openModal}
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700"
                >
                  Add to Event
                </button>
                <button
                  onClick={() => navigate("/checkout")}
                  className="text-blue-600 font-medium border border-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50"
                >
                  Send Order Request
                </button>
              </div>

              {/* Details */}
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">
                    Starters
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {listing.details.starters.map((s, i) => (
                      <li key={i}>
                        {s.item} — {s.quantity}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">
                    Main Course
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {listing.details.mains.map((m, i) => (
                      <li key={i}>
                        {m.item} — {m.quantity}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">
                    Desserts
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {listing.details.desserts.map((d, i) => (
                      <li key={i}>
                        {d.item} — {d.quantity}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">
                    Allergy Info
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {listing.details.allergies}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">
                    Preparation Instructions
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {listing.details.preparation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* backdrop blur */}
          <div
            className="absolute inset-0"
            style={{
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              backgroundColor: "rgba(255,255,255,0.2)"
            }}
          />
          {/* modal */}
          <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Tell us about your event</h2>
            {/* Event Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Give your event a name
              </label>
              <input
                type="text"
                value={eventName}
                onChange={e => setEventName(e.target.value)}
                className="mt-1 w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Budget */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                What’s your budget for this event?
              </label>
              <div className="mt-1 flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                  £
                </span>
                <input
                  type="number"
                  value={eventBudget}
                  onChange={e => setEventBudget(e.target.value)}
                  className="flex-1 block w-full border rounded-r-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            {/* Actions */}
            <div className="mt-6 flex justify-end space-x-2">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleContinue}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
