import "./Testimonials.scss";

import Testimonial from "../Testimonial/Testimonial";
import TestimonialNavigation from "../TestimonialNavigation/TestimonialNavigation";
import TestimonialsCounter from "../TestimonialsCounter/TestimonialsCounter";


export default function Testimonials(){

    return(
        <div className="testimonials">
            <div className="testimonials__container">
                <div className="testimonials__content">
                    <div className="testimonials__headers">
                        <h2 className="testimonials__pre-header">Testimonials</h2>
                        <h1 className="testimonials__header">What Our Customer Saying?</h1>
                    </div>
                    <Testimonial/>
                    <TestimonialNavigation/>
                </div>
                <hr className="testimonials__hr" />
                <div className="testimonials__counters">
                    <TestimonialsCounter number="100%" value="Organic"/>
                    <TestimonialsCounter number="285" value="Active Product"/>
                    <TestimonialsCounter number="350+" value="Organic Orchards"/>
                    <TestimonialsCounter number="25+" value="Years of Farming"/>
                </div>
            </div>
        </div>
    )
}