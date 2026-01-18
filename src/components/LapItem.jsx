import {formateTime} from "../helpers/formateTime.js";
import {X} from "lucide-react";


export const LapItem = ({ lap, onDelete, onResume, isStopwatchRunning }) => {
  const lapTimeFormatted = formateTime(lap.lapTime)
  const totalTimeFormatted = formateTime(lap.totalTime)

  return (
    <div className="group relative p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] bg-slate-800/40 border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/60">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-full font-bold bg-slate-700/50 text-slate-300 border border-slate-600/50">
            {lap.lapsNumber}
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-lg md:text-xl font-bold text-white tabular-nums">
                {lapTimeFormatted.minutes}:{lapTimeFormatted.seconds}.{lapTimeFormatted.milliSeconds}
              </span>
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Total: {totalTimeFormatted.hours}:{totalTimeFormatted.minutes}:{totalTimeFormatted.seconds}.{totalTimeFormatted.milliseconds}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {/* Resume Button */}
          {!isStopwatchRunning && (
            <button
              onClick={() => onResume(lap.totalTime)}
              className="p-2 rounded-full bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/50 text-blue-400 hover:text-blue-300 hover:scale-110 transition-all"
              aria-label="Resume from this lap"
              title="Resume from this lap"
            >
              <SkipForward className="h-4 w-4" />
            </button>
          )}

          {/* Delete Button */}
          <button
            onClick={() => onDelete(lap.lapsNumber)}
            className="p-2 rounded-full bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 text-red-400 hover:text-red-300 hover:scale-110 transition-all"
            aria-label="Delete lap"
            title="Delete lap"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}