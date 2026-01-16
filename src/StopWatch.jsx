

import { useRef, useState } from "react"
import { Play, Pause, RotateCcw, Trash2 } from "lucide-react"

export const StopWatch = () => {
  const [startTime, setStartTime] = useState(null)
  const [now, setNow] = useState(null)
  const [isRunning, setIsRunning] = useState(false)
  const [laps, setLaps] = useState([])
  const intervalRef = useRef(null)

  const handleStart = () => {
    const currentTime = Date.now()
    setStartTime(currentTime - (now && startTime ? now - startTime : 0))
    setNow(currentTime)
    setIsRunning(true)

    intervalRef.current = setInterval(() => {
      setNow(Date.now())
    }, 10)
  }

  const handleStop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    setIsRunning(false)
  }

  const handleReset = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    setStartTime(null)
    setNow(null)
    setIsRunning(false)
    setLaps([])
  }

  const handleLap = () => {
    if (startTime != null && now != null) {
      const currentLapTime = now - startTime
      const previousTotalTime = laps.length > 0 ? laps[laps.length - 1].totalTime : 0
      const lapTime = currentLapTime - previousTotalTime

      setLaps([
        ...laps,
        {
          id: laps.length + 1,
          lapTime: lapTime,
          totalTime: currentLapTime,
        },
      ])
    }
  }

  let milliseconds = 0
  if (startTime != null && now != null) {
    milliseconds = now - startTime
  }

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000)
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60
    const millis = Math.floor((ms % 1000) / 10)

    return {
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: seconds.toString().padStart(2, "0"),
      milliseconds: millis.toString().padStart(2, "0"),
    }
  }

  const time = formatTime(milliseconds)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-4">
      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main stopwatch card */}
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl animate-pulse" />

              <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-2xl">
                <div className="text-center mb-8">
                  <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3 tracking-tight">
                    Stopwatch
                  </h1>
                  <p className="text-slate-400 text-sm md:text-base">Precision timing at your fingertips</p>
                </div>

                <div className="flex items-baseline justify-center gap-1 md:gap-2 mb-12 flex-wrap">
                  <div className="text-center">
                    <div className="text-6xl md:text-8xl font-bold tabular-nums text-white drop-shadow-lg">
                      {time.hours}
                    </div>
                    <div className="text-xs text-slate-500 mt-2 uppercase tracking-widest font-medium">Hours</div>
                  </div>

                  <div className="text-5xl md:text-7xl font-bold text-slate-600 mb-6">:</div>

                  <div className="text-center">
                    <div className="text-6xl md:text-8xl font-bold tabular-nums text-white drop-shadow-lg">
                      {time.minutes}
                    </div>
                    <div className="text-xs text-slate-500 mt-2 uppercase tracking-widest font-medium">Minutes</div>
                  </div>

                  <div className="text-5xl md:text-7xl font-bold text-slate-600 mb-6">:</div>

                  <div className="text-center">
                    <div className="text-6xl md:text-8xl font-bold tabular-nums text-white drop-shadow-lg">
                      {time.seconds}
                    </div>
                    <div className="text-xs text-slate-500 mt-2 uppercase tracking-widest font-medium">Seconds</div>
                  </div>

                  <div className="text-5xl md:text-7xl font-bold text-slate-600 mb-6">.</div>

                  <div className="text-center">
                    <div className="text-4xl md:text-6xl font-bold tabular-nums text-slate-400 drop-shadow-lg">
                      {time.milliseconds}
                    </div>
                    <div className="text-xs md:text-sm text-slate-500 mt-2 uppercase tracking-widest font-medium">
                      CS
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 md:gap-4 flex-wrap">
                  {!isRunning ? (
                    <button
                      onClick={handleStart}
                      className="h-14 md:h-16 px-8 md:px-12 text-base md:text-lg font-semibold rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 border-0 text-white flex items-center gap-2"
                    >
                      <Play className="h-5 w-5" />
                      Start
                    </button>
                  ) : (
                    <button
                      onClick={handleStop}
                      className="h-14 md:h-16 px-8 md:px-12 text-base md:text-lg font-semibold rounded-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 shadow-lg hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 border-0 text-white flex items-center gap-2"
                    >
                      <Pause className="h-5 w-5" />
                      Pause
                    </button>
                  )}

                  {isRunning && (
                    <button
                      onClick={handleLap}
                      className="h-14 md:h-16 px-8 md:px-12 text-base md:text-lg font-semibold rounded-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 border-0 text-white flex items-center gap-2"
                    >
                      Lap
                    </button>
                  )}

                  <button
                    onClick={handleReset}
                    disabled={milliseconds === 0}
                    className="h-14 md:h-16 px-6 md:px-8 text-base md:text-lg font-semibold rounded-full border-2 border-slate-600 hover:border-slate-500 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-30 disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    <RotateCcw className="h-5 w-5" />
                    Reset
                  </button>
                </div>

                {isRunning && (
                  <div className="flex items-center justify-center gap-2 mt-8">
                    <div className="relative">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute" />
                      <div className="w-3 h-3 bg-green-400 rounded-full relative" />
                    </div>
                    <span className="text-xs md:text-sm text-slate-400 uppercase tracking-wider font-medium">
                      Running
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl animate-pulse" />

              <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 shadow-2xl h-full">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Laps</h2>
                  {laps.length > 0 && (
                    <button
                      onClick={() => setLaps([])}
                      className="p-2 rounded-lg hover:bg-slate-700/50 transition-colors text-slate-400 hover:text-white"
                      title="Clear all laps"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  )}
                </div>

                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {laps.length === 0 ? (
                    <p className="text-slate-500 text-sm text-center py-8">No laps recorded yet</p>
                  ) : (
                    laps.map((lap, index) => (
                      <div
                        key={lap.id}
                        className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30 hover:bg-slate-700/50 transition-colors"
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-slate-400 text-sm font-medium">Lap {index + 1}</span>
                          <span className="text-emerald-400 font-semibold">
                            {formatTime(lap.lapTime).minutes}:{formatTime(lap.lapTime).seconds}.
                            {formatTime(lap.lapTime).milliseconds}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-500 text-xs">Total</span>
                          <span className="text-slate-300 text-xs">
                            {formatTime(lap.totalTime).minutes}:{formatTime(lap.totalTime).seconds}.
                            {formatTime(lap.totalTime).milliseconds}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StopWatch
