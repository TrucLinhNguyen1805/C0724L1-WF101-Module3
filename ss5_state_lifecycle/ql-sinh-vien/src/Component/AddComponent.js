import React, { useRef, useState } from "react";
import { addNewStudent, getAllStudent } from "../service/studentService";
function AddComponent({handleIsLoading}){
    
    //hook
    const nameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
  
    const handleSave = () => {
        addNewStudent({
            name: nameRef.current.value,
            phone: phoneRef.current.value,
            email: emailRef.current.value,
        });
        console.log(getAllStudent());
        handleIsLoading();
    }
    return(
        <> 
            <h2>Add Student</h2>
            <form>
                <label>Name:</label>
                <input name={'name'} ref={nameRef}/><br></br>
                <label>Phone:</label>
                <input name={'phone'} ref={phoneRef}/><br></br>
                <label>Email:</label>
                <input name={'email'} ref={emailRef}/><br></br>
                <button className={'btn btn-sm btn-primary'} onClick={handleSave} type="button">Save</button>
            </form>
        </>
    )
}
export default React.memo(AddComponent);

//mục đích của việc sử dụng React.memo() là để tránh render lại những conponent con không cần thiết