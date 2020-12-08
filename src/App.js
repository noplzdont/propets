import React from 'react';
import './App.css';
import Footer from "./component/Footer";
import Content from "./component/Content";
import Header from "./store/containers/Header_container";

function App()
{
    return (
            <div className = "mainframe">
                <Header/>
                <Content/>
                <Footer/>
            </div>
    );
}

export default App;
