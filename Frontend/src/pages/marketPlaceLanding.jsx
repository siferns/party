import React, { useState } from "react";
import { Button } from "../componenets/ui/Button";
import { Input } from "../componenets/ui/input";
import { Card ,CardContent } from "../componenets/ui/card";
import { Switch } from "../componenets/ui/switch"; 
import { Sparkles, ShoppingBag, PartyPopper, MapPin, Users, Clock, CalendarDays } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  // ✅ Password protection states
  const [enteredPassword, setEnteredPassword] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);
  const correctPassword = "letmein123"; // 🔐 Hardcoded password

  const handlePasswordSubmit = () => {
    if (enteredPassword === correctPassword) {
      setAccessGranted(true);
    } else {
      alert("Incorrect password!");
    }
  };

  // 🔒 Show password input screen
  if (!accessGranted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-6">
      <h2 className="text-2xl font-semibold mb-4">Enter Password to Access</h2>
      <input
        type="password"
        value={enteredPassword}
        onChange={(e) => setEnteredPassword(e.target.value)}
        placeholder="Password"
        className="border border-gray-600 p-2 w-64 text-base bg-gray-100 rounded-none mb-4 font-mono"
      />
      <button
        onClick={handlePasswordSubmit}
        className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-1 border border-gray-600 font-mono"
      >
        Submit
      </button>
    </div>
    );
  }

  // ✅ Main content after access granted
  const providers = [
    {
      title: "Tandoori Delights",
      desc: "Indian cuisine packages for 10–100 guests.",
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
      navigateTo: '/listing/tandooriDelights'
    },
    {
      title: "Moments Captured",
      desc: "Professional photography for any event size.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      navigateTo: '/listing/Photographer'
    },
    {
      title: "DJ Sonic Boom",
      desc: "Turn up the party with sound systems & lights.",
      img: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80",
      navigateTo: "/listing/DjEvent"
    },
    {
      title: "Creative Face Paints",
      desc: "Kids party face painting with fun themes.",
      img: "https://images.unsplash.com/photo-1604927713423-7c4b9d28c2ef?auto=format&fit=crop&w=800&q=80",
      navigateTo: "/listing/facePainter"
    },
    {
      title: "Venue Vibes",
      desc: "Elegant event spaces for up to 200 guests.",
      img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=800&q=80",
      navigateTo: '/listing/venueEventDetail'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 p-6">
      {/* Top Navigation */}
      <nav className="flex items-center justify-between mb-6 px-4">
        <div className="text-2xl font-bold text-blue-800">Evoo</div>
        <div className="space-x-4 text-sm">
          <p onClick={()=>navigate('/#')} className="inline-block text-blue-700 hover:underline">Become a Provider</p>
          <p onClick={()=>navigate('/authorization')} className="inline-block text-blue-700 hover:underline">Login</p>
          <p onClick={()=>navigate('/authorization')} className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded-full">Sign Up</p>
        </div>
      </nav>

      {/* Header */}
      <header className="text-center py-6">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-4">Plan the Perfect Event</h1>
        <p className="text-xl text-gray-700">
          Book food packages, photographers, DJs, and more — all in one place.
        </p>
      </header>

      {/* How It Works */}
      <section className="grid md:grid-cols-3 gap-6 text-center my-10">
        <div>
          <Card>
            <CardContent className="p-6">
              <Sparkles className="mx-auto mb-3 text-blue-500" size={32} />
              <h2 className="text-xl font-semibold mb-2">1. Find Providers</h2>
              <p className="text-gray-600">Enter your event details to see local options.</p>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardContent className="p-6">
            <ShoppingBag className="mx-auto mb-3 text-blue-500" size={32} />
            <h2 className="text-xl font-semibold mb-2">2. Book Instantly</h2>
            <p className="text-gray-600">Choose fixed-price packages and book in minutes.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <PartyPopper className="mx-auto mb-3 text-blue-500" size={32} />
            <h2 className="text-xl font-semibold mb-2">3. Enjoy Your Event</h2>
            <p className="text-gray-600">Get everything organized with one dashboard.</p>
          </CardContent>
        </Card>
      </section>

      {/* Event Form and Providers Side by Side */}
      <section className="max-w-7xl mx-auto mt-10 grid md:grid-cols-[320px_1fr] gap-6 items-start">
        {/* Event Form */}
        <div className="bg-blue-100 p-4 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-semibold mb-4 text-blue-900">Start Planning Your Event</h3>
          <form className="grid gap-3">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <Input className="pl-10" type="text" placeholder="Postcode" />
            </div>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <Input className="pl-10" type="number" placeholder="Number of Guests" />
            </div>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <Input className="pl-10" type="time" placeholder="Time" />
            </div>
            <div className="relative">
              <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <Input className="pl-10" type="date" placeholder="Date" />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Willing to Pick Up Food?</label>
              <div>
                <Switch /> 
              </div>
            </div>
            <button
              type="button"
              onClick={() => navigate('/providers')}
              className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-md"
            >
              Find Providers
            </button>
          </form>
        </div>

        {/* Popular Providers */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-blue-800">Popular Providers</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {providers.map((provider, i) => (
              <div key={i} onClick={() => navigate(`${provider.navigateTo}`)}>
                <Card className="shadow-md hover:shadow-lg transition">
                  <img
                    src={provider.img}
                    alt={provider.title}
                    className="rounded-t-2xl h-40 w-full object-cover"
                  />
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-lg">{provider.title}</h4>
                    <p className="text-gray-500 text-sm">{provider.desc}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
