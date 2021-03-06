import React from 'react';
import {Route, Switch} from "react-router-dom";
import Main from "./Main";
import Start from "../store/containers/Start_container";

const Content = () =>
{
    return (
        <div style = {{paddingTop: "70px"}}>
            <Switch>
                <Route path = {["/", "/start"]}
                       exact render = {(args) => <Start {...args}/>}/>
                <Route path = {["/home"]}
                       exact render = {(args) => <Main {...args}/>}/>
            </Switch>
        </div>
    );
};

export default Content;
