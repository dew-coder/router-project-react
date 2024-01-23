import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Toast, toast } from 'react-hot-toast';


const Signupform = ({setLogged}) => {
    const [formData, setformData] = useState(
        {
            firstname : "",
            lastname : "",
            email : "" ,
            password : "",
            confirmpass : ""
        }
    )

    const [pass , setPass] = useState(false);
    const [confirmpass , setconfirmPass] = useState(false);

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

        if(formData.password !== formData.confirmpass){
            toast.error("password do not match")
            return;
        }
        
        setLogged(true);
        toast.success("Account created successfully");
        navigate("/Dashboard");
    }

  return (
    <form onSubmit={onclickhandler}>
        <div>
            <button>Student</button>
            <button>Instructor</button>
        </div>

        <div>
            <label htmlFor="firstname">First Name <sup>*</sup></label>
            <input 
            id='firstname' 
            required 
            type='text' 
            placeholder='Enter First Name' 
            onChange={changeHandler} 
            value={formData.firstname} name='firstname'/>

            <label htmlFor="lastname">Last Name<sup>*</sup></label>
            <input 
            id='lastname' 
            required 
            type='text' 
            placeholder='Enter Last Name' 
            onChange={changeHandler} 
            value={formData.lastname} name='lastname'/>
        </div>

        <div>
            <label htmlFor="email">Email Address <sup>*</sup></label>
            <input 
            id='email' 
            required 
            type='text' 
            placeholder='Enter Email id' 
            onChange={changeHandler} 
            value={formData.email} name='email'/>
        </div>

        <div>
            <label htmlFor="pass">Create Password <sup>*</sup></label>
            <input 
            id='pass' 
            required 
            type= {pass ? "text" : "password"}
            placeholder='Enter Password' 
            onChange={changeHandler} 
            value={formData.password} name='password'/>
            <span onClick={() => {
                setPass((prev) => !prev);
            }}>
                {pass ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
            </span>
            <Link to="#"><p>Forgot Password</p></Link>

            <label htmlFor="confirmpass">Confirm Password <sup>*</sup></label>
            <input 
            id='confirmpass' 
            required 
            type= {confirmpass ? "text" : "password"}
            placeholder='Confirm  Password' 
            onChange={changeHandler} 
            value={formData.confirmpass} name='confirmpass'/>
            <span onClick={() => {
                setconfirmPass((previ) => !previ);
            }}>
                {confirmpass ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
            </span>
            <Link to="#"><p>Forgot Password</p></Link>
        </div>
        
        <button>Create Account</button>
    </form>
  )
}

export default Signupform
