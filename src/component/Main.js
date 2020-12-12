import React, {useEffect} from 'react';
import Sidebar from "../store/containers/Sidebar_container";
import Feed from "./Feed";
import Sidespace from "./Sidespace";
import {PAGE_HOME, PAGE_MAIN} from "../utils/constants";

const Main = (props) =>
{
    useEffect(() =>
    {
        props.mainActionSetCurrentPage(PAGE_MAIN);
    })

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
