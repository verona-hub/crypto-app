import React from 'react';

// Semantic-UI
import { Table } from "semantic-ui-react";


const MarketTableItem = ({ item }) => {

    const {
        market_cap_rank,
        image, name,
        symbol, current_price,
        market_cap, price_change_percentage_24h,
        circulating_supply
    } = item;

    // Check if 24hr price change is positive or negative and add the according className
    const numClass = Math.sign(price_change_percentage_24h) === -1 ? `negative-number` : `positive-number`;

    return (
        <Table.Row className="MarketTableItem">
            <Table.Cell> {market_cap_rank} </Table.Cell>
            <Table.Cell className='name'> <img src={image} alt='coin logo'/> {name} </Table.Cell>
            <Table.Cell> {symbol.toUpperCase()} </Table.Cell>
            <Table.Cell> &#36;{current_price} </Table.Cell>
            <Table.Cell> &#36;{market_cap} </Table.Cell>
            <Table.Cell
                className={ numClass }>
                {price_change_percentage_24h.toFixed(2)} &#37;
            </Table.Cell>
            <Table.Cell> {circulating_supply} {item.symbol.toUpperCase()} </Table.Cell>
        </Table.Row>
    );
};


export default MarketTableItem;