import React from 'react';
import './App.css';
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";

function App()
{
    return (
        <div className="mainframe">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
