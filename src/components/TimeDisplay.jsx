import React from 'react';
import TimeUnit from "./TimeUnit.jsx";
import {Separator} from "./Saparator.jsx";

const TimeDisplay = ({ time }) => {


  return (
    <div className="flex items-baseline justify-center gap-1 md:gap-2 mb-12 flex-wrap">
      <TimeUnit value={time.hours} label="Hours" />
      <Separator />
      <TimeUnit value={time.minutes} label="Minutes" />
      <Separator />
      <TimeUnit value={time.seconds} label="Seconds" />
      <div className="text-5xl md:text-7xl font-bold text-slate-600 mb-6">.</div>
      <div className="text-center">
        <div className="text-4xl md:text-6xl font-bold tabular-nums text-slate-400 drop-shadow-lg">
          {time.milliSeconds}
        </div>
        <div className="text-xs md:text-sm text-slate-500 mt-2 uppercase tracking-widest font-medium">
          CS
        </div>
      </div>
    </div>
  )
}

export default TimeDisplay;