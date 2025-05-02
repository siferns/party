import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DJEventDetailPage() {
    const navigate=useNavigate()
    const djService = {
        title: "DJ Sonic Boom",
        type: "Entertainment",
        price: "£500 for 4 hours",
        media: [
        { type: "image", src: "https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=800&q=80" },
        { type: "image", src: "https://images.unsplash.com/photo-1598387992079-9a8b4e793aa7?auto=format&fit=crop&w=800&q=80" },
        { type: "image", src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80" },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" }
        ],
        description: "DJ Sonic Boom brings the energy to your event with seamless mixing, dynamic LED lighting, and personalized playlists tailored to your vibe. Whether it's a birthday party, anniversary celebration, or corporate gathering, our professional DJ keeps the dance floor alive from start to finish.",
        details: {
        inclusions: [
            { item: "Top-tier DJ Controller & Mixer", quantity: "Professional-grade equipment" },
            { item: "LED Dancefloor Lighting", quantity: "Customisable colors & sync-to-music effects" },
            { item: "Wireless Microphone", quantity: "For speeches and announcements" },
            { item: "Custom Playlist Curation", quantity: "Unlimited song requests" },
            { item: "On-site Sound Technician", quantity: "Ensures flawless audio quality" }
        ],
        specialNotes: "Requests for specific genres or custom playlists welcome. Arrives 1 hour before start to set up.",
        setupTime: "Setup requires access 1 hour before the event."
        }
    };

    const [mainMedia, setMainMedia] = useState(djService.media[0]);
    const renderMedia = (media) => {
        if (media.type === "video") {
        return (
            <video
            src={media.src}
            controls
            className="w-full h-64 object-cover rounded-lg shadow-md"
            />
        );
        }
        return (
        <img
            src={media.src}
            alt={djService.title}
            className="w-full h-64 object-cover rounded-lg shadow-md"
        />
        );
    };

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
            <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left column: media and reviews */}
            <div className="flex flex-col gap-6">
                {/* Main media */}
                <div onError={(e) => (e.target.src = "https://via.placeholder.com/800x400?text=No+Media")}>{renderMedia(mainMedia)}</div>
                {/* Thumbnails */}
                <div className="grid grid-cols-4 gap-2">
                {djService.media.map((m, idx) => (
                    <div
                    key={idx}
                    className={`w-full h-24 overflow-hidden rounded-lg cursor-pointer border-2 transform transition-transform duration-300 hover:scale-105 ${
                        mainMedia.src === m.src ? 'border-blue-600' : 'border-transparent'
                    }`}
                    onClick={() => setMainMedia(m)}
                    >
                    {m.type === 'video' ? (
                        <video src={m.src} className="w-full h-full object-cover" />
                    ) : (
                        <img src={m.src} alt={`${djService.title} ${idx + 1}`} className="w-full h-full object-cover" />
                    )}
                    </div>
                ))}
                </div>
                {/* Reviews */}
                <div className="mt-6">
                <h2 className="text-xl font-semibold text-blue-800 mb-4">Customer Reviews</h2>
                <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg shadow">
                    <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-gray-800">Sophie Turner</p>
                        <p className="text-yellow-500">★★★★★</p>
                    </div>
                    <p className="text-gray-700 text-sm">"Fantastic DJ set! The music kept everyone dancing all night long. Highly recommend!"</p>
                    <p className="text-xs text-gray-500 mt-1">Birthday Bash • March 2025</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow">
                    <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-gray-800">Luke Roberts</p>
                        <p className="text-yellow-500">★★★★☆</p>
                    </div>
                    <p className="text-gray-700 text-sm">"Really professional setup. Great sound system and a good mix of music for all ages!"</p>
                    <p className="text-xs text-gray-500 mt-1">Family Reunion • February 2025</p>
                    </div>
                </div>
                </div>
            </div>
            {/* Right column: details, description, buttons */}
            <div>
                <h1 className="text-3xl font-bold text-blue-800 mb-2">{djService.title}</h1>
                {/* Description above buttons */}
                <div className="mb-6">
                <p className="text-gray-700 leading-relaxed">{djService.description}</p>
                </div>
                {/* Bold Blue Price */}
                <p className="text-2xl font-semibold text-blue-700 mb-6">{djService.price}</p>
                {/* Action Buttons */}
                <div className="flex gap-4 mb-8">
                <a href="/checkout" className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700">
                    Send Order Request
                </a>
                <button className="text-blue-600 font-medium border border-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50">
                    Add to Event
                </button>
                </div>
                {/* Inclusions and notes */}
                <div className="space-y-6">
                <div>
                    <h2 className="text-lg font-semibold text-blue-800 mb-2">What's Included</h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {djService.details.inclusions.map((inc, idx) => (
                        <li key={idx}>{inc.item} — {inc.quantity}</li>
                    ))}
                    </ul>
                </div>
                <div>
                    <p className="text-gray-600">
                    <strong>🎶 Special Notes:</strong> {djService.details.specialNotes}
                    </p>
                    <p className="mt-2 text-gray-600">
                    <strong>🕒 Setup Info:</strong> {djService.details.setupTime}
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    }
