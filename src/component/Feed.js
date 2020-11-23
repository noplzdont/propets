import React from 'react';
import style from "../module/feed.module.css";
import PostExpandable from "./post/Post_expandable";

const Feed = () =>
{
    return (
        <div className = {style.div_wrapper}>
            <PostExpandable/>
            <PostExpandable/>
        </div>
    );
};

export default Feed;
