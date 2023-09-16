import "./Testimonial.scss";

import avatar from "../../img/Testimonial.jpg";
import star from "../../img/Star.png";

export default function Testimonial(){
    const starAmount = 5; 
    let starList = [];
    for(let i = 0; i < starAmount; i++){
        starList.push(
        <div className="testimonial__star">
            <img src={star} alt="star" />
        </div>
        )
    }
    return(
        <div className="testimonial">
            <div className="testimonial__author-avatar">
                <img src={avatar} alt="" className="testimonial__author-img" />
            </div>
            <div className="testimonial__rate">
                {starList}
            </div>
            <p className="testimonial__text">
                Simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been.
            </p>
            <h1 className="testimonial__author-name">Sarah Tailor</h1>
            <h2 className="testimonial__author-position">Consumer</h2>
        </div>
    )
}