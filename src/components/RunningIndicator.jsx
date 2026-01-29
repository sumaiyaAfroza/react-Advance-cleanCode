export const RunningIndicator = () => (
  <div className="flex items-center justify-center gap-2 mt-8">
    <div className="relative">
      <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute" />
      <div className="w-3 h-3 bg-green-400 rounded-full relative" />
    </div>
    <span className="text-xs md:text-sm text-slate-400 uppercase tracking-wider font-medium">
      Running
    </span>
  </div>
)