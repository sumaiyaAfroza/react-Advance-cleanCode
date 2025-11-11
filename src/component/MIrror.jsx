import React from 'react';

const Mirror = ({messageColor, onColorChange}) => {
  const handleChangeColor =() => {
onColorChange('black')
  }
  return (
    <div>
      <div style={{ color: messageColor }} className="text-2xl font-bold">
        Hello world
      </div>
      <button
        onClick={handleChangeColor}
        className="mt-4 px-5 py-2 bg-green-500 text-white rounded-lg cursor-pointer hover:bg-green-600 transition"
      >
        Change color from child
      </button>
    </div>
  );
};

export default Mirror;