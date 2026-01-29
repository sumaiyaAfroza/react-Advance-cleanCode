export const ControlButton = ({ onClick, disabled, variant = "default", icon: Icon, children }) => {
  const variants = {
    start: "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:shadow-purple-500/50",
    pause: "bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 hover:shadow-red-500/50",
    lap: "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 hover:shadow-emerald-500/50",
    reset: "border-2 border-slate-600 hover:border-slate-500 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white"
  }

  const baseClasses = "h-14 md:h-16 px-6 md:px-8 text-base md:text-lg font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
  const disabledClasses = "disabled:opacity-30 disabled:hover:scale-100 disabled:cursor-not-allowed"

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${variant !== "reset" ? "text-white border-0" : ""} ${disabledClasses}`}
    >
      {Icon && <Icon className="h-5 w-5" />}
      {children}
    </button>
  )
}