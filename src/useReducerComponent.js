import React from 'react';
import ReducerComponent from './ReducerComponent';

const [state, dispatch] = useReducer(initialValue)

const useReducerComponent=()=>{
    return(
        <button onClick={()=>{dispatch('increment')}} >Increment</button>
        <button onClick={()=>{dispatch('decrement')}}>Decrement</button>
    );
}