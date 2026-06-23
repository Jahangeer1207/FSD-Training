import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";


function Login(){

    const navigate = useNavigate();

    const [roll,setRoll] = useState("");
    const [password,setPassword] = useState("");

    const [message,setMessage] = useState("");


    const handleLogin = async(e)=>{

        e.preventDefault();


        try{

            const response = await api.post(
                "/auth/login",
                {
                    roll,
                    password
                }
            );


            localStorage.setItem(
                "token",
                response.data.token
            );


            localStorage.setItem(
                "student",
                JSON.stringify(response.data.student)
            );


            navigate("/dashboard");


        }
        catch(error){

            setMessage(
                "Invalid Roll Number or Password"
            );

        }

    }



    return(

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-5">

                    <div className="card shadow">

                        <div className="card-header bg-primary text-white">

                            <h3>
                                Student Login
                            </h3>

                        </div>


                        <div className="card-body">


                            <form onSubmit={handleLogin}>


                                <div className="mb-3">

                                    <label>
                                        Roll Number
                                    </label>

                                    <input
                                    className="form-control"
                                    value={roll}
                                    onChange={
                                        e=>setRoll(e.target.value)
                                    }
                                    />

                                </div>



                                <div className="mb-3">

                                    <label>
                                        Password
                                    </label>

                                    <input
                                    type="password"
                                    className="form-control"
                                    value={password}
                                    onChange={
                                        e=>setPassword(e.target.value)
                                    }
                                    />

                                </div>



                                <button
                                className="btn btn-success w-100">

                                    Login

                                </button>


                            </form>


                            {
                                message &&
                                <div className="alert alert-danger mt-3">

                                    {message}

                                </div>
                            }


                        </div>


                    </div>


                </div>


            </div>


        </div>

    )

}


export default Login;