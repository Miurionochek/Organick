
import OfferCard from "../OfferCard/OfferCard";

import "./OfferBanner.scss";

// ONLY 2 OBJECTS!
const offerData = [
    {
        index: 1,
        preHeader: "Natural!!",
        header: "Get Garden Fresh Fruits",
    },
    {
        index: 2,
        preHeader: "Offer!!",
        header: "Get 10% off on Vegetables",
    }
]

export default function OfferBanner(){

    return(
        <div className="offer-banner">
            <div className="offer-banner__card">
                <OfferCard
                    cardData={offerData[0]}
                />
            </div>
            <div className="offer-banner__card">
                <OfferCard
                    cardData={offerData[1]}
                />
            </div>
        </div>
    )
}