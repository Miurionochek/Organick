
import img from "../../img/Hero-Img.png";

import ButtonLink from "../ButtonLink/ButtonLink";

import "./Hero.scss";


export default function Hero(){

    return(
        <div className="hero">
            <div className="hero__description">
                <p className="hero__pre-header">100% Natural Food</p>
                <h1 className="hero__header">
                    Choose the best 
                    healthier way
                    of life
                </h1>
                <ButtonLink text={"Explore Now"} className="orange"/>
            </div>
            <div className="hero__image">
                <img src={img} alt="img" className="hero__img" />
            </div>
        </div>
    )
}