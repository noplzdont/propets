import React, {useState} from 'react';
import './App.css';
import Header from "./component/Header";
import Footer from "./component/Footer";
import Content from "./component/Content";
import {CONTEXT} from "./store/context";

function App()
{
    const initialState =
        {
            authViewTrigger: false
        }

    const [state, setState] = useState(initialState);

    return (
        <CONTEXT.Provider value={state}>
            <div className = "mainframe">
                <Header/>
                <Content/>
                <Footer/>
            </div>
        </CONTEXT.Provider>
    );
}

export default App;
