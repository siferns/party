import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OrderDetailPage() {
    const navigate=useNavigate();

    const service = {
        title: "Tandoori Delights",
        type: "Catering",
        price: "£300 for 20 guests",
        status: "Accepted",
        gallery: [
        "https://images.unsplash.com/photo-1627991984547-df26619c9b72?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1591978031649-f4d5a5a4b914?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1597279835034-baa8f6043c6e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1617191511690-0cbb0e15a664?auto=format&fit=crop&w=800&q=80"
        ],
        image: "https://images.unsplash.com/photo-1627991984547-df26619c9b72?auto=format&fit=crop&w=800&q=80",
        description: "Authentic Indian cuisine package including starters, mains, and desserts.",
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
        preparation: "Food is delivered hot. Reheat in oven at 180°C for 10 minutes if needed."
        }
    };

    const [mainImage, setMainImage] = useState(service.gallery[0]);
    const [messages, setMessages] = useState([
        { id: 1, from: "provider", text: "Hi Priya, your food will be delivered at 6pm.", timestamp: new Date().toISOString() },
        { id: 2, from: "user", text: "Thank you! Could you include some extra naan?", timestamp: new Date().toISOString() }
    ]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (!input.trim()) return;
        const newMsg = { id: messages.length + 1, from: "user", text: input, timestamp: new Date().toISOString() };
        setMessages([...messages, newMsg]);
        setInput("");
    };

    return (
        <div className="min-h-screen bg-white">
        <nav className="flex items-center justify-between px-6 py-4 border-b bg-white shadow-sm">
            <h1 className="text-2xl font-bold text-blue-800">Evoo</h1>
            <div className="space-x-4 text-sm">
            <span className="text-gray-700">Hi, Priya</span>
            <button className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full">Logout</button>
            </div>
        </nav>

        <div className="max-w-4xl mx-auto px-6 py-10">
            <button onClick={() =>{
                // alert('Back to Dashboard')
                navigate('/myDashboard')
            }} className="text-blue-600 hover:underline mb-4">
            ← Back to Dashboard
            </button>

            <div className="relative mb-6">
            <img
                src={mainImage}
                alt={service.title}
                className="w-full h-56 object-cover rounded-lg shadow-md"
            />
            <div className="absolute top-4 left-4 bg-white bg-opacity-75 px-3 py-1 rounded-full flex items-center">
                {service.status === "Accepted" ? (
                <span className="text-green-600 mr-1">✔️</span>
                ) : (
                <span className="text-yellow-600 mr-1">⏳</span>
                )}
                <span className="text-sm font-medium text-gray-800">{service.status}</span>
            </div>
            </div>
            <div className="flex space-x-2 mb-8">
            {service.gallery.map((src, idx) => (
                <img
                key={idx}
                src={src}
                alt={`Gallery ${idx + 1}`}
                className="w-24 h-24 object-cover rounded-lg shadow-sm hover:scale-105 transition-transform cursor-pointer"
                onClick={() => setMainImage(src)}
                />
            ))}
            </div>

            <h1 className="text-3xl font-bold text-blue-800 mb-2">{service.title}</h1>
            <p className="text-sm text-gray-500 mb-6">{service.type} • {service.price}</p>

            <div className="grid md:grid-cols-2 gap-8">
            <div>
                <h2 className="text-lg font-semibold text-blue-800 mb-2">Description</h2>
                <p className="text-gray-700 mb-4">{service.description}</p>

                <h2 className="text-lg font-semibold text-blue-800 mb-2">Starters</h2>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                {service.details.starters.map((starter, idx) => (
                    <li key={idx}>{starter.item} — {starter.quantity}</li>
                ))}
                </ul>

                <h2 className="text-lg font-semibold text-blue-800 mb-2">Main Course</h2>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                {service.details.mains.map((main, idx) => (
                    <li key={idx}>{main.item} — {main.quantity}</li>
                ))}
                </ul>

                <h2 className="text-lg font-semibold text-blue-800 mb-2">Desserts</h2>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                {service.details.desserts.map((dessert, idx) => (
                    <li key={idx}>{dessert.item} — {dessert.quantity}</li>
                ))}
                </ul>

                <p className="text-gray-600 mb-2">
                <strong>⚠️ Allergies:</strong> {service.details.allergies}
                </p>
                <p className="text-gray-600 mb-2">
                <strong>🔥 Prep:</strong> {service.details.preparation}
                </p>
            </div>

            <div className="flex flex-col h-full">
                <h2 className="text-lg font-semibold text-blue-800 mb-2">Messages</h2>
                <div className="flex-1 border rounded-lg p-4 overflow-y-auto mb-4 bg-gray-50 space-y-3">
                {messages.map((msg) => (
                    <div
                    key={msg.id}
                    className={`max-w-[80%] p-2 rounded-lg ${
                        msg.from === 'user' ? 'bg-blue-100 self-end ml-auto' : 'bg-white self-start'
                    }`}
                    >
                    <p className="text-gray-800 text-sm">{msg.text}</p>
                    <p className="text-xs text-gray-500 mt-1 text-right">{new Date(msg.timestamp).toLocaleTimeString()}</p>
                    </div>
                ))}
                </div>
                <div className="flex gap-2">
                <input
                    type="text"
                    className="flex-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-300"
                    placeholder="Type a message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                />
                <button
                    onClick={sendMessage}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md"
                >
                    Send
                </button>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    }
