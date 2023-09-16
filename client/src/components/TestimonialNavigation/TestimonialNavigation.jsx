import "./TestimonialNavigation.scss";

import circle from "../../img/TestimonialNavigation.svg";

import Circle from "../Circle/Circle";

const colorSwitch = [
    {
        color: "#C4C4C4",
    },
    {
        color : "#7EB693"
    }
]

export default function TestimonialNavigation(){
    return(
        <div className="testimonial-navigation">
            <div className="testimonial-navigation__circle">
                <Circle color={colorSwitch[1].color}/>            
            </div>
            <div className="testimonial-navigation__circle">
                <Circle color={colorSwitch[0].color}/>
            </div>
            <div className="testimonial-navigation__circle">
                <Circle color={colorSwitch[0].color}/>
            </div>
        </div>
    )
}