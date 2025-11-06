import React, {useState, useRef} from 'react'

const Timer = () => {

    const [seconds, setSeconds] = useState(0);
    const timerRef = useRef(null);

    const startTimer = () => {
      if (!timerRef.current) {
      timerRef.current = setInterval( () => {
        setSeconds(prev => prev+1)
      },1000)
    }
    }

    const stopTimer = () => {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  return (
    <div className='all-app'>
        <h1>Timer App [useRef]</h1>
        <h3>{seconds}s</h3>
        <button className='btn' onClick={startTimer}>Start Timer</button>
        <button className='btn' onClick={stopTimer}>Stop Timer</button>
    </div>
  )
}

export default Timer