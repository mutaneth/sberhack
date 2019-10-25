import React, {Component} from 'react';
import shopItemsArray from './shopItemsArray';
import {Button} from "semantic-ui-react";

const Shop = () => {
    const items = shopItemsArray.map((item) => {
        return(
            <div key={item.id} className={'Shop-Container-Item'}>
                <img alt={item.name} src={item.img} />
                <h3>{item.name}</h3>
                <h4>цена: {item.price}</h4>
                <Button color={'green'}>Купить</Button>
        </div>)
    });
        return (
            <div className={'Shop-Container-Main'}>
                <h2 style={{marginTop: '4vh'}}>У ваc 1500 монет!</h2>
            <div className={'Shop-Container'}>

                {items}
            </div>
            </div>
        );
}

export default Shop;