// ================= Data Passing using useContext ======================

import React, {useContext} from 'react';
import {FirstName, LastName} from './App'

const SiblingGrandChild=(props) => {
  const fname = useContext(FirstName)
  const lname = useContext(LastName)
  return (
    <h1>Welcome to {fname} {lname} in our Page.</h1>
      );
}
export default SiblingGrandChild;