import React from "react";
import loginimg from  "../assets/login.png";
import Template from "../components/Template";

function Login({setLogged}) {
  return (
    <div>
      <Template
        formtype = "login"
        heading = "Welcome Back"
        head1 = "Build skills for today, tomorrow, and beyond."
        head2 = "Education to future-proof your career."
        image = {loginimg}
        setLogged = {setLogged}
        />
    </div>
  );
}
export default Login;
