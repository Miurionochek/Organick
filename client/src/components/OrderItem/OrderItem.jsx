import { useState } from "react";
import { deleteOrderItem, updateOrder } from "../../redux/order";
import { useDispatch } from "react-redux";

import "./OrderItem.scss";

export default function OrderItem({imgUrl, title, oldPrice, currentPrice, quantity}){
    const dispatch = useDispatch();
    const [quantityState, ChangeQuantity] = useState(quantity)

    const handleChange = (event) => {
        event.preventDefault();
        ChangeQuantity(event.target.value)
        dispatch(updateOrder({
            title: title,
            quantity: event.target.value
        }))
    }

    const handleDelete = () => {
        dispatch(deleteOrderItem(title));
    }
    return(
        <div className="order-item">
            <div className="order-item__description">
                <div className="order-item__image"  style={{ backgroundImage: `url("${imgUrl}")` }}></div>
                <h1 className="order-item__title">{title}</h1>
                <h3 className="order-item__old-price">{oldPrice}</h3>
                <h3 className="order-item__current-price">{currentPrice}</h3>
            </div>
            <div className="order-item__quantity-section">
                    <h3 className="order-item__quantity-title">Quantity:</h3>
                    <input type="number" className="order-item__input" min={1} onChange={handleChange} value={quantityState}/>
                    <button className="order-item__close" onClick={handleDelete}>X</button>
            </div>
        </div>
    )
}