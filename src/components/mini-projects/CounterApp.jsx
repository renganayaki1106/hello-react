import React, {useReducer} from 'react'

function reducer(state, action) {
    switch(action.type) {
        case "increment" :
            return {count : state.count+1};
        case "decrement" :
            return {count : state.count-1};
        default :
            return state;
    }
}

const CounterApp = () => {
    // Counter App using useReducer
    const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div className='all-app'>
        <h1>Counter App using useReducer</h1>
        <h2>{state.count}</h2>
        <button className='btn' onClick={() => dispatch({type: "increment"})}>increment</button>
        <button className='btn' onClick={() => dispatch({type: "decrement"})}>decrement</button>
    </div>
  )
}

export default CounterApp