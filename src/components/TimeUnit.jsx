import React from 'react';

const TimeUnit = ({value, label }) => {
  return (
    <div className="text-center">
      <div className="text-6xl md:text-8xl font-bold tabular-nums text-white drop-shadow-lg">
        {value}
      </div>
      <div className="text-xs text-slate-500 mt-2 uppercase tracking-widest font-medium">
        {label}
      </div>
    </div>
  );
};

export default TimeUnit;