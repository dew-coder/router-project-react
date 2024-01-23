import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Toast, toast } from 'react-hot-toast';

const LoginForm = ({setLogged}) => {
    const [formData, setformData] = useState(
        {email : "" ,
        password : ""}
    )

    const [pass , setPass] = useState(false);

    function changeHandler(event){
        setformData((prev) => (
            {
                ...prev, 
                //to process data on server side
                [event.target.name] : event.target.value
            }
        ))
    }

    const navigate = useNavigate();

    function onclickhandler(event){
        event.preventDefault();
        
        setLogged(true);
        toast.success("logged in successfully");
        navigate("/Dashboard");
    }

  return (
    <form onSubmit={onclickhandler}>
        
        <label htmlFor="email">Email Address <sup>*</sup></label>
        <input 
        id='email' 
        required 
        type='text' 
        placeholder='Enter Email id' 
        onChange={changeHandler} 
        value={formData.email} name='email'/>

        <label htmlFor="pass">Password <sup>*</sup></label>
        <input 
        id='pass' 
        required 
        type= {pass ? "text" : "password"}
        placeholder='Enter  Password' 
        onChange={changeHandler} 
        value={formData.password} name='password'/>
        <span onClick={() => {
            setPass((prev) => !prev);
        }}>
            {pass ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
        </span>
        <Link to="#"><p>Forgot Password</p></Link>
        <button>Sign In</button>
    </form>
  )
}

export default LoginForm
