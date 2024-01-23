import React from "react";
import signimg from  "../assets/signup.png";
import Template from "../components/Template";

function Signup({setLogged}){
    return (
        <div>
            <Template
                formtype = "signup"
                heading = "Join the millions learning to code with StudyNotion for free"
                head1 = "Build skills for today, tomorrow, and beyond."
                head2 = "Education to future-proof your career."
                image = {signimg}
                setLogged = {setLogged}
            />
        </div>
    );
}
export default Signup