import React, { useState } from "react";
import { MapPin, Users, Clock, CalendarDays } from "lucide-react";
import { Button } from "../componenets/ui/Button";
import { Input } from "../componenets/ui/input";
import { Switch } from "../componenets/ui/switch";
import { Card, CardContent } from "../componenets/ui/card";

const services = [
  { title: "1-Hour Session", price: "£150", description: "Fun face painting for 1 hour, up to 15 kids.", image: "https://images.unsplash.com/photo-1582719478173-39b63f34fd39?auto=format&fit=crop&w=400&q=80" },
  { title: "2-Hour Session", price: "£250", description: "Extended session with 2 artists, up to 30 kids.", image: "https://images.unsplash.com/photo-1503061426453-b013b2dd99c4?auto=format&fit=crop&w=400&q=80" },
  { title: "3-Hour Party", price: "£350", description: "Full party coverage, up to 45 kids, includes glitter bar.", image: "https://images.unsplash.com/photo-1556324306-d9009a212a58?auto=format&fit=crop&w=400&q=80" }
];

export default function FacePainterShopPage() {
  return (
    <div className="min-h-screen bg-yellow-50 p-6">
      <nav className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold text-yellow-800">Magic Face Paints</h1>
        <a href="/" className="text-yellow-700 hover:underline">Home</a>
      </nav>
      <div className="max-w-7xl mx-auto grid md:grid-cols-[320px_1fr] gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-yellow-800 mb-4">Start Planning</h2>
          <form className="space-y-4">
            <div className="relative"><MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"/><Input className="pl-10" type="text" placeholder="Postcode"/></div>
            <div className="relative"><Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"/><Input className="pl-10" type="number" placeholder="Number of Kids"/></div>
            <div className="relative"><Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"/><Input className="pl-10" type="time"/></div>
            <div className="relative"><CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"/><Input className="pl-10" type="date"/></div>
            <div className="flex items-center justify-between"><label className="text-sm">Include Glitter Bar?</label><Switch/></div>
            <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">View Services</Button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <Card key={svc.title} className="shadow-md">
                <CardContent className="p-6">
                  <img src={svc.image} alt={svc.title} className="w-full h-40 object-cover rounded-lg mb-4"/>
                  <h3 className="text-xl font-semibold mb-1">{svc.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{svc.price}</p>
                  <p className="text-gray-700 mb-4">{svc.description}</p>
                  <a href="/face-painter-services" className="text-yellow-600 hover:underline">Read More</a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
