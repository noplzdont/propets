import React from 'react';
import style from "../module/feed.module.css";
import LostFoundForm from "./post/Lost_Found_Form";
import Profile from "./account/Profile";
import {Link, Route, Switch} from "react-router-dom";
import NewPostForm from "./post/New_post_form";

const Feed = () =>
{
    return (
        <div className = {style.div_wrapper}>
            {/*<Switch>
                <Route path = {"/account"}
                       exact render = {(args) => <Profile {...args}/>}/>
                <Route path = {"/lost_form"}
                       exact render = {(args) => <LostFoundForm {...args}/>}/>
                <Route path={"/found_form"}
                       exact render = {(args) => <LostFoundForm {...args}/>}/>
            </Switch>*/}
            <Profile/>
            <Profile/>
            <Profile/>
            <Profile/>
        </div>
    );
};

export default Feed;
