import React from "react";
import { useState } from "react";
import "../componentStyle/form.css"
import { FiArrowLeft} from "react-icons/fi";
import { Link, Navigate } from "react-router-dom";

const Login =()=> {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const submit = async (e)=> {
        e.preventDefault()
        const response = await fetch('https://zacky-news.up.railway.app/api/user/login', {
            method:'POST',
            headers: {'Content-Type':'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                username,
                password,
            
            })
        });
        if (response.status==200) {
                return <Navigate to="/" />
                
        }
    }




    return (
        <div>
            <section id="Login">
                
                <form className="login-container" onSubmit={submit}>
                <Link to="/">
                     <FiArrowLeft />
                </Link>
                    <h2>Login</h2>
                    <input type="username" placeholder="Username" onChange={e=>{setUserName(e.target.value)}} required />
                    <input type="password" placeholder="Password" onChange={e=>{setPassword(e.target.value)}} required/>
                    <button type="submit">Login</button>
                </form>
            </section>

        </div>
    )
}

export default Login