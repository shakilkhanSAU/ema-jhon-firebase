import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const { name, img, seller, price, stock, star } = props.product;
    return (
        <div className="product">
            <div style={{ marginRight: '15px' }}>
                <img src={img} alt="" />
            </div>
            <div>
                <h1 className="product-name">{name}</h1>
                <p>by: {seller}</p>
                <h3 style={{ color: 'crimson', fontSize: '24px' }}>${price}</h3>
                <p><small>Only {stock} are avilable in stock - Order Soon</small></p>
                <Rating
                    readonly
                    initialRating={star}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    className="icon"
                ></Rating>
                <br />

                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className="btn-regular"
                >{cartIcon} Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;