import React, {useState}from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min'
import {Link} from 'react-router-dom'

function LoginComponent() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Kiểm tra tài khoản
        if (email === 'admin@gmail.com' && password === 'letmein') {
            // Nếu đúng, chuyển hướng sang trang /home
            navigate('/home');
        } else {
            // Nếu sai, hiển thị lỗi
            setError('Invalid email or password.');
        }
    };
    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
                <h3 className="text-center mb-4">Login</h3>
                <form>
                    <div className="mb-3">
                        <label htmlFor="id" className="form-label">Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="id" 
                            placeholder="Enter your email" 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            placeholder="Enter your password" 
                            required 
                        />
                    </div>
                    <Link to={'/home'}className="btn btn-primary w-100" type="submit">Login</Link>
                </form>
                
            </div>
        </div>
    );
}

export default LoginComponent;
