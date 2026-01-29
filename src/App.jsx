import { Play, Pause, RotateCcw, Flag, X, SkipForward } from "lucide-react"
import TimeDisplay from "./components/TimeDisplay.jsx";
import {formateTime} from "./helpers/formateTime.js";
import useStopWatch from "./hooks/useStopWatch.jsx";
import {ControlButton} from "./components/controlButton.jsx";
import {RunningIndicator} from "./components/RunningIndicator.jsx";
import LapsSection from "./components/LapsSection.jsx";

// // ============================================================================
// // UTILITY FUNCTIONS
// // ============================================================================
//
// const formatTime = (ms) => {
//   const totalSeconds = Math.floor(ms / 1000)
//   const hours = Math.floor(totalSeconds / 3600)
//   const minutes = Math.floor((totalSeconds % 3600) / 60)
//   const seconds = totalSeconds % 60
//   const millis = Math.floor((ms % 1000) / 10)
//
//   return {
//     hours: hours.toString().padStart(2, "0"),
//     minutes: minutes.toString().padStart(2, "0"),
//     seconds: seconds.toString().padStart(2, "0"),
//     milliseconds: millis.toString().padStart(2, "0"),
//   }
// }
//
//
//
// // ============================================================================
// // CUSTOM HOOKS
// // ============================================================================
//
// const useStopwatch = () => {
//   const [startTime, setStartTime] = useState(null)
//   const [now, setNow] = useState(null)
//   const [isRunning, setIsRunning] = useState(false)
//   const [laps, setLaps] = useState([])
//   const intervalRef = useRef(null)
//
//   const elapsed = (startTime && now) ? now - startTime : 0
//
//   const start = () => {
//     const currentTime = Date.now()
//     setStartTime(currentTime - elapsed)
//     setNow(currentTime)
//     setIsRunning(true)
//     intervalRef.current = setInterval(() => {
//       setNow(Date.now())
//     }, 10)
//   }
//
//   const pause = () => {
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current)
//     }
//     setIsRunning(false)
//   }
//
//   const reset = () => {
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current)
//     }
//     setStartTime(null)
//     setNow(null)
//     setIsRunning(false)
//     setLaps([])
//   }
//
//   const recordLap = () => {
//     if (!startTime || !now) return
//
//     const currentTime = now - startTime
//     const lapTime = laps.length > 0
//       ? currentTime - laps[laps.length - 1].totalTime
//       : currentTime
//
//     setLaps(prev => [...prev, {
//       lapNumber: prev.length + 1,
//       lapTime,
//       totalTime: currentTime
//     }])
//   }
//
//   const deleteLap = (lapNumber) => {
//     setLaps(prev => prev.filter(lap => lap.lapNumber !== lapNumber))
//   }
//
//   const resumeFromLap = (totalTime) => {
//     // Stop current timer if running
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current)
//     }
//
//     // Set the time to the lap's total time
//     const currentTime = Date.now()
//     setStartTime(currentTime - totalTime)
//     setNow(currentTime)
//     setIsRunning(true)
//
//     // Start the timer
//     intervalRef.current = setInterval(() => {
//       setNow(Date.now())
//     }, 10)
//   }
//
//   return {
//     elapsed,
//     isRunning,
//     laps,
//     start,
//     pause,
//     reset,
//     recordLap,
//     deleteLap,
//     resumeFromLap
//   }
// }
//
//
// // ============================================================================
// // UI COMPONENTS
// // ============================================================================
// const TimeDisplay = ({ time }) => {
//   const TimeUnit = ({ value, label }) => (
//     <div className="text-center">
//       <div className="text-6xl md:text-8xl font-bold tabular-nums text-white drop-shadow-lg">
//         {value}
//       </div>
//       <div className="text-xs text-slate-500 mt-2 uppercase tracking-widest font-medium">
//         {label}
//       </div>
//     </div>
//   )
//
//   const Separator = () => (
//     <div className="text-5xl md:text-7xl font-bold text-slate-600 mb-6">:</div>
//   )
//
//   return (
//     <div className="flex items-baseline justify-center gap-1 md:gap-2 mb-12 flex-wrap">
//       <TimeUnit value={time.hours} label="Hours" />
//       <Separator />
//       <TimeUnit value={time.minutes} label="Minutes" />
//       <Separator />
//       <TimeUnit value={time.seconds} label="Seconds" />
//       <div className="text-5xl md:text-7xl font-bold text-slate-600 mb-6">.</div>
//       <div className="text-center">
//         <div className="text-4xl md:text-6xl font-bold tabular-nums text-slate-400 drop-shadow-lg">
//           {time.milliseconds}
//         </div>
//         <div className="text-xs md:text-sm text-slate-500 mt-2 uppercase tracking-widest font-medium">
//           CS
//         </div>
//       </div>
//     </div>
//   )
// }
//
// const ControlButton = ({ onClick, disabled, variant = "default", icon: Icon, children }) => {
//   const variants = {
//     start: "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:shadow-purple-500/50",
//     pause: "bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 hover:shadow-red-500/50",
//     lap: "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 hover:shadow-emerald-500/50",
//     reset: "border-2 border-slate-600 hover:border-slate-500 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white"
//   }
//
//   const baseClasses = "h-14 md:h-16 px-6 md:px-8 text-base md:text-lg font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
//   const disabledClasses = "disabled:opacity-30 disabled:hover:scale-100 disabled:cursor-not-allowed"
//
//   return (
//     <button
//       onClick={onClick}
//       disabled={disabled}
//       className={`${baseClasses} ${variants[variant]} ${variant !== "reset" ? "text-white border-0" : ""} ${disabledClasses}`}
//     >
//       {Icon && <Icon className="h-5 w-5" />}
//       {children}
//     </button>
//   )
// }
//
// const RunningIndicator = () => (
//   <div className="flex items-center justify-center gap-2 mt-8">
//     <div className="relative">
//       <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute" />
//       <div className="w-3 h-3 bg-green-400 rounded-full relative" />
//     </div>
//     <span className="text-xs md:text-sm text-slate-400 uppercase tracking-wider font-medium">
//       Running
//     </span>
//   </div>
// )
//
// const LapItem = ({ lap, onDelete, onResume, isStopwatchRunning }) => {
//   const lapTimeFormatted = formatTime(lap.lapTime)
//   const totalTimeFormatted = formatTime(lap.totalTime)
//
//   return (
//     <div className="group relative p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] bg-slate-800/40 border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/60">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-4">
//           <div className="flex items-center justify-center w-10 h-10 rounded-full font-bold bg-slate-700/50 text-slate-300 border border-slate-600/50">
//             {lap.lapNumber}
//           </div>
//           <div>
//             <div className="flex items-center gap-2 flex-wrap">
//               <span className="text-lg md:text-xl font-bold text-white tabular-nums">
//                 {lapTimeFormatted.minutes}:{lapTimeFormatted.seconds}.{lapTimeFormatted.milliseconds}
//               </span>
//             </div>
//             <div className="text-xs text-slate-400 mt-1">
//               Total: {totalTimeFormatted.hours}:{totalTimeFormatted.minutes}:{totalTimeFormatted.seconds}.{totalTimeFormatted.milliseconds}
//             </div>
//           </div>
//         </div>
//
//         {/* Action Buttons */}
//         <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//           {/* Resume Button */}
//           {!isStopwatchRunning && (
//             <button
//               onClick={() => onResume(lap.totalTime)}
//               className="p-2 rounded-full bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/50 text-blue-400 hover:text-blue-300 hover:scale-110 transition-all"
//               aria-label="Resume from this lap"
//               title="Resume from this lap"
//             >
//               <SkipForward className="h-4 w-4" />
//             </button>
//           )}
//
//           {/* Delete Button */}
//           <button
//             onClick={() => onDelete(lap.lapNumber)}
//             className="p-2 rounded-full bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 text-red-400 hover:text-red-300 hover:scale-110 transition-all"
//             aria-label="Delete lap"
//             title="Delete lap"
//           >
//             <X className="h-4 w-4" />
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }
//
// const LapsSection = ({ laps, onDeleteLap, onResumeLap, isStopwatchRunning }) => {
//   if (laps.length === 0) return null
//
//   return (
//     <div className="mt-6 relative">
//       <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 blur-2xl" />
//
//       <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-xl">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent flex items-center gap-2">
//             <Flag className="h-5 w-5 text-emerald-400" />
//             Lap Times
//           </h2>
//           <div className="text-sm text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700/50">
//             {laps.length} {laps.length === 1 ? 'Lap' : 'Laps'}
//           </div>
//         </div>
//
//         <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
//           {[...laps].reverse().map((lap) => (
//             <LapItem
//               key={lap.lapNumber}
//               lap={lap}
//               onDelete={onDeleteLap}
//               onResume={onResumeLap}
//               isStopwatchRunning={isStopwatchRunning}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }
// // ============================================================================
// // MAIN APP COMPONENT
// // ============================================================================

