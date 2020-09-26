import React from 'react';
import './App.css';
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";

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
