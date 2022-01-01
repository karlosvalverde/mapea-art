import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default function Login() {

    const [msg,setMsg] = useState("");
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");
    const [user, setUser] = useState({
        name: "",
        password:""
    });

    // let navigate = useNavigate();

    const { name, password } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const signIn = () =>
    {
        const users = { username };  // To Store Email in Localstore and send to Home Page

        if(user.name === "") {
            alert("Insere um Nome válido...")
        } else if(user.password === "") {
            alert("Insere uma Senha válida...")
        };

        axios
            .post("http://localhost:8000/api/reactlogin/", user)
            .then(response => {
                setMsg(response.data);
                localStorage.setItem("users",response.data);
                history.push("/dashboard");
        });
    }

    return (
        <div className="container-fluid bg-primary bg-gradient vh-100 overflow-hidden">
            <div className="row h-100">
                <div className="row p-5 h-100">
                    <div className="container col-4 text-center align-self-center">
                        <form>
                            {/* Name */}
                            <div className="input-group my-3 shadow">
                                    <input
                                        size="lg"
                                        type="search"
                                        name="name"
                                        value={name}
                                        onChange={e => onInputChange(e)}
                                        className="form-control bg-primary border border-dark "
                                        placeholder="Insere o Nome..."
                                    />
                                </div>

                                {/* Password */}
                                <div className="input-group my-3 shadow">
                                    <input
                                        size="lg"
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={e => onInputChange(e)}
                                        className="form-control bg-primary border border-dark "
                                        placeholder="Insere o Password..."
                                    />
                                </div>
                                <button className="is-login btn btn-outline-dark w-100" onClick={signIn}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
