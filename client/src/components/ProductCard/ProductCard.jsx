
import Broccoli from "../../img/CalabreseBroccoli.png";
import star from "../../img/Star.png";

import "./ProductCard.scss";

const START_AMOUNT = 5;

export default function ProductCard({tag, imgUrl, title, oldPrice, currentPrice, starAmount, handleChangeModal, handleOpen}){
    let starList = [];
    for(let i = 0; i < starAmount; i++){
        starList.push(
        <div className="product-card__star">
            <img src={star} alt="star" />
        </div>
        )
    }

    const handleChange = () => {
        handleChangeModal({tag, imgUrl, title, oldPrice, currentPrice, starAmount});
        handleOpen(true);
    }

    return(
        <div className="product-card" style={{ backgroundImage: `url("${imgUrl}")` }} onClick={handleChange}>
            <button className="product-card__tag">{tag}</button>
            <div className="product-card__description-section">
                <div className="product-card__title-section">
                    <h1 className="product-card__title">{title}</h1>
                    <hr />
                </div>
                <div className="product-card__price-section">
                    <div className="product-card__prices">
                        <h2 className="product-card__old-price">{oldPrice}</h2>
                        <h1 className="product-card__new-price">{currentPrice}</h1>
                    </div>
                    <div className="product-card__rating">
                        {starList}
                    </div>
                </div>
            </div>
        </div>
    )
}