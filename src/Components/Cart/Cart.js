import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let totalQuantity = 0;
    let total = 0;
    if (cart) {
        for (const product of cart) {
            if (!product.quantity) {
                product.quantity = 1;
            }
            total = total + product.price * product.quantity;
            totalQuantity = totalQuantity + product.quantity;
        }
    }

    const shipping = total ? 10 : 0;
    const tax = (total + shipping) * .10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h2>Order Summary:</h2>
            <hr />
            <h5>Items Orders: {totalQuantity} </h5>
            <hr />
            <p>total: {total.toFixed(2)}</p>
            <hr />
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <hr />
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
            {props.children}
        </div>
    );
};

export default Cart;