import React from 'react';
import './Login.css'

const Login = (props) => {
    return (
        <div className="login">
            <form type="submit">
                <h1>login</h1>
                <input type="text" name="" placeholder="email do usuario"/>
                <input type="password" name="" placeholder="senha"/>
                <input type="submit" value="login"/>
            </form>
        </div>
    )
}
export default Login;
