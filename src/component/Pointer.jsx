import {useState} from 'react';


export const Pointer = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })
  const handlePointerMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY
    })
  }
  return (
    <div
      className="relative w-screen h-screen cursor-none"
      onPointerMove={handlePointerMove}
    >
      <div
        className="absolute w-5 h-5 bg-red-500 rounded-full -left-2.5 -top-2.5 pointer-events-none"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
    </div>
  )
}