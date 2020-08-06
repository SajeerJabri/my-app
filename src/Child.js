import React from 'react';
import GrandChild from './GrandChild';
import SiblingGrandChild from './SiblingGrandChild';

const Child=(props) => {
  return(
		<>
  	<GrandChild fname={props.fname} lname={props.lname} />
		<SiblingGrandChild fname={props.fname} lname={props.lname} />
		</>
  	);
}
export default Child;