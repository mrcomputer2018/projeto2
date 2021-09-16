import React from "react"
import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Cadastro"
import Home from "../pages/Home";
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
                <Route path='/login'>
                    <Login />
                </Route>
                <Route path='/' exact>
                    <Home/>
                </Route>
                <Route path='*'>
                    <NotFound/>
                </Route>
            </Switch>
        </div>  
    )
}
export default Content;