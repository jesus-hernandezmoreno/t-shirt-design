import React, { useRef, useEffect } from 'react'
import { useClickOutside } from "../hooks/useClickOutside";

const Tab = ({ children, handleHideTab }) => {
  const wrapperRef = useRef(null);
  const [isVisible] = useClickOutside(wrapperRef);

  useEffect(() => {
    if (!isVisible) {
      handleHideTab("")
    }
  }, [isVisible]);

  return (
    <div
      ref={wrapperRef}
      className="absolute left-full"
    >
      {children}
    </div>
  )
}

export default Tab