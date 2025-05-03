import React from "react";
import { Card, CardContent } from "../componenets/ui/card";
import { Button } from "../componenets/ui/Button";
import { useNavigate } from "react-router-dom";


const savedProviders = [
  { id: 1, name: "Tandoori Delights", category: "Catering", image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80",navigateTo:"/listing/tandooriDelights" },
  { id: 2, name: "DJ Sonic Boom", category: "Entertainment", image: "https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=400&q=80",navigateTo:"/listing/DjEvent"},
  { id: 3, name: "Memories Captured Photography", category: "Photography", image: "https://images.unsplash.com/photo-1524499982521-1ff24e40f2e9?auto=format&fit=crop&w=400&q=80",navigateTo:"/listing/Photographer" },
  { id: 4, name: "Magic Face Paints", category: "Kids Entertainment", image: "https://images.unsplash.com/photo-1503061426453-b013b2dd99c4?auto=format&fit=crop&w=400&q=80",navigateTo:"/listing/facePainter" }
];

export default function SavedProvidersPage() {
  const navigate=useNavigate()
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-blue-800">Saved Providers</h1>
        <a href="/myDashboard" className="text-gray-600 hover:underline">Back to Dashboard</a>
      </nav>
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {savedProviders.map(provider => (
            <Card key={provider.id} className="shadow flex flex-col">
              <img
                src={provider.image}
                alt={provider.name}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <CardContent className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-1">{provider.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{provider.category}</p>
                </div>
                <Button  onClick={()=>{
                    navigate(`${provider.navigateTo}`)
                }} className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm">
                  View Provider
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
