import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { toast } from "react-hot-toast";
// import {toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// toast.configure()

function Navbar(props){
    let isLogged = props.isLogged
    let setLogged = props.setLogged
    return (
        <div className="flex mt-3 justify-evenly">
            <Link to="/">
                <img src={logo}/>
            </Link>

            <nav>
                <ul className="flex gap-2">
                    <li>
                        <Link to= "/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to= "/About">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to= "/Contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="flex gap-5">
                {/* these brackets to set conditions */}
                {   !isLogged &&
                    <Link to="/Login" >
                        <button>Log in</button>
                    </Link>
                }
                {   !isLogged &&
                    <Link to="/Signup">
                        <button>Sign up</button>
                    </Link>
                }
                {   isLogged &&
                    <Link to="/">
                        <button onClick={() => {
                        setLogged(false);
                        toast.success("logged out successfully");
                    }}
                    >Log out</button>
                    </Link>
                }
                {   isLogged &&
                    <Link to="/Dashboard">
                        <button>Dashboard</button>
                    </Link>
                }
            </div>
        </div>
    );
}
export default Navbar