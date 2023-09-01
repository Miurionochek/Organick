import React, { useEffect, useState } from "react";

import "./PopUp.scss";

import ButtonLink from "../ButtonLink/ButtonLink";

import star from "../../img/Star.png";
import { addToOrder } from "../../redux/order";
import { useDispatch } from "react-redux";

export const PopUp = ({tag, imgUrl, title, oldPrice, currentPrice, starAmount, handleClose}) => {
    const dispatch = useDispatch();
    const [quantity, ChangeQuantity] = useState(1)

    const closePopup = () => {
        handleClose(false)
    }


    let starList = [];
    for(let i = 0; i < starAmount; i++){
        starList.push(
        <div className="product-card__star">
            <img src={star} alt="star" />
        </div>
        )
    }
    const handleChange = (event) => {
        event.preventDefault();
        ChangeQuantity(event.target.value)
    }
    const handlePush = () => {
        dispatch(addToOrder({tag, imgUrl, title, oldPrice, currentPrice, starAmount, quantity}));
        handleClose(false)
    }
  return (
    <div className="popup">
        <div className="popup__body">
            <div className="popup__image-section" style={{ backgroundImage: `url("${imgUrl}")` }}>
                <button className="popup__card-tag">{tag}</button>
            </div>
            <div className="popup__describe-section">
                <button className="popup__close" onClick={closePopup}>X</button>
                <h1 className="popup__card-title">{title}</h1>
                <div className="popup__stars">
                    {starList}
                </div>
                <div className="popup__card-prices">
                    <h2 className="popup__card-old-price">{oldPrice}</h2>
                    <h1 className="popup__card-new-price">{currentPrice}</h1>
                </div>
                <p className="popup__text">
                    Simply dummy text of the printing and typesetting industry. 
                    Lorem had ceased to been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley.
                </p>
                <div className="popup__quantity-section">
                    <h3 className="popup__quantity-title">Quantity:</h3>
                    <input type="number" className="popup__input" min={1} onChange={handleChange}/>
                    <button onClick={handlePush}>
                        <ButtonLink
                            text="Add To Cart"
                            className="blue"
                        />
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};