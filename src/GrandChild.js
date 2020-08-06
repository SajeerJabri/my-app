// ============= Data Passing Using Consumer ===============
import React from 'react';
import {FirstName, LastName} from './App'

const GrandChild=(props) => {
  return (
    <FirstName.Consumer>
    {(fname)=>{
      return (
        <LastName.Consumer>
          {(lname)=>{
            return <h1>Hello My Name is {fname} {lname}.</h1>
          }}
        </LastName.Consumer>
      );
    }}
    
    </FirstName.Consumer>
   
  );
}
export default GrandChild;