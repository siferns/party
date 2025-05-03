// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function MyDashboard() {
//   const navigate=useNavigate()
//   const [events, setEvents] = useState([
//     {
//       date: "2025-05-12",
//       name: "25th Anniversary",
//       status: "Partially Booked",
//       budget: 1500,
//       ordered: [
//         { title: "Tandoori Delights", type: "Catering", price: "£300", status: "Pending", navigateTo:"/tandooriOrderDetail" },
//         { title: "Venue Vibes", type: "Venue", price: "£1", status: "Confirmed" }
//       ],
//       pending: [
//         { title: "DJ Sonic Boom", type: "DJ", price: "£500" },
//         { title: "Moments Captured", type: "Photography", price: "£250" }
//       ]
//     },
//     {
//       date: "2025-02-12",
//       name: "Son's Birthday",
//       status: "Confirmed",
//       budget: 1000,
//       ordered: [
//         { title: "Sushi Sensation", type: "Catering", price: "£400", status: "Confirmed" },
//         { title: "Creative Face Paints", type: "Entertainment", price: "£150", status: "Confirmed" }
//       ],
//       pending: []
//     }
//   ]);
//   const [editingBudgetIdx, setEditingBudgetIdx] = useState(null);
//   const [budgetInput, setBudgetInput] = useState("");

//   const parsePrice = (price) => Number(price.replace("$", ""));

//   const handleRemove = (eventIndex, category, itemIndex) => {
//     setEvents((prev) => {
//       const updated = [...prev];
//       updated[eventIndex][category].splice(itemIndex, 1);
//       return updated;
//     });
//   };

//   const saveBudget = (idx) => {
//     setEvents((prev) => {
//       const updated = [...prev];
//       updated[idx].budget = Number(budgetInput);
//       return updated;
//     });
//     setEditingBudgetIdx(null);
//   };

//   return (
//     <>
//       <nav className="flex items-center justify-between px-6 py-4 border-b bg-white shadow-sm sticky top-0 z-10">
//         <a href="/" className="text-2xl font-bold text-blue-800">Evoo</a>
//         <div className="space-x-4 text-sm">
//           <span className="text-gray-700">Hi, Priya</span>
//           <a href="/dashboard" className="text-blue-700 hover:underline">Dashboard</a>
//           <button className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full">Logout</button>
//         </div>
//       </nav>
//       <div className="min-h-screen bg-white px-6 py-10 max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold text-blue-800 mb-6">My Events</h1>
//         <div className="space-y-8">
//           {events.map((event, idx) => {
//             const orderedTotal = event.ordered.reduce((acc, item) => acc + parsePrice(item.price), 0);
//             const pendingTotal = event.pending.reduce((acc, item) => acc + parsePrice(item.price), 0);
//             const combinedTotal = orderedTotal + pendingTotal;
//             const usedPercent = Math.min((combinedTotal / event.budget) * 100, 100);

