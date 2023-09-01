import mongoose from "mongoose";

const OrderSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    },
    order:{
        type: Object,
        required: true,
    }
});

export default mongoose.model("orders", OrderSchema);