
import aboutImg from "../../img/AboutUs_Home.png";
import organicFoodIcon from "../../img/AboutUs_Home_icon1.svg";
import qualityStandards from "../../img/AboutUs_Home_icon2.svg";

import ButtonLink from "../ButtonLink/ButtonLink";

import "./AboutComponent.scss";
import "./Card.scss";

export default function AboutComponent(){

    return(
        <div className="about">
            <div className="about__image">
                <img src={aboutImg} alt="about" />
            </div>
            <div className="about__description">
                <h3 className="about__pre-header">About Us</h3>
                <h1 className="about__header">
                    We Believe in Working
                    Accredited Farmers
                </h1>
                <p className="about__text">
                Simply dummy text of the printing and typesetting industry. Lorem had ceased to 
                been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley.
                </p>
                <div className="about__cards">
                    <div className="card">
                        <div className="card__rectangle">
                            <img src={organicFoodIcon} alt="organic" />
                        </div>
                        <div className="card__description">
                            <h1 className="card__header">Organic Foods Only</h1>
                            <p className="card__text">
                                Simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            </p>
                        </div>
                    </div>
                    <div className="card">
                    <div className="card__rectangle">
                            <img src={qualityStandards} alt="quality" />
                        </div>
                        <div className="card__description">
                            <h1 className="card__header">Quality Standards</h1>
                            <p className="card__text">
                                Simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            </p>
                        </div>
                    </div>
                </div>
                <ButtonLink
                    text="Shop Now"
                    className="blue"/>
            </div>
        </div>
    )
}