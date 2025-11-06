import React, {useState} from 'react'

const Toggle = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible);
    }

    const [isOn, setIsOn] = useState(false);
  return (
    <div className='all-app'>
        <h1>Toggle App</h1>
        <button className='btn' onClick={handleClick}>
            {isVisible ? "Hide" : "Show"}
        </button>
        {isVisible && <h3>Hello, Welcome to my Project UI</h3>}
        
         <hr style={{margin:'30px'}} />
         
        <h1>Light ON/OFF</h1>
        <button className="btn" style={{backgroundColor: isOn ? "yellow" : "gray", color: isOn && 'black'}} onClick={() => setIsOn(!isOn)}>
          {isOn ? "OFF the light" : "On the light"}
        </button>
    </div>
  )
}

export default Toggle