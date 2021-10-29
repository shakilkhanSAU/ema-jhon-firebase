import React from 'react';
import image from '../../images/giphy.gif'

const PlaceOrder = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Order placed</h1>
            <img src={image} alt="" />
        </div>
    );
};

export default PlaceOrder;