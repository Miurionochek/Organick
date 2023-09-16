import ButtonLink from "../ButtonLink/ButtonLink";
import "./Subscription.scss";

export default function Subscription(){

    return(
        <div className="subscription">
            <h1 className="subscription__title">
                Subscribe to
                our Newsletter
            </h1>
            <div className="subscription__send">
                <input type="email" className="subscription__input" placeholder="Your Email Address" />
                <ButtonLink
                    text="Subscribe"
                    className="blue"
                />
            </div>
        </div>
    )
}