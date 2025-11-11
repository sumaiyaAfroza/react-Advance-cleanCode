import {Check, MapPin} from "lucide-react";
import React from "react";


export const PlaceTree = ({id, placesById, parentId, onComplete}) => {
  const place = placesById[id];
  const childIds = place.childIds;
  return (
    <li className="mb-2">
      <div className="group flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50">
        <div className="flex items-center gap-2 flex-1">
          <MapPin className="w-6 h-6 text-white" />
          <span className="font-medium text-gray-700">{place.title}</span>
          {childIds.length > 0 && (
            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-semibold">
              {childIds.length}
            </span>
          )}
        </div>
        <button
          onClick={() => onComplete(parentId, id)}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 px-3 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg text-sm font-semibold hover:shadow-lg hover:scale-105 transform flex items-center gap-1"
        >
          <Check className="w-4 h-4" />
          Complete
        </button>
      </div>
      {childIds.length > 0 && (
        <ol className="ml-6 mt-1">
          {childIds.map((childId) => (
            <PlaceTree
              key={childId}
              id={childId}
              parentId={id}
              placesById={placesById}
              onComplete={onComplete}
            />
          ))}
        </ol>
      )}
    </li>
  )
}