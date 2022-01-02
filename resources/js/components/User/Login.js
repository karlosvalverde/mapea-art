import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

// export default class Login extends React.Component {
const Login = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [dataForm,setDataForm] = useState({
        "name":"",
        "password":""
    });

    const onLogin = () => {
        if(dataForm.name!="" && dataForm.password!=""){
            const _formData = new FormData();
            _formData.append("name",dataForm.name)
            _formData.append("password",dataForm.password)
            const requestOptions = {
                method: 'POST',
                body: _formData
            };
            fetch('api/login', requestOptions)
            .then(res => res.json())
            .then(json =>{
                console.log(json)
            });
        }
    }

    // constructor(props) {
    //     super(props);
    //     this.addFormData = this.addFormData.bind(this);
    // }

    //Form Submission
    // addFormData(evt) {
    //     evt.preventDefault();
    //     const fd = new FormData();
    //     fd.append("name", this.refs.myName.value);
    //     fd.append("password", this.refs.password.value);

    // //call api
    // axios
    //     .post("api/login", fd)
    //     .then(res=> {
    //         //Success alert
    //         if(res["data"]["status"] === "error") {
    //             alert("Error!");
    //         } else {
    //             alert("You have been logged-in successfully");
    //         }   this.myFormRef.reset();
    //     });
    // }

    // const [msg,setMsg] = useState("");
    // const [username, setUsername] = useState("");
    // const [pass, setPass] = useState("");
    // const [user, setUser] = useState({
    //     name: "",
    //     password:""
    // });

    // let navigate = useNavigate();

    // const { name, password } = user;
    // const onInputChange = e => {
    //     setUser({ ...user, [e.target.name]: e.target.value });
    // };

    // const signIn = () =>
    // {
    //     const users = { username };  // To Store Email in Localstore and send to Home Page

    //     if(user.name === "") {
    //         alert("Insere um Nome válido...")
    //     } else if(user.password === "") {
    //         alert("Insere uma Senha válida...")
    //     };

    //     // useEffect(() => {
    //     //     fetch("api/researcher/search/all")
    //     //         .then((res) => res.json())
    //     //         .then(
    //     //             (result) => {
    //     //                 setIsLoaded(true);
    //     //                 setResearchers(result.researchers);
    //     //             },
    //     //             // Note: it's important to handle errors here
    //     //             // instead of a catch() block so that we don't swallow
    //     //             // exceptions from actual bugs in components.
    //     //             (error) => {
    //     //                 setIsLoaded(true);
    //     //                 setError(error);
    //     //             }
    //     //         );
    //     // }, []);

    //     axios
    //         .post("api/reactlogin/", user)
    //         .then(response => {
    //             setMsg(response.data);
    //             localStorage.setItem("users", response.data);
    //             window.location.href="/";
    //     });
    // }

    // render() {
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
                                            type="text"
                                            name="name"
                                            // value={name}
                                            // onChange={e => onInputChange(e)}
                                            onChange={(e) => setDataForm({...dataForm,"name":e.target.value})}
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
                                            // value={password}
                                            // onChange={e => onInputChange(e)}
                                            onChange={(e) => setDataForm({...dataForm,"password":e.target.value})}
                                            className="form-control bg-primary border border-dark "
                                            placeholder="Insere o Password..."
                                        />
                                    </div>
                                    <button type="submit" className="is-login btn btn-outline-dark w-100" onClick={() => onLogin()}>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    // }
}

export default Login;
