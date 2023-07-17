import React from 'react'
import { useSnapshot } from 'valtio';

import state from '../store';
import { getContrastingColor } from '../config/helpers';

const CustomButton = ({ disabled, type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if (type === 'filled') {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color)
      }
    } else if (type === "outline") {
      return {
        borderWidth: '1px',
        borderColor: snap.color,
        color: snap.color
      }
    }
  }

  return (
    <button
      disabled={disabled}
      className={`px-3 py-2 flex-1 rounded-md font-joystix disabled:bg-[#3e3e3e] bg-[#13181e] text-white ${customStyles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton