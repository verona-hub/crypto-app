import React, { useContext, useEffect } from 'react';
import axios from "axios";

// Context
import { MyStateManagement } from '../../Context/MyStateManagement';
// Semantic-UI
import { Container } from 'semantic-ui-react'
// Components
import MarketTable from "./Market/MarketTable";



const Market = () => {

    // Import state from Context
    const { setMarketData } = useContext(MyStateManagement);

    // Api request params: get market data from CoinGecko
    const config = {
        method: 'GET',
        url: 'https://api.coingecko.com/api/v3/coins/markets',
        params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 10,
            page: 1
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    useEffect(() => {
        async function fetchData() {
            const response = await axios(config);
            setMarketData(response.data);
        }
        // added empty .then() because of Idea bug: "Promise returned from fetchData is ignored"
        fetchData().then();
    }, []);


    return (
        <Container className='Market'>
            <h2> Today's Cryptocurrency Prices by Market Cap </h2>
            <MarketTable />
        </Container>
    );
};


export default Market;