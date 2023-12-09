import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
export default function Signup() {
    const navigate=useNavigate();
    const [credentials,setCredentials]=useState({username:"",email:"",password:""});
    const handleOnChange=(e)=>{
        const {name,value}=e.target;
        console.log("name",name)
        setCredentials({...credentials,[name]:value});
        
    }

    const handleOnSubmitForm=async (e)=>{
        e.preventDefault();
        const response= await axios.post('http://localhost:4000/api/signup',{credentials})
        console.log(response);
        navigate('/login');
    }
    
    return (
        <div>
            <form onSubmit={handleOnSubmitForm}>
                <div className="mb-3">
                    <label for="username" className="form-label">UserName</label>
                    <input type="text" className="form-control" id="username" name='username' value={credentials.username} onChange={handleOnChange}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name='email' value={credentials.email} onChange={handleOnChange}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={handleOnChange}/>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
                <button style={{marginLeft:"20px"}} className="btn btn-primary" onClick={()=>navigate('/login')}>login</button>
            </form>
        </div>
    )
}
