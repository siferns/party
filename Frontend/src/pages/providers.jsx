import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomDatePicker from "../componenets/ui/datePicker";
import sushiSensationImg from '../assets/sushiSensation.png';
import tacofiesta from "../assets/tacofiesta.png"

export default function Providers() {
  const [activeTab, setActiveTab] = useState("All");
  const navigate=useNavigate();
  const now = new Date();
  const currentTime = now.toTimeString().slice(0, 5); // "HH:MM"

  const results = [
    {
      title: "Tandoori Delights",
      type: "Catering",
      price: "£300 for 20 guests",
      desc: "Delicious Indian cuisine for medium-sized events.",
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
      navigateTo: '/listing/tandooriDelights'
    },
    {
      title: "Sushi Sensation",
      type: "Catering",
      price: "£400 for 25 guests",
      desc: "Freshly prepared sushi platters and bento boxes.",
      img: sushiSensationImg
    },
    {
      title: "Taco Fiesta",
      type: "Catering",
      price: "£250 for 20 guests",
      desc: "Build-your-own taco bar with a variety of fillings.",
      img: tacofiesta
    },
    {
      title: "DJ Sonic Boom",
      type: "DJ",
      price: "£500 for 3 hours",
      desc: "Bring the party to life with pro DJ services.",
      img: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80",
      navigateTo: "/listing/DjEvent"
    },
    {
      title: "Moments Captured",
      type: "Photography",
      price: "£250 for 2 hours",
      desc: "Professional photography to capture every moment.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      navigateTo: '/listing/Photographer'
    }
  ];

  const filteredResults = activeTab === "All"
    ? results
    : results.filter((item) =>
        activeTab === "Food"
          ? item.type === "Catering"
          : ["DJ", "Photography"].includes(item.type)
      );

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

      <div className="px-6 py-4 border-b bg-blue-50">
        <div className="flex space-x-4">
          {["All", "Food", "Entertainment & Services"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full font-medium text-sm transition ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "text-blue-600 border border-blue-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-[280px_1fr] gap-6 px-6 py-6">
        <div className="bg-blue-50 p-4 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4 text-blue-800">Change Event Details</h2>
          <div className="w-full max-w-md mx-auto">
            <form className="grid gap-3">
              <div className="flex items-center gap-3">
                <label className="w-24 text-sm font-semibold text-left">Postcode:</label>
                <input
                  className="w-full pl-3 py-1.5 rounded-sm border border-gray-600 text-sm font-semibold"
                  type="text"
                  placeholder="postcode"
                  defaultValue="121002"
                />
              </div>

              <div className="flex items-center gap-3">
                <label className="w-24 text-sm font-semibold text-left">Guests:</label>
                <input
                  className="w-full pl-3 py-1.5 rounded-sm border border-gray-600 text-sm font-semibold"
                  type="number"
                  placeholder="No. of Guests"
                  defaultValue="5"
                />
              </div>

              <div className="flex items-center gap-3">
                <label className="w-24 text-sm font-semibold text-left">Time:</label>
                <input
                  className="w-full pl-3 py-1.5 rounded-sm border border-gray-600 text-sm font-semibold"
                  type="time"
                  placeholder="Time"
                  defaultValue={currentTime}
                />
              </div>

              <div className="flex items-center gap-3">
                <label className="w-24 text-sm font-semibold text-left">Date:</label>
                <CustomDatePicker />
              </div>

              <button className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm font-semibold">
                Update Search
              </button>
            </form>
        </div>

        </div>

        <div>
          <h1 className="text-2xl font-bold text-blue-800 mb-6">Search Results</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResults.map((result, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
  src={result.img}
  alt={result.title || "Listing"}
  className="h-48 w-full object-cover"
  onError={(e) => {
    e.currentTarget.src = "https://via.placeholder.com/800x480?text=No+Image";
  }}
/>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-blue-700">{result.title}</h2>
                  <p className="text-sm text-gray-600">{result.type}</p>
                  <p className="text-gray-500 text-sm mt-1">{result.desc || "No description available."}</p>
                  <p className="text-blue-600 font-semibold mt-2">{result.price || "Contact for pricing"}</p>
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                  onClick={()=>{
                    navigate(`${result.navigateTo}`)
                  }}>
                    View Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
