import "./TestimonialsCounter.scss";

export default function TestimonialsCounter({number, value}){
    return(
        <div className="testimonials-counter">
            <div className="testimonials-counter__inner">
                <h1 className="testimonials-counter__number">{number}</h1>
                <h2 className="testimonials-counter__value">{value}</h2>
            </div>
        </div>
    )
}