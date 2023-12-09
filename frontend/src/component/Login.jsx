import React from 'react'
import { useNavigate } from 'react-router-dom'


function Login() {
    const navigate=useNavigate();
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button style={{marginLeft:"20px"}} type="submit" className="btn btn-primary" onClick={()=>navigate('/signup')}>New user?</button>
            </form>
        </div>
    )
}

export default Login
