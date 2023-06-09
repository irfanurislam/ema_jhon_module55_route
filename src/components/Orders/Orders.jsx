import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
const Orders = () => {
    const savedCart = useLoaderData()
    const [cart,setCart] = useState(savedCart)
    //  console.log(cart)
    const handleRemoveFromCart  = (id) =>{
        // console.log(id)
        const remaining = cart.filter(pd => pd.id !== id)
        setCart(remaining)
        removeFromDb(id)
    }

    // clear cart

    const handleClearCart = () =>{
        setCart([])
        deleteShoppingCart()
    }








    return (
        <div className='shop-container'>
            <div className='review-container'>
                {/* <h2>ordesr  page {cart.length}</h2> */}
                {
                    cart.map(product => <ReviewItem
                    key = {product.id}
                    product = {product}
                    handleRemoveFromCart  = {handleRemoveFromCart }
                    ></ReviewItem>)
                }
                
                </div>
                <div className='cart-container'>
                 <Cart cart = {cart}
                 handleClearCart = {handleClearCart}
                 >
                    <Link className='proceed-link' to="/checkout">
                        <button className='btn-proceed'>
                            <span>Procced</span>
                            <FontAwesomeIcon  icon={faArrowAltCircleRight} />
                            </button>
                    </Link>
                 </Cart>
                </div>
        </div>
    );
};

export default Orders;