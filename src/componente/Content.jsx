import React from "react"
import { Switch, Route } from "react-router-dom";

const Content = (props) => {
    return (
        <div className='content'>
            <Switch>
                <Route path='/dashboard'>
                    <Dashborad />
                </Route>
                <Route path='/'>
                    <Mensagem/>
                </Route>
                <Route path='*'>
                    <NotFound/>
                </Route>
            </Switch>
        </div>  
    )
}
export default Content;