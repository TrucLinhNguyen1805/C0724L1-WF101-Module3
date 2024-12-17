import React, { useRef } from "react";
function LoginComponent(){
    const usernameRef = useRef();
    const passwordRef = useRef();
    const handleLogin = ()=>{
        let username = usernameRef.current.value;
        let password = passwordRef.current.value;
        const loginInfo ={
            username: username,
            password: password
        }
        console.log(loginInfo);
        
    }
    return(
        <form>
            <h2>Login</h2>
            <div>
                <label></label>
            </div>
        </form>
    )
}