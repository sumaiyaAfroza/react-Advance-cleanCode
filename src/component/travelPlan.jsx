import React, {useState} from 'react';
import {initialTravelPlan} from "../data/places.js";
import {PlaceTree} from "./placeTree.jsx";
import {Check, MapPin} from "lucide-react";

const TravelPlan = () => {
  const [plan, setPlan] = useState(initialTravelPlan)
  const root=plan[0]
  const planetIds = root.childIds
  const handleCompleted = (parentId, childId) => {
    const parent =plan[parentId]
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter(id => id !== childId)
    }
    setPlan({
      ...plan,
    [parentId] : nextParent
    })
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-2xl">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Places to Visit
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                Hover over items to mark them as completed
              </p>
            </div>
          </div>
          <ol className="space-y-1">
            {planetIds.map((placeId) => (
              <PlaceTree
                key={placeId}
                id={placeId}
                placesById={plan}
                onComplete={handleCompleted}
                parentId={0}
              />
            ))}
          </ol>

          {planetIds.length === 0 && (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-xl font-semibold text-gray-800">
                All places visited!
              </p>
              <p className="text-gray-600 mt-2">
                You've completed your travel plan 🎉
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TravelPlan;