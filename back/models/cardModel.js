import mongoose from "mongoose";

const CardSchema = mongoose.Schema({
    tag:{
        type: String,
        required: true
    },
    imgUrl: String,
    title:{
        type: String,
        required: true,
    },
    oldPrice:{
        type: String,
        required: true,
    },
    currentPrice:{
        type: String,
        required: true,
    },
    starAmount:{
        type: Number,
        required: true,
    },
});

export default mongoose.model("cards", CardSchema);


