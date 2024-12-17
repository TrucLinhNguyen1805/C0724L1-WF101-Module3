import React,{useEffect, useRef, useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import { deleteStudentById, getAllStudent, searchStudentById, searchStudentByName } from "../service/studentService";
import {Link} from 'react-router-dom'
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
function ListComponent(){
    const [studentList, setStudentList] = useState([]);
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [deleteStudent, setDeleteStudent] = useState({id:'', name:''}); 
    const searchRef = useRef();
    const [editStudent] = useState([]);
    useEffect( ()=>{
        const fetchData = async ()=>{
            const list = await getAllStudent();
            setStudentList(list);
        }
        fetchData();
        
    }, [isLoading]);
    const handleClose =()=>{
        setShow((pre) => !pre);
    }
    const handleShow =(student)=>{
        setShow((pre) => !pre);
        setDeleteStudent(student);

    }
    const handleDelete =()=>{
        deleteStudentById(deleteStudent.id);
        console.log(getAllStudent());
        setIsLoading((pre=> !pre));
        handleClose();
    }
    const handleSearch =()=>{
        let searchName = searchRef.current.value;
        const fetchData = async ()=>{
            const searchList = await searchStudentByName(searchName);
            setStudentList(searchList);
        }
        fetchData();
    }
    return(
        <>
                
                <h2>Student List</h2>
                <input ref={searchRef} name={'searchName'} placeholder={'Enter Search'}/>
                <button className={'btn btn-sm btn-success'} type={'button'} onClick={handleSearch}>Search</button><br/>
                
                <button className={'btn btn-sm btn-primary'}>
                    <Link style={{ color: 'white', textDecoration: 'none' }} to={'/student/create'}>Add new Product</Link>
                </button>
                
                <table className={'table table-gray'}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Interest</th>
                        <th>Location</th>
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
                            <td>{e.gender}</td>
                            <td>{e.interest}</td>
                            <td>{e.location.name}</td>
                            <td>
                                <button  className={'btn btn-sm btn-primary'}>Edit
                                </button>
                            </td>
                            <td>
                                <button onClick={()=>{
                                    handleShow(e);
                                }} className={'btn btn-sm btn-danger'}>Delete
                                </button> 
                            </td>
                            <td>
                            <Link to={'/products/detail/'+e.id} className={'btn btn-secondary btn-sm'}>Detail</Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Delete student</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Bạn có muốn xóa sinh viên {deleteStudent.name} không??</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        Delete
                    </Button>
                    </Modal.Footer>
                </Modal>
            </>
    )
}
export default ListComponent;