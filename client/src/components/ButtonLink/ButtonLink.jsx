
import rightArrow from "../../img/right-arrow.svg";

import "./ButtonLink.scss";
import "./Colors.scss";

export default function ButtonLink({text, className}){

    return(
        <button className={`button-link ${className}`}>
            <h5 className="button-link__text">{text}</h5>
            <div className="button-link__circle">
                <img src={rightArrow} alt="arrow" className="button-link__img" />
            </div>
        </button>
    )
}