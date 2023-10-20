import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './counterSlice';

const Counter = () => {
    let count = useSelector(state => state.counter.count);
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState(0)

    const resetAll = () => {
        setIncrementAmount(0)
        dispatch(reset())
    }
    const addValue = Number(incrementAmount) || 0;

    const handleIncrementByAmount = (e) => {
        e.preventDefault()
        dispatch(incrementByAmount(addValue))
    }
  return (
    <section>
        <p>{count}</p>
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <form onSubmit={handleIncrementByAmount}>

            <input type="number" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)}/>
            <button>Submit</button>
            </form>
            
        </div>
    </section>
  )
}

export default Counter