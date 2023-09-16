import TestimonialsModel from "../models/testimonialModel.js";

export const getAll = async(req, res) => {
    try{
        const testimonials = await TestimonialsModel.find({});
        res.json(testimonials);
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message: "Не вдалось отримати відгуки",
        });
    }
}