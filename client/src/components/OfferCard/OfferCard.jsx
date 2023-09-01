
import "./OfferCard.scss";

export default function OfferCard({cardData}){
    return(
        <div className={`offer-card__card offer-card__card_${cardData.index}`}>
                <h3 className={`offer-card__pre-header_${cardData.index}`}>{cardData.preHeader}</h3>
                <h1 className={`offer-card__header offer-card__header_${cardData.index}`}>{cardData.header}</h1>
            </div>
    )
}