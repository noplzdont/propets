import React from 'react';
import Home from "./Home";
import {Route} from "react-router-dom";

const Main = () =>
{
    return (
        <div>
            <Route path={["/", "/home"]}
                   exact render={(args) => <Home {...args}/>}/>
        </div>
    );
};

export default Main;
