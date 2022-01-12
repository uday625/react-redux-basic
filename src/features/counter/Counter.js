import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import {decrement, increment, incrementByAmount} from './counterSlice'

const Counter = () => {

    const counter = useSelector(state => state.counter.var)
    const dispatch = useDispatch()

    return ( 
        <header className="App-header">
        <div className='main'>
          <div><button onClick={()=>dispatch(decrement())}>-</button></div>
          <div>{counter}</div>
          <div><button onClick={()=>dispatch(increment())}>+</button></div>
          <div><button onClick={()=>dispatch(incrementByAmount(33))}>+33</button></div>
        </div>
      </header>
     );
}
 
export default Counter;