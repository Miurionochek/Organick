
import { useEffect, useState } from "react";

import "./Cart.scss";

import cart from "../../img/Cart.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Cart(){
    const order = useSelector(state => state.order.order);

    return(
        <Link to={"/cart"} style={{textDecoration: "none"}}>
            <div className="cart">
                <button className="cart__button">
                    <img src={cart} alt="cart" className="cart__img" />
                </button>
                <h1 className="cart__title">
                    Cart
                    &#40;{order.length}&#41; 
                </h1>
            </div>
        </Link>
    )
}