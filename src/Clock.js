import React, {useState} from 'react';
import './Clock.css';

const Clock=() => {
	const [count, setCount] = useState(0)
	var time = new Date().toLocaleTimeString();
	const [time1, setTimer] = useState(time)
	const[clockTime, setClockTime] = useState(time)
	setInterval(()=>{setClockTime(new Date().toLocaleTimeString())},1000)
  return (
  	<div className='container'>
	    <div>
	     <h1>Increment Project.</h1>
	     <h3>{count}</h3>
	     <button style={{padding: "10px 25px"}} onClick={()=>setCount(count+1)}>Click Me</button>
	    </div>
	    <br/>
	    <hr/>
	    <br/>
	    <div>
	    	<h1>Date And Time</h1>
	    	<h2>{time1}</h2>
	    	<button style={{padding: "10px 25px"}} onClick={()=>{setTimer(new Date().toLocaleTimeString())}} >Get Time</button>
	    </div>
	    <br/>
	    <hr/>
	    <br/>
	    <div>
	    	<h1>Clock</h1>
	    	<h2>{clockTime}</h2>
	    </div>
    </div>
  );
}
export default Clock;