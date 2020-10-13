import React from 'react';
import style from "../module/feed.module.css";
import LostFoundForm from "./Lost_Found_Form";
import Profile from "./account/Profile";
import {Route, Switch} from "react-router-dom";

const Feed = () =>
{
    return (
        <div className = {style.div_wrapper}>
            <Switch>
                <Route path = {"/account"}
                       exact render = {(args) => <Profile {...args}/>}/>
                <Route path = {"/lost_form"}
                       exact render = {(args) => <LostFoundForm {...args}/>}/>
                <Route path={"/found_form"}
                       exact render = {(args) => <LostFoundForm {...args}/>}/>
            </Switch>
        </div>
    );
};

export default Feed;
