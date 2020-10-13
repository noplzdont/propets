import React from 'react';
import Start from "./Start";
import {Route, Switch} from "react-router-dom";
import Home from "./Home";

const Main = () =>
{
    return (
        <div style = {{paddingTop: "70px"}}>
            <Switch>
                <Route path = {["/", "/start"]}
                       exact render = {(args) => <Start {...args}/>}/>
                <Route path = {["/home"]}
                       exact render = {(args) => <Home {...args}/>}/>
            </Switch>
        </div>
    );
};

export default Main;
