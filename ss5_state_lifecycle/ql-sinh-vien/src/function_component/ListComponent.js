import React, { useEffect, useState } from "react";
import { getAllStudent } from "../service/studentService";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import AddComponent from "./AddComponent";


const ListComponent = () => {
    const [studentList, setStudentList] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    useEffect(()=>{
        setStudentList(()=>(
            [
                ...getAllStudent()
            ]
        ))
    }, [isLoading]);

    const handleIsLoading = ()=>{
        setIsLoading((prevState) => !prevState)
    }
    return(
        <>
                <AddComponent handleIsLoading = {handleIsLoading}/>
                <h2>Student List</h2>
                <table className={'table table-gray'}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Action</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {studentList&&studentList.map((e, i) => (
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{e.name}</td>
                            <td>{e.phone}</td>
                            <td>{e.email}</td>
                            <td>
                                <button className={'btn btn-sm btn-success'}>Edit
                                </button>
                            </td>
                            <td>
                                <button className={'btn btn-sm btn-danger'}>Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                
            </>
    )
}
export default ListComponent;