import React from "react"
import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Cadastro from "../pages/Cadastro";
import Message from "../pages/Message";
import Login from '../pages/Login'
import NotFound from "../pages/NotFound";

const Content = (props) => {
    return (
        <div className='content'>
            <Switch>
                <Route path='/dashboard'>
                    <Dashboard />
                </Route>
                <Route path='/cadastro'>
                    <Cadastro />
                </Route>
                <Route path='/message'>
                    <Message />
                </Route>
                <Route path='/login' exact>
                    <Login/>
                </Route>
                <Route path='/' exact>
                    <Login/>
                </Route>
                <Route path='*'>
                    <NotFound/>
                </Route>
            </Switch>
        </div>  
    )
}
export default Content;