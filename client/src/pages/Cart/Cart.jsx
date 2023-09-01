
import { useSelector } from "react-redux";
import OrderItem from "../../components/OrderItem/OrderItem";

import "./Cart.scss";

import card_background from "../../img/Card-B.png";
import ButtonLink from "../../components/ButtonLink/ButtonLink";
import { useEffect, useState } from "react";
import Form from "../../components/Form/Form";
export default function Cart(){

    const order = useSelector(state => state.order.order)
    console.log(order)
    const [total, ChangeTotal] = useState(0)
    const [discount, ChangeDiscount] = useState(0)
    const [open, ChangeOpen] = useState(false);
    const handleOpen = () => {
        ChangeOpen(true);
    }
    const handleTotal = () => {
        const regex = /[0-9]+\.[0-9]+$/
        let counterTotal = 0;
        let counterDiscount = 0
        for(let i = 0; i < order.length; i++){
            let q=parseInt(order[i].quantity);
            if(parseInt(order[i].quantity) < 1){
                q = 0;
            }
            const current = order[i].currentPrice.match(regex);
            const old = order[i].oldPrice.match(regex);
            counterTotal += q*current[0];
            counterDiscount += q*(old[0]-current[0]);
        }
        ChangeTotal(counterTotal)
        ChangeDiscount(counterDiscount);
    }
    useEffect(()=>{
        handleTotal();
    })
    return(
        <>
            <div className="cart-p">
                <div className="cart-p__banner" style={{ backgroundImage: `url("${card_background}")` }}>
                    <h1 className="cart-p__banner-title">CART</h1>
                </div>
                <div className="cart-p__order-section">
                    <div className="cart-p__orders">
                        {
                            order.map((option, index) => (
                                <OrderItem
                                    imgUrl={option.imgUrl}
                                    title={option.title}
                                    oldPrice={option.oldPrice}
                                    currentPrice={option.currentPrice}
                                    quantity={option.quantity}
                                />
                            ))
                        }
                    </div>
                    <h1 className="cart-p__total">Total Cost {total} $</h1>
                    <h1 className="cart-p__discount">Discount {discount} $</h1>
                    {!open &&
                        <span className="cart-p__button" onClick={handleOpen}>
                            <ButtonLink
                                text="To order"
                                className="blue"
                            />
                        </span>
                    }
                    {open && 
                    <>
                    <Form/>
                    </>}
                </div>
            </div>
            
        </>
    )
}

