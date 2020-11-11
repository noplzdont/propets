import React from 'react';
import style from "../module/feed.module.css";
import LostFoundForm from "./post/Lost_Found_Form";
import Profile from "./account/Profile";
import {Link, Route, Switch} from "react-router-dom";
import NewPostForm from "./post/New_post_form";
import PostExpandable from "./post/Post_expandable";

const Feed = () =>
{
    return (
        <div className = {style.div_wrapper}>
            <PostExpandable/>
            <PostExpandable/>
            <PostExpandable/>
            <PostExpandable/>
            <PostExpandable/>
            <PostExpandable/>
            <PostExpandable/>
        </div>
    );
};

export default Feed;