export default function App() {
  const { elapsed, isRunning, laps, start, pause, reset, recordLap, deleteLap, resumeLap } = useStopWatch()
  const time = formateTime(elapsed)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-4">
      <div className="w-full max-w-3xl">
        {/* Main Stopwatch Card */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl animate-pulse" />

          <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-2xl">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3 tracking-tight">
                Stopwatch
              </h1>
              <p className="text-slate-400 text-sm md:text-base">
                Precision timing at your fingertips
              </p>
            </div>

            {/* Time Display */}
            <TimeDisplay time={time} />

            {/* Control Buttons */}
            <div className="flex items-center justify-center gap-3 md:gap-4 flex-wrap">
              {!isRunning ? (
                <ControlButton onClick={start} variant="start" icon={Play}>
                  Start
                </ControlButton>
              ) : (
                <>
                  <ControlButton onClick={pause} variant="pause" icon={Pause}>
                    Pause
                  </ControlButton>
                  <ControlButton onClick={recordLap} variant="lap" icon={Flag}>
                    Lap
                  </ControlButton>
                </>
              )}
              <ControlButton onClick={reset} variant="reset" icon={RotateCcw} disabled={elapsed === 0}>
                Reset
              </ControlButton>
            </div>

            {/* Running Indicator */}
            {isRunning && <RunningIndicator />}
          </div>
        </div>

        {/* Laps Section */}
        <LapsSection laps={laps} onDeleteLap={deleteLap} onResumeLap={resumeLap} isStopwatchRunning={isRunning} />
      </div>
    </div>
  )
}



// cmt kora gula reuseable compoment silo na sob gula akta app er modhei diye kora 