import { useState } from 'react';
import './login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = ({ setLoginUser }) => {
    const navigate = useNavigate()
    const [user, setuser] = useState({
        email: "",
        password: "",
    })
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setuser({ ...user, [name]: value })
    }
    const login = () => {
        axios.post("http://localhost:9002/login", user).then((response) => {
            alert(response.data.message)
            setLoginUser(response.data.user)
            navigate("/")
        })
    }
    return (
        <div>
            <div className="login">
                <h1>Login</h1>
                <input type="text" onChange={handleChange} name="email" value={user.email} placeholder="Enter your Email" />
                <input type="password" onChange={handleChange} name="password" value={user.password} placeholder="Enter your Password" />
                <div className="button" onClick={login}>
                    Login
                </div>
                <div>or</div>
                <div className="button" onClick={() => navigate("/register")}>
                    Register
                </div>
            </div>
        </div>
    )
}

export default Login
