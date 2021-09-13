import React from "react"
import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const Content = (props) => {
    return (
        <div className='content'>
            <Switch>
                <Route path='/dashboard'>
                    <Dashboard />
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