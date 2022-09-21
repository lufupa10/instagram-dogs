import React, { useState } from "react";
import {Link} from 'react-router-dom'


const LoginForm = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function handlerLogin(event) {
        event.preventDefault()
       fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        }),
       }).then((response)=> {
        console.log('response', response)
        return response.json()
       }).then((json)=> {
        console.log('json', json);
        return json
       })
        
    }

    return (
    <section>
          <h1>Login</h1>
          <form onSubmit={handlerLogin}>
            <input type="text" value={username} onChange={({target})=>setUserName(target.value)}></input>
            <input type="text" value={password} onChange={({target})=> setPassword(target.value)}></input>
            <button>Entrar</button>
          </form>
        <Link to="/login/criar">Cadastro</Link>
        
     </section>

    )
}

export default LoginForm;