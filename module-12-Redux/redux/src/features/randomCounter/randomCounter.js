import { useSelector, useDispatch } from 'react-redux';
import React from 'react'
import {
    generateRandomNumber,
    selectRandomCounter,
} from './randomCounterSlice';



export function RandomCounter() {
    const randomCounter = useSelector(selectRandomCounter)
    const dispatch = useDispatch();
    return (
    <div>
        <p>Random Counter: {randomCounter}</p>
        <button onClick={() => dispatch(generateRandomNumber())}> Generate </button>
    </div>
    )
}
