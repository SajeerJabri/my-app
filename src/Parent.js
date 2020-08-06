import React from 'react';
import Child from './Child';

const Parent=(props) => {
  return(
  <Child fname={props.fname} lname={props.lname} />
  );
}
export default Parent;