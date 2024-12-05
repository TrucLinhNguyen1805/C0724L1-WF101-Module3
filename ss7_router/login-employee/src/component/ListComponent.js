import React,{useState, useEffect} from 'react'
import { getAllEmployee } from '../service/employeeService';
function ListComponent(){
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
                {/* <button className={'btn btn-sm btn-success'}>
                    <Link style={{ color: 'white', textDecoration: 'none' }} to={'/student/create'}>Add new Product</Link>
                </button> */}
                
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
                                <button  className={'btn btn-sm btn-primary'}>Edit
                                </button>
                            </td>
                            <td>
                                <button  className={'btn btn-sm btn-danger'}>Delete
                                </button> 
                            </td>
                            <td>
                            {/* <Link to={'/products/detail/'+e.id} className={'btn btn-secondary btn-sm'}>Detail</Link> */}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                
            </>
    )
}
}
export default ListComponent;