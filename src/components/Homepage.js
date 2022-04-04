import React from 'react';

// Context
// import { MyStateManagement } from './Context/MyStateManagement';
// Components
import Search from "./Search/Search";


const Homepage = () => {

    return (
        <section className="Homepage">
            <h1> Portfolio Tracker </h1>
            <h3> This is homepage component </h3>

            <Search />

        </section>
    );
};

export default Homepage;
