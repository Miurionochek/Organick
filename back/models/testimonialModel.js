import mongoose from "mongoose";

const TestimonialSchema = mongoose.Schema({
    imgUrl: {
        type: String,
        required: true,   
    },
    starAmount:{
        type: Number,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    }
});

export default mongoose.model("testimonials", TestimonialSchema);