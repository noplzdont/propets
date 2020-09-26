import React from 'react';
import DOG_SMALL from "../images/dog_small.png";

const Home = () =>
{
    return (
        <div className = "container-fluid">
            <main className = "container row">
                <div className = "col-xl-6 col-12 col-lg-6">
                    <h2>Welcome to your pawfessional community</h2>
                </div>
                <div className = "col-xl-6 col-12 col-lg-6">
                    <img src = {DOG_SMALL}/>
                </div>
            </main>
        </div>
    );
};

export default Home;
