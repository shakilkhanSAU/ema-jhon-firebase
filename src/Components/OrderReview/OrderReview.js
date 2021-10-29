import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './OrderReview.css';
import { useHistory } from 'react-router';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key)
    }

    const handlePlaceOrder = () => {
        // setCart([]);
        // clearTheCart()
        history.push('/shipping')

    }
    return (
        <div className="shop">
            <div className="product-container">
                {
                    cart?.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <div className="cart">
                    <Cart cart={cart}>
                        <button onClick={handlePlaceOrder} className="btn-regular">Process to shipping</button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;