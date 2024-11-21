import React, { useEffect, useRef, useState } from "react";
import { getAllStudent, searchByName } from "../service/studentService";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import AddComponent from "./AddComponent";
import DeleteComponent from "./DeleteComponent";


const ListComponent = () => {
    const [studentList, setStudentList] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [isShowModal,setIsShowModal] = useState(false);
    const [deleteStudent,setDeleteStudent] = useState({});
    const searchNameRef = useRef();
    useEffect(()=>{
        setStudentList(()=>(
            [
                ...getAllStudent()
            ]
        ))
    }, [isLoading]);
    const handleShowModal = (students)=>{
        setDeleteStudent(()=>({
            ...students 
        }));
        setIsShowModal(prevState=> !prevState);
    }
    const handleIsLoading = ()=>{
        setIsLoading((prevState) => !prevState)
    }
    const handleSearch = ()=>{
        const searchName = searchNameRef.current.value;
        const listSearch = searchByName(searchName)
        setStudentList (()=>[
            ...listSearch
        ])
    }
    const handleCloseModal=()=>{
       setIsShowModal (prevState=> !prevState);
    }
    return(
        <>
                <AddComponent handleIsLoading = {handleIsLoading}/>
                <h2>Student List</h2>
                <form>
                    <input placeholder="Search" ref={searchNameRef}/>
                    <button className={'btn btn-sm btn-success'} type="button" onClick={handleSearch}>Search</button>
                </form>
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
                                <button onClick={()=>{handleShowModal(e)}} className={'btn btn-sm btn-danger'}>Delete
                                </button> 
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <DeleteComponent handleIsLoading={handleIsLoading} handleShowModal={handleShowModal} isShowModal={isShowModal} deleteStudent={deleteStudent} handleCloseModal={handleCloseModal}/>
            </>
    )
}
export default ListComponent;