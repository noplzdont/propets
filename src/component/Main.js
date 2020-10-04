import React from 'react';
import Home from "./Home";
import {Route} from "react-router-dom";
import HomeIn from "./logged_in/Home_in";

const Main = () =>
{
    return (
        <div>
            <Route path={["/", "/home"]}
                   exact render={(args) => <HomeIn {...args}/>}/>
        </div>
    );
};

export default Main;
