import { useState } from "react";
import ButtonLink from "../ButtonLink/ButtonLink";


import "./Form.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { pushOrder,deleteOrder } from "../../redux/order";

export default function Form(){
    const dispatch = useDispatch();
    const order = useSelector(state => state.order.order);
    const [name, ChangeName] = useState("");
    const [email, ChangeEmail] = useState("");
    const [address, ChangeAddress] = useState("");
    const [phone, ChangePhone] = useState("");
    const [message, ChangeMessage] = useState("");

    const handleChangeName = (event) => {
        event.preventDefault();
        ChangeName(event.target.value)
    }
    const handleChangeEmail = (event) => {
        event.preventDefault();
        ChangeEmail(event.target.value)
    }
    const handleChangeAddress = (event) => {
        event.preventDefault();
        ChangeAddress(event.target.value)
    }
    const handleChangePhone = (event) => {
        event.preventDefault();
        ChangePhone(event.target.value)
    }
    const handleChangeMessage = (event) => {
        event.preventDefault();
        ChangeMessage(event.target.value)
    }
    const handleSend = () => {
        dispatch(pushOrder({
            name:name,
            email:email,
            address:address,
            phone:phone,
            message:message,
            order:order
        }))
        dispatch(deleteOrder())

    }

    return(

        <div className="form">
            <div className="form__row">
                <div className="form__container">
                    <label htmlFor="name" className="form__l">Full Name*</label>
                    <input 
                        type="text" 
                        className="form__i" 
                        id="name" 
                        placeholder="Your Email Address"
                        onChange={handleChangeName}
                    />
                </div>
                <div className="form__container">
                    <label htmlFor="email" className="form__l">Your Email*</label>
                    <input 
                        type="email" 
                        className="form__i" 
                        id="email" 
                        placeholder="example@yourmail.com"
                        onChange={handleChangeEmail}
                    />
                </div>
            </div>
            <div className="form__row">
                <div className="form__container">
                    <label htmlFor="address" className="form__l">Address*</label>
                    <input 
                        type="text" 
                        className="form__i" 
                        id="address" 
                        placeholder="your company  address"
                        onChange={handleChangeAddress}
                    />
                </div>
                <div className="form__container">
                    <label htmlFor="tel" className="form__l">Phone number*</label>
                    <input 
                        type="tel" 
                        className="form__i" 
                        id="tel" 
                        placeholder="Enter your phone"
                        onChange={handleChangePhone}
                    />
                </div>
            </div>
            <div className="form__row">
                <div className="form__message-container">
                    <label htmlFor="mes" className="form__l">Message</label>
                    <textarea 
                        type="text" 
                        className="form__t" 
                        id="mes" 
                        placeholder="some extra information"
                        onChange={handleChangeMessage}
                    />
                </div>
            </div>
            <div className="form__confirm">
                <Link to={"/thanks"} style={{textDecoration: "none"}} onClick={handleSend}>
                    <ButtonLink
                        text="Confirm"
                        className="blue"
                    />
                </Link>
            </div>
        </div>
    )
}