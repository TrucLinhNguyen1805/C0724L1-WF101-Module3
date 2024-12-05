import React , {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import { getStudentById } from '../service/studentService';
function DetailComponent(){
    const [student, setStudent] = useState({id: "", name: ""})

    const {id} = useParams();// useLocal() => truyền một đối tượng

    useEffect(()=>{
        setStudent(()=>({
            ... getStudentById(id)
        }));
    },[])
    return(
        <>
            <h3> Chi tiết</h3>
            <p>ID: {student.id}</p>
            <p>Name:{student.name} </p>
            <p>Phone:{student.phone} </p>
            <p>Email:{student.email} </p>
        </>
    )
}
export default DetailComponent;