//             return (
//               <div key={idx} className="border rounded-xl p-6 shadow-sm">
//                 <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
//                   <div>
//                     <h2
//                       className="text-xl font-semibold text-blue-700 hover:underline cursor-pointer"
//                       onClick={() => alert(`View details for ${event.name}`)}
//                     >
//                       📅 {event.name}
//                     </h2>
//                     <p className="text-sm text-gray-500">{event.date}</p>
//                   </div>
//                   <span className={`text-sm font-medium px-3 py-1 rounded-full mt-2 md:mt-0 ${
//                     event.status === "Confirmed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-800"
//                   }`}>
//                     {event.status}
//                   </span>
//                 </div>
//                 {/* Budget Bar */}
//                 <div className="mb-4">
//                   <div className="flex items-center gap-2">
//                     {editingBudgetIdx === idx ? (
//                       <>
//                         <input
//                           type="number"
//                           className="border rounded px-2 py-1 w-24"
//                           value={budgetInput}
//                           onChange={(e) => setBudgetInput(e.target.value)}
//                           onBlur={() => saveBudget(idx)}
//                           autoFocus
//                         />
//                         <button
//                           onClick={() => saveBudget(idx)}
//                           className="text-sm text-blue-600 hover:underline"
//                         >
//                           Save
//                         </button>
//                       </>
//                     ) : (
//                       <p>
//                         Budget: <span className="font-semibold text-blue-600">£{event.budget}</span>
//                         <button
//                           onClick={() => {
//                             setEditingBudgetIdx(idx);
//                             setBudgetInput(event.budget);
//                           }}
//                           className="ml-2 text-gray-500 hover:text-gray-700"
//                         >
//                           ✏️
//                         </button>
//                       </p>
//                     )}
//                   </div>
//                   <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
//                     <div
//                       className="bg-green-500 h-2 rounded-full"
//                       style={{ width: `${usedPercent}%` }}
//                     />
//                   </div>
//                   <p className="text-xs text-gray-500 mt-1">
//                     ${combinedTotal} of £{event.budget} used ({usedPercent.toFixed(0)}%)
//                   </p>
//                 </div>
//                 {/* Services */}
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <h3 className="font-semibold text-blue-800 mb-2">✔️ Ordered Services</h3>
//                     {event.ordered.length > 0 ? (
//                       <ul className="space-y-2 mb-2">
//                         {event.ordered.map((item, i) => (
//                           <li
//                             key={i}
//                             className="flex justify-between items-center bg-blue-50 p-3 rounded cursor-pointer hover:bg-blue-100"
//                             onClick={() => {
//                                 // alert(`View ${item.title} details`)
//                                 navigate(`${item.navigateTo}`)
//                             }}
//                           >
//                             <div>
//                               <p className="font-medium text-gray-700">{item.title}</p>
//                               <p className="text-sm text-gray-500">{item.type}</p>
//                             </div>
//                             <div className="text-right">
//                               <p className="font-semibold text-blue-700">{item.price}</p>
//                               <p className={`text-sm ${item.status === "Confirmed" ? `text-green-600` : `text-yellow-600`}`}>{item.status}</p>
//                             </div>
//                           </li>
//                         ))}
//                       </ul>
//                     ) : <p className="text-sm text-gray-500">No services booked yet.</p>}
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-blue-800 mb-2">⏳ Pending Services</h3>
//                     {event.pending.length > 0 ? (
//                       <ul className="space-y-2 mb-2">
//                         {event.pending.map((item, i) => (
//                           <li key={i} className="flex justify-between items-center border p-3 rounded">
//                             <div>
//                               <p className="font-medium text-gray-700">{item.title}</p>
//                               <p className="text-sm text-gray-500">{item.type}</p>
//                             </div>
//                             <div className="text-right flex flex-col items-end">
//                               <p className="text-blue-700 font-semibold">{item.price}</p>
//                               <button
//                                 onClick={() => handleRemove(idx, 'pending', i)}
//                                 className="text-xs text-red-500 hover:underline mt-1"
//                               >
//                                 🗑️ Remove
//                               </button>
//                             </div>
//                           </li>
//                         ))}
//                       </ul>
//                     ) : <p className="text-sm text-gray-500">Nothing pending.</p>}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }


import React, { useState } from "react";
import { CalendarDays, Users } from "lucide-react";
import { Card, CardContent } from "../componenets/ui/card";
import { Button } from "../componenets/ui/Button";
import { useNavigate } from "react-router-dom";

