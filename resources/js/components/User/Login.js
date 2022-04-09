import React, { useContext } from 'react';
import { ResearchersContext } from '../../context';

import { Grid,Paper, Avatar, TextField, Button, Typography,Link as Nv } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link, NavLink } from "react-router-dom";
import {useState} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const Login = props => {

    const researchersContext = useContext(ResearchersContext);

    const {
        setAuthed
    } = researchersContext;

    const navigate = useNavigate();
    // const auth = useAuth();

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#3370bd'}
    const btnstyle={margin:'8px 0'}

    const [msg,setMsg] = useState('');

    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");

    const [user, setUser] = useState({
        email: "",
        password:""
      });

    const {email,password} = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const signIn = () => {

      const users = { username };  // To Store Email in Localstore and send to Home Page

       if(user.email === '')
       {
         alert('Email Field is empty')
       }
       else if(user.password === '')
       {
         alert('Pass Field is empty')
       }
    //    auth.login(user);

       axios.post("api/reactlogin/",user)
            .then(response => {
                setMsg(response.data);
                setAuthed(true);
                localStorage.setItem("users",response.data);
                navigate("/");
        });
    }

    return(
        <div className='container-fluid vh-100 bg-secondary bg-gradient'>
            <div className='h-100 p-5'>
                <Grid>
                    <Paper className='bg-secondary' elevation={10} style={paperStyle}>
                        <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                            <h2>Login</h2>
                            <h4 style={{color:"green"}}>{msg}</h4>
                        </Grid>
                        <TextField label='Email' name="email" value={email} onChange={e => onInputChange(e)} placeholder='Enter Email' type='text' fullWidth required/>
                        <TextField label='Password'  name="password" value={password}  onChange={e => onInputChange(e)} placeholder='Enter password' type='text' fullWidth required/>

                        <Button type='submit' onClick={signIn} color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                    </Paper>
                </Grid>
            </div>
        </div>
    )
}

export default Login
