import {LapItem} from "./LapItem.jsx";
import {Flag} from "lucide-react";

const LapsSection = ({ laps, onDeleteLap, onResumeLap, isStopwatchRunning }) => {
  if (laps.length === 0) return null

  return (
    <div className="mt-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 blur-2xl" />

      <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent flex items-center gap-2">
            <Flag className="h-5 w-5 text-emerald-400" />
            Lap Times
          </h2>
          <div className="text-sm text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700/50">
            {laps.length} {laps.length === 1 ? 'Lap' : 'Laps'}
          </div>
        </div>

        <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
          {[...laps].reverse().map((lap) => (
            <LapItem
              key={lap.lapsNumber}
              lap={lap}
              onDelete={onDeleteLap}
              onResume={onResumeLap}
              isStopwatchRunning={isStopwatchRunning}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default LapsSection