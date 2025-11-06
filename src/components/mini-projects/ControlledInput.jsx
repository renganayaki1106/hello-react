import React, {useState, useEffect, useRef} from 'react'

const ControlledInput = () => {
    const [input, setInput] = useState('');
    const [error, setError] = useState('')
    const inputRef = useRef(null);
 
    const clearInput = () => {
        setInput(prev => prev = "");
    }
    useEffect( () => {
      inputRef.current?.focus();
      if(input.length > 20) {
        setError('You reached maximum characters');
      }else {
        setError('')
      }
    }, [input])

    const handleSubmit = (e) => {
       e.preventDefault();
       console.log('Synthetic Event:', e);
       alert(inputRef.current.value);
       inputRef.current.value = "";
    }
    
  return (
    <div className='all-app'>
        <h1>Controlled Input App</h1>
        <input type="text" 
        value={input} 
        placeholder='Type something...' 
        onChange={(e) => setInput(e.target.value)}
        disabled={input.length > 20}
        />
        <p style={{color:'red'}}>{error}</p>
        <h3>{input}</h3>
        <p>Input length : {input.length}</p>
        <button className='btn' onClick={clearInput}>Clear</button>

         <hr style={{margin:'30px'}} />

         <h1>UnControlled Input App [useRef - automatic focus when Render]</h1>
         <input type="text" ref={inputRef} />
         <button className='btn' onClick={handleSubmit}>Get Input Value</button>
    </div>
  )
}

export default ControlledInput