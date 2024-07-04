import React from 'react'
import { Link } from 'react-router-dom'
import { useCounter } from './CounterContext'


export default function CounterWithContext() {

    const {state, dispatch} = useCounter()


  return (
    <>
      <div>
        <h1>Counter</h1>
        <h1>{state.count}</h1>
        <button onClick={() => dispatch({type: 'INCREMENT'})}>+</button>
        <button onClick={() => dispatch({type: 'DECREMENT'})}>-</button>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
    </>
  )
}
