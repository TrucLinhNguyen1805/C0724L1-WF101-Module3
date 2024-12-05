import React,{useState, useEffect} from 'react'
import { getAllEmployee } from '../service/employeeService'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
function ListComponent(){
        const [employeeList, setEmployeeList] = useState([]);
        useEffect(()=>{
            setEmployeeList(()=>(
                [
                    ...getAllEmployee()
                ]
            ))
        }, []);
    
    return(
        <>
                
                <h2>Employee List</h2>
                
                <table className={'table table-gray'}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Action</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {employeeList&&employeeList.map((e, i) => (
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{e.name}</td>
                            <td>{e.age}</td>
                    
                            <td>
                                <button  className={'btn btn-sm btn-primary'}>Detail
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