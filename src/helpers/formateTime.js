export const formateTime = (ms) => {
  const totalSecond = Math.floor(ms / 1000)
  const hours = Math.floor(totalSecond / 3600)
  const minutes = Math.floor((totalSecond % 3600) / 60)
  const seconds = Math.floor(totalSecond  % 60)
  const milliSeconds = Math.floor(ms % 1000 ) / 10

  return {
    hours: hours.toString().padStart(2, "0"),
    minutes: minutes.toString().padStart(2, "0"),
    seconds: seconds.toString().padStart(2, "0"),
    milliSeconds: milliSeconds.toString().padStart(2, "0")
  }
}