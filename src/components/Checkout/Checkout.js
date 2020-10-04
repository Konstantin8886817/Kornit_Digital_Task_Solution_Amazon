import React from 'react'
import {useStateValue} from '../../StateProvider'
import './Checkout.css';
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";


function Checkout() {

    const [{basket}] = useStateValue();


    return (
        <div className="checkout">
            <div className="checkout__left">
                {basket.length === 0 ? (
                    <div>
                        <h2>Your shopping basket is empty</h2>
                        <p>
                            You have no item in your basket . To buy one or more items, click "Add to Basket" next to
                            items
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title">Your shopping Basket</h2>
                        {basket.map((item,index) => (
                            <CheckoutProduct
                                key={index}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">


                    <Subtotal/>
                </div>
            )}
        </div>
    )
}

export default Checkout
