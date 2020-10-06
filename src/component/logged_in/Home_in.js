import React from 'react';
import Sidebar from "../Sidebar";
import Feed from "../Feed";
import Sidespace from "../Sidespace";

const HomeIn = () =>
{
    return (
        <div className="d-flex justify-content-center">
            <Sidebar/>
            <Feed/>
            <Sidespace/>
        </div>
    );
};

export default HomeIn;
