import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';

// Context
import { MyStateManagement } from './components/Context/MyStateManagement';
// Components
import Coins from "./components/Pages/Coins";
import Exchanges from "./components/Pages/Exchanges";
import Homepage from './components/Pages/Homepage';
import Navbar from "./components/Navbar/Navbar";
import Wiki from './components/Pages/Wiki';


const App = () => {

    /// Initial State Management
    // Components Data
    const [marketData, setMarketData] = useState([]);
    const [coinsData, setCoinsData] = useState([]);
    const [exchangeData, setExchangeData] = useState([]);
    const [wikiData, setWikiData] = useState([]);
    // Other states
    const [coin, setCoin] = useState('');
    const [search, setSearch] = useState('');
    const [activeNav, setActiveNav] = useState('home');

    return (
        <BrowserRouter>
            <MyStateManagement.Provider value={{
                marketData, setMarketData,
                coinsData, setCoinsData,
                exchangeData, setExchangeData,
                wikiData, setWikiData,
                coin, setCoin,
                search, setSearch,
                activeNav, setActiveNav
            }}>
                <div className='App'>
                    <Navbar />
                    <Routes>
                        <Route
                            exact path='/'
                            element={ <Homepage /> }
                        />
                        <Route
                            path='coins'
                            element={ <Coins /> }
                        />
                        <Route
                            path='exchanges'
                            element={ <Exchanges /> }
                        />
                        <Route
                            path='wiki'
                            element={ <Wiki /> }
                        />
                    </Routes>
                </div>
            </MyStateManagement.Provider>
        </BrowserRouter>
    );
};


export default App;

