import React from 'react';
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Sidespace from "./Sidespace";

const Main = () =>
{
    return (
        <div style = {{
            backgroundColor: "#669885",
            height: "100%"
        }}>
            <div className = "container d-flex justify-content-center">
                <Sidebar/>
                <Feed/>
                <Sidespace/>
            </div>
        </div>
    );
};

export default Main;
