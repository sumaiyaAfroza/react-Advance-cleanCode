import React, {useRef, useState} from 'react';

const useStopWatch = () => {
  const [startTime, setStartTime] = useState(null)
  const [now, setNow] = useState(null)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef(null)
  const [laps, setLaps] = useState([])
  const startInterval = () => {
    intervalRef.current =  setInterval(() => {
      setNow(Date.now())
    }, 10)
  }
  const elapsed = startTime && now ? now - startTime : 0

  const start = () => {
    setStartTime(Date.now() - elapsed)
    setIsRunning(true)
    startInterval()
  }

  const pause = () => {
    if(intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    setIsRunning(false)
  }

  const reset = () => {
    pause()
      setNow(null)
      setLaps([])
  }

  const recordLap = () => {
    if(!startTime || !isRunning) return
    const currentTime = Date.now() - startTime
    const lapTime = laps.length > 0 ? currentTime - laps[laps.length - 1].totalTime : currentTime
    setLaps(prev => [...prev, {
      lapsNumber : prev.length + 1,
      totalTime : currentTime,
      lapTime,
    }])
  }

  const deleteLap = (lapsNumber) => {
    setLaps(prevState => prevState.filter(lap => lap !== lapsNumber) )
  }

  const resumeLap = (totalTime) => {
    pause()
    setStartTime(Date.now() - totalTime)
    setIsRunning(true)
    startInterval()


  }


  return {
    elapsed,start,pause, recordLap , reset , deleteLap , resumeLap , isRunning , laps
  }
};

export default useStopWatch;

