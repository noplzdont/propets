import React, {useState} from 'react';
import './App.css';
import Header from "./component/Header";
import Footer from "./component/Footer";
import Content from "./component/Content";
import {StateProvider} from "./store/store";

function App()
{
    return (
        <StateProvider>
            <div className = "mainframe">
                <Header/>
                <Content/>
                <Footer/>
            </div>
        </StateProvider>
    );
}

export default App;
