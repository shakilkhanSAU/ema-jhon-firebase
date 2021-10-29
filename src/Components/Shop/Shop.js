import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Header/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb'
import './Shop.css'
import { Link } from 'react-router-dom';


const Shop = () => {
    // all state here
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([])

    // load data with fetch
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProducts(data)
            })
    }, []);

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                console.log(key, savedCart[key])
                const Addedproduct = products.find(product => product.key === key);
                if (Addedproduct) {
                    storedCart.push(Addedproduct);
                    const quantity = savedCart[key];
                    Addedproduct.quantity = quantity;
                }
            }
            setCart(storedCart)
        }
    }, [products]);
    // update cart 
    const handleAddToCart = (product) => {
        let newCart;
        const exist = cart.find(pd => pd.key === product.key);
        if (exist) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, product]
        }
        else {
            product.quantity = 1;
            setCart(newCart)
        }
        setCart(newCart)
        // save to local storage
        addToDb(product.key)
    };

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts)
        console.log(matchedProducts.length)
    };
    return (
        <>
            <div className="search-container">
                <input
                    placeholder="Search Products"
                    onChange={handleSearch}
                    type="text"
                />
            </div>

            <div className="shop">
                <div className="product-container">
                    {
                        displayProducts.map(product => <Product
                            product={product}
                            key={product.key}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>

                <div style={{ position: 'relative', marginTop: '2px' }}>
                    <div className="cart">
                        <Cart cart={cart}>
                            <Link to="/review">
                                <button className="btn-regular">Review Order</button>
                            </Link>
                        </Cart>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;