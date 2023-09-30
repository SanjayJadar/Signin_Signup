import axios from 'axios';
import React, { useState } from 'react';
import {useNavigate, Link} from 'react-router-dom'

export default function Login() {

    const history = useNavigate();

    const [username, setUsername] = useState('')
    const [Password, setPassword] = useState('')

    async function submit(e){
        e.preventDefault();
        try{
            await axios.post('http://localhost:2000/signup', {username, Password})
            .then(res=>{
                if(res.data=='exist'){
                    alert('User already exists')
                }
                else if(res.data=='notexist'){
                    localStorage.setItem('token', true)
                    history('/home');
                }
            })
            .catch(e=>console.log(e))
        }
        catch(e){
            console.log(e);
        }
    }

  return (
    <div>
        <form action="POST">
            <input type="text" onChange={(e)=>{setUsername(e.target.value)}}/>
            <input type="text" onChange={(e)=>{setPassword(e.target.value)}}/>
            <input type="submit" onClick={submit}/>
        </form>

        <br />
            <p>OR</p>
            <br />

            <Link to="/">Login Page</Link>
    </div>
  )
}
