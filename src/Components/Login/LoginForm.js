import React, { useState } from "react";
import {Link} from 'react-router-dom'
import Input from "../Form/Input";
import Button from "../Form/Button";



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
            <Input label="úsuario" name="username" type="text"/>
            <Input label="senha" name="password" type="password"/>
            <Button>Entrar</Button>
             
          </form>
        <Link to="/login/criar">Cadastro</Link>
        
     </section>

    )
}

export default LoginForm;