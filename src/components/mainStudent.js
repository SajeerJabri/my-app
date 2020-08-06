import React, {useContext, useState} from 'react';
import ContextData from '../context/ContextData';
import StdInformation from './stdInformation';

const MainStudent = () => {
    const {addStudent} = useContext(ContextData);
    const [data, setData] = useState({
        rollno : '',
        name : '',
        course : ''
    });
    function SubmitHandler(event){
        event.preventDefault();
        addStudent({
            id : data.rollno,
            name : data.name,
            course : data.course
        })
    };
    function handleChange(evt){
        const value = evt.target.value;
        setData({
            ...data,
            [evt.target.name] : value
        })
    }
    return (
        <>
        <StdInformation />
            <hr/>
            <form onSubmit={SubmitHandler}>
            <label htmlFor="rollno">Roll Number</label>
                <input type="number" name="rollno" value={data.rollno} required placeholder="Enter Roll No." onChange={handleChange}/>
                <hr/>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={data.name} required placeholder="Enter Name" onChange={handleChange}/>
                <hr/>
                <label htmlFor="name">Course</label>
                <input type="text" name="course" value={data.course} required placeholder="Enter Course" onChange={handleChange}/>
                <hr/>
                <input type="submit" value="Add Student"/>
            </form>
        </>
    );
}

export default MainStudent;