export default function DashboardPage() {
  // Full events state with ordered and pending lists
  const navigate=useNavigate()
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "25th Anniversary",
      date: "2025-05-12",
      status: "Partially Booked",
      budget: 1500,
      ordered: [
        { title: "Tandoori Delights", type: "Catering", price: "£300", status: "Confirmed",navigateTo:"/tandooriOrderDetail" },
        { title: "Venue Vibes", type: "Venue", price: "£800", status: "Pending" }
      ],
      pending: [
        { title: "DJ Sonic Boom", type: "DJ", price: "£500" },
        { title: "Moments Captured", type: "Photography", price: "£250" }
      ]
    },
    {
      id: 2,
      name: "Son's Birthday",
      date: "2025-02-12",
      status: "Confirmed",
      budget: 1000,
      ordered: [
        { title: "Sushi Sensation", type: "Catering", price: "£400", status: "Confirmed" },
        { title: "Creative Face Paints", type: "Entertainment", price: "£150", status: "Confirmed" }
      ],
      pending: []
    }
  ]);

  // Saved providers array
  const savedProviders = [
    { id: 1, name: "Tandoori Delights", category: "Catering", image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80", navigateTo:"/listing/tandooriDelights" },
    { id: 2, name: "DJ Sonic Boom", category: "Entertainment", image: "https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=400&q=80",navigateTo:"/listing/DjEvent"},
    { id: 3, name: "Memories Captured Photography", category: "Photography", image: "https://images.unsplash.com/photo-1524499982521-1ff24e40f2e9?auto=format&fit=crop&w=400&q=80", navigateTo:"/listing/Photographer"},
    { id: 4, name: "Magic Face Paints", category: "Kids Entertainment", image: "https://images.unsplash.com/photo-1503061426453-b013b2dd99c4?auto=format&fit=crop&w=400&q=80", navigateTo:"/listing/facePainter" }
  ];

  const [activeTab, setActiveTab] = useState("pending");

  // Helper to extract number from price string
  const parsePrice = (price) => Number(price.replace(/[^0-9.]/g, ""));

  // Remove pending service
  const handleRemove = (eventIndex, itemIndex) => {
    setEvents(prev => {
      const updated = [...prev];
      updated[eventIndex].pending.splice(itemIndex, 1);
      return updated;
    });
  };

  // Render confirmed events
  const renderPrevious = () => (
    <div className="grid gap-6">
      {events.filter(e => e.status === 'Confirmed').map(event => (
        <Card key={event.id} className="shadow">
          <CardContent className="p-4 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-blue-800">{event.name}</h3>
              <p className="text-sm text-gray-600"><CalendarDays className="inline-block mr-1" />{event.date}</p>
            </div>
            <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">{event.status}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  // Render events with pending services, full MyDashboard UI with budget bar
  const renderPending = () => (
    <div className="space-y-8">
      {events.map((event, idx) => event.pending.length > 0 && (() => {
        const orderedTotal = event.ordered.reduce((sum, item) => sum + parsePrice(item.price), 0);
        const pendingTotal = event.pending.reduce((sum, item) => sum + parsePrice(item.price), 0);
        const combinedTotal = orderedTotal + pendingTotal;
        const usedPercent = Math.min((combinedTotal / event.budget) * 100, 100);

        return (
          <Card key={event.id} className="shadow">
            <CardContent className="p-6">
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3
                    className="text-xl font-semibold text-blue-800 hover:underline cursor-pointer"
                    onClick={() => alert(`View details for ${event.name}`)}
                  >
                    📅 {event.name}
                  </h3>
                  <p className="text-sm text-gray-500">{event.date}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-sm ${event.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>{event.status}</span>
              </div>

              {/* Budget Bar */}
              <div className="mb-4">
                <p>Budget: <span className="font-semibold text-blue-600">£{event.budget}</span></p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: `${usedPercent}%` }} />
                </div>
                <p className="text-xs text-gray-500 mt-1">£{combinedTotal} of £{event.budget} used ({usedPercent.toFixed(0)}%)</p>
              </div>

              {/* Services Lists */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Ordered Services */}
                <div>
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">✔️ Ordered Services</h4>
                  {event.ordered.map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center bg-blue-50 p-3 rounded mb-2 hover:bg-blue-100 cursor-pointer"
                      onClick={() => navigate(`${item.navigateTo}`)}
                    >
                      <div>
                        <p className="font-medium text-gray-700">{item.title}</p>
                        <p className="text-sm text-gray-500">{item.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-blue-700">{item.price}</p>
                        <p className={`text-sm ${item.status === 'Confirmed' ? 'text-green-600' : 'text-yellow-600'}`}>{item.status}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pending Services */}
                <div>
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">⏳ Pending Services</h4>
                  {event.pending.map((item, i) => (
                    <div key={i} className="flex justify-between items-center border p-3 rounded mb-2">
                      <div>
                        <p className="font-medium text-gray-700">{item.title}</p>
                        <p className="text-sm text-gray-500">{item.type}</p>
                      </div>
                      <div className="text-right flex flex-col items-end">
                        <p className="text-blue-700 font-semibold">{item.price}</p>
                        <button
                          onClick={() => handleRemove(idx, i)}
                          className="text-xs text-red-500 hover:underline mt-1"
                        >
                          🗑️ Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })())}
    </div>
  );

  // Render saved providers
  const renderProviders = () => (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {savedProviders.map(provider => (
        <div>
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
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm"
                onClick={()=>{
                    navigate(`${provider.navigateTo}`)
                }}>
                View
                </Button>
            </CardContent>
            </Card>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
            <nav className="flex items-center justify-between px-6 py-4 border-b bg-white shadow-sm sticky top-0 z-10">
                <a href="/" className="text-2xl font-bold text-blue-800">Evoo</a>
                <div className="space-x-4 text-sm">
                    <span className="text-gray-700">Hi, Priya</span>
                    <a href="/myDashboard" className="text-blue-700 hover:underline">Dashboard</a>
                    <button className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full">Logout</button>
                </div>
            </nav>
      <div className="flex justify-center space-x-4 bg-white shadow p-4">
        <button
          onClick={() => setActiveTab("pending")}
          className={`px-4 py-2 rounded ${activeTab === "pending" ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
        >Pending Events</button>
        <button
          onClick={() => setActiveTab("previous")}
          className={`px-4 py-2 rounded ${activeTab === "previous" ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
        >Previous Events</button>
        <button
          onClick={() => setActiveTab("providers")}
          className={`px-4 py-2 rounded ${activeTab === "providers" ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
        >Saved Providers</button>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">
        {activeTab === "previous" && renderPrevious()}
        {activeTab === "pending" && renderPending()}
        {activeTab === "providers" && renderProviders()}
      </div>
    </div>
  );
}