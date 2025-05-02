import React from "react";
import { MapPin, Users, Clock, CalendarDays } from "lucide-react";
import { Button } from "../componenets/ui/Button";
import { Card, CardContent } from "../componenets/ui/card";
import { Input } from "../componenets/ui/input";
import { Switch } from "../componenets/ui/switch";

const venues = [
  { title: "Half-Day Rental", price: "£800", description: "Venue access for up to 4 hours with basic AV.", image: "https://images.unsplash.com/photo-1560185127-6c9c481bfb33?auto=format&fit=crop&w=400&q=80" },
  { title: "Full-Day Rental", price: "£1,200", description: "Venue access for up to 8 hours with full AV support.", image: "https://images.unsplash.com/photo-1574286926768-27f2f79d48e8?auto=format&fit=crop&w=400&q=80" },
  { title: "Evening Gala", price: "£1,500", description: "Exclusive evening booking with catering options.", image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=400&q=80" }
];

export default function VenueShopPage() {
  return (
    <div className="min-h-screen bg-purple-50 p-6">
      <nav className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold text-purple-800">The Grand Hall</h1>
        <a href="/" className="text-purple-700 hover:underline">Home</a>
      </nav>
      <div className="max-w-7xl mx-auto grid md:grid-cols-[320px_1fr] gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">Start Planning</h2>
          <form className="space-y-4">
            <div className="relative"><MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"/><Input className="pl-10" type="text" placeholder="Postcode"/></div>
            <div className="relative"><Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"/><Input className="pl-10" type="number" placeholder="Guests"/></div>
            <div className="relative"><Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"/><Input className="pl-10" type="time"/></div>
            <div className="relative"><CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"/><Input className="pl-10" type="date"/></div>
            <div className="flex items-center justify-between"><label className="text-sm">On-site Coordinator?</label><Switch/></div>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">View Options</Button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-purple-800 mb-4">Rental Options</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {venues.map((v) => (
              <Card key={v.title} className="shadow-md">
                <CardContent className="p-6">
                  <img src={v.image} alt={v.title} className="w-full h-40 object-cover rounded-lg mb-4"/>
                  <h3 className="text-xl font-semibold mb-1">{v.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{v.price}</p>
                  <p className="text-gray-700 mb-4">{v.description}</p>
                  <a href="/venue-options" className="text-purple-600 hover:underline">Read More</a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
