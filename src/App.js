import React, { createContext } from 'react';
import Clock from './Clock';
import Parent from './Parent';
import MainStudent from './components/mainStudent';
import {StudentProvider} from './context/ContextData';

const FirstName = createContext();
const LastName = createContext();
const App=() => {
  return (
  	<>
  	<Clock />
  	<FirstName.Provider value={"Hussain"}>
	  <LastName.Provider value={"Ali"}>
  	<Parent />
	  </LastName.Provider>
  	</FirstName.Provider>
	  <StudentProvider>
	  <MainStudent/>
	  </StudentProvider>

  	</>
  );
}
export { FirstName, LastName };
export default App;

