// import React from 'react';

const initialValue = {count: 0};
const ReducerComponent=(state,action)=>{
    console.log(state)
    switch (action){
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error();
    }
}

export default ReducerComponent;