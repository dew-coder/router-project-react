import React from 'react'
import frame from "../assets/frame.png";
import LoginForm from "../components/LoginForm"
import Signupform from "../components/Signupform"


const Template = ({formtype, heading, head1, head2, image, setLogged}) => {
  return (
    <div>
      <div>
        <div>{heading}</div>
        <div>{head1}</div>
        <div>{head2}</div>

        {
            formtype == "signup" ? (<Signupform setLogged = {setLogged}/>) : (<LoginForm setLogged = {setLogged} />)
        }

        <div></div>
        <div>OR</div>
        <div></div>

        <button>Sign up with google</button>
      </div>

      <div>
        <img src={frame} alt="frame" width={558} height={504} loading='lazy'/>
        <img src={image} alt="image" width={558} height={490} loading='lazy'/>
      </div>

    </div>
  )
}

export default Template
