import React, {useContext} from 'react';
import ContextData from '../context/ContextData';

const StdDetail = (props) =>{
    const {deleteStudent} = useContext(ContextData);
    return(
    <>
        <tr>
            <td>{props.record.id} </td>
            <td>{props.record.name} </td>
            <td>{props.record.course} </td>
            <button onClick={()=> deleteStudent(props.id)}>Delete Student</button>
        </tr>
     </>
     )
}

export default StdDetail;
