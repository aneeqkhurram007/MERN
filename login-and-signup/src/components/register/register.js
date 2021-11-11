import { useState } from 'react'
import './register.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const navigate = useNavigate()
    const [user, setuser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: "",
    })
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setuser({ ...user, [name]: value })
    }
    const register = () => {
        const { name, email, password, reEnterPassword } = user;
        if (name && email && password && (password === reEnterPassword)) {
            axios.post("http://localhost:9002/register", user).then((response) => {
                alert(response.data.message)
                navigate('/login')
            })
        }
        else {
            alert('Invalid Credentials')
        }
    }
    return (
        <div>
            <div className="register">
                <h1>Register</h1>
                <input type="text" onChange={handleChange} name="name" value={user.name} placeholder="Enter your Name" />
                <input type="text" onChange={handleChange} name="email" value={user.email} placeholder="Enter your Email" />
                <input type="password" onChange={handleChange} name="password" value={user.password} placeholder="Enter your Password" />
                <input type="password" onChange={handleChange} name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter your Password" />
                <div className="button" onClick={register}>
                    Register
                </div>
                <div>or</div>
                <div className="button" onClick={() => navigate('/login')}>
                    Login
                </div>
            </div>

        </div>
    )
}

export default Register
