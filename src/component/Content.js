import React from 'react';
import {Route, Switch} from "react-router-dom";
import Main from "./Main";
import Start from "../store/containers/Start_container";
import ErrorPage from "./ErrorPage";
import {PAGE_HOME, PAGE_START} from "../utils/constants";

const Content = () =>
{
    return (
        <div style = {{paddingTop: "70px"}}>
            <Switch>
                <Route path = {["/", `/${PAGE_START}`]}
                       exact render = {(args) => <Start {...args}/>}/>
                <Route path = {[`/${PAGE_HOME}`]}
                       exact render = {(args) => <Main {...args}/>}/>
                <Route component = {ErrorPage}/>
            </Switch>
        </div>
    );
};

export default Content;
