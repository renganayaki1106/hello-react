import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [count,setCount] = useState(0);
    const [arr] = useState([1,2,3,4,5]);
    const total = useMemo( () => {
        console.log("Calculating total")
        return arr.reduce( (a,b) => a+b,0);
    }, [arr])
  return (
    <div className='all-app'>
        <h1>UseMemo Hook</h1>
        <h2>Memo value : {total}</h2>
        <h3>Count : {count}</h3>
        <button onClick={() => setCount(count+1)}>Increment</button>
    </div>
  )
}

export default UseMemo