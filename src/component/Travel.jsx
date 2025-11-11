
import { useState } from "react";
import { ShoppingBag, Check } from "lucide-react";

const initialItems = [
  { title: "pretzels", id: 0 },
  { title: "crispy seaweed", id: 1 },
  { title: "granola bar", id: 2 },
];

export default function Travel() {
  const [items] = useState(initialItems);
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8 flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-2xl">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Travel Snacks
            </h2>
          </div>

          <p className="text-gray-600 mb-6">What's your travel snack?</p>

          <ul className="space-y-3 mb-8">
            {items.map((item) => (
              <li
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-300 ${
                  selectedItem.id === item.id
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg scale-105"
                    : "bg-gray-50 hover:bg-gray-100 hover:shadow-md"
                }`}
              >
                <div className="flex items-center justify-between p-4">
                  <span
                    className={`font-medium text-lg ${
                      selectedItem.id === item.id
                        ? "text-white"
                        : "text-gray-800"
                    }`}
                  >
                    {item.title}
                  </span>
                  <button
                    onClick={() => setSelectedItem(item)}
                    className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                      selectedItem.id === item.id
                        ? "bg-white text-purple-600 shadow-md"
                        : "bg-white text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {selectedItem.id === item.id && <Check className="w-4 h-4" />}
                    {selectedItem.id === item.id ? "Selected" : "Choose"}
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 border-2 border-purple-200">
            <p className="text-sm text-purple-700 font-medium mb-2">Your Selection</p>
            <p className="text-2xl font-bold text-purple-900">
              🎒 You picked {selectedItem.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}