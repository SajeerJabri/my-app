import React, {useContext} from 'react';
import ContextData from '../context/ContextData';
import StdDetail from './stdDetail';

const StdInformation = () => {
    const {records} = useContext(ContextData);
    return (
        <div>
        <h1>STUDENT DETAILS</h1>
        <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Course</th>
            </tr>
            {records.map((record,index) => (<StdDetail id={record.id} key={record.id} record={record} />))}
            
        </table>
        </div>
    );
}

export default StdInformation;
