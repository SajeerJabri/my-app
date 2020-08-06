import React, {createContext, useReducer} from 'react';
import Reducer from './Reducer';

// testing data

// {
//     id : 0,
//     name : 'Usman',
//     course : "Python"
// },
// {
//     id : 1,
//     name : 'Hussain',
//     course : "JavaScript"
// },
// {
//     id : 2,
//     name : 'Umar',
//     course : "Machine Learning"
// },
// {
//     id : 3,
//     name : 'Hamza',
//     course : "Blockchain"
// },

const stdData = {
    records :[]
}

const ContextData = createContext(stdData);

export const StudentProvider=({children})=>{
    let [state, dispatch] = useReducer(Reducer, stdData)
    function addStudent(stdObj){
        dispatch({
            type : "ADD_STUDENT",
            payload : {
                id : stdObj.id,
                name : stdObj.name,
                course : stdObj.course
            }
        });
    }

    function deleteStudent(id){
        dispatch({
            type : "DELETE_STUDENT",
            payload : id
        });
    }
    return(
        <ContextData.Provider value={{
            records : state.records,
            addStudent,
            deleteStudent
         }}>
            {children}
        </ContextData.Provider>
    )
}

export default ContextData;