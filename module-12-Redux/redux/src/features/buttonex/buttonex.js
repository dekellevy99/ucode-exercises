import React from 'react'
import { useDispatch } from 'react-redux';
import { generateRandomNumber } from '../randomCounter/randomCounterSlice';
import { increment } from '../counter/counterSlice';


export default function Buttonex() {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => {dispatch(generateRandomNumber()); dispatch(increment())}}>
        Click Me
      </button>
    </div>
  )
}
