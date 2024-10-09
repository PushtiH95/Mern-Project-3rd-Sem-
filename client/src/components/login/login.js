import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"


const Login=({ setLoginUser})=>{

    const history = useHistory()

    const [ user, setUser]=useState({
        email:"",
        password:"",
        
    })

    const handleChange = e =>{
        const { name, value} =e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/")
        })
    }
    
    return(
        <div className="login">
            {console.log("User",user)}
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} placeholder="enter your email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="enter your password" onChange={ handleChange }></input>
            <div className="button">Login</div>
            <div>or</div>
            <div className="button">Register</div>
        </div>
    )
}

export default Login
