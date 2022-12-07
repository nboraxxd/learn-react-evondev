// stateless functional component là functional component không sử dụng state
// stateful functional component là functional component có sử dụng state
// 1. enabling state: useState(initialize state)
// 2. initialize state: useState(false), initialize có thể là boolean, number, string, undefined, null, array, object
// [title, setTitle] [isActive, setIsActive] [on, setOn]
// 3. reading state:
// 4. update state
// không viết state trong vòng lặp, trong câu điều kiện, function

import React, { useState } from 'react'
import './Toggle.scss'

function Toggle() {
  const [on, setOn] = useState(false)

  return (
    <div className="toggle">
      <div className={`toggle-outer ${on ? 'active' : ''}`} onClick={() => setOn(!on)}>
        <div className="toggle-spinner"></div>
      </div>
      <div className="toggle-control">
        <p className="toggle-off" onClick={() => setOn(false)}>
          OFF
        </p>
        <p className="toggle-on" onClick={() => setOn(true)}>
          ON
        </p>
      </div>
    </div>
  )
}

export default Toggle
