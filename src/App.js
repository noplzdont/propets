import React from 'react';
import './App.css';
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home";

function App()
{
    return (
        <div className="mainframe">
            <Header/>
            <Home/>
            <Footer/>
        </div>
    );
}

export default App;
