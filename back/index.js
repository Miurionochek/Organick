import express from "express";
import mongoose from "mongoose";


import {CardController,OrderController, TestimonialsController} from "./controllers/index.js";
import cors from "cors";

const app = express();

const user = "ivanfedoniukkn2021";
const password = "1w2q3r4e3"

mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.uuqtosr.mongodb.net/organick?retryWrites=true&w=majority`)
.then(() => {console.log("DB Ok")})
.catch((err) => {console.log("DB error: " + err)})

app.use("/img",express.static("img"));
app.use(express.json());
app.use(cors());

app.get("/cards", CardController.getAll)
app.get("/testimonials", TestimonialsController.getAll)

app.post("/cart", OrderController.createOrder)

app.listen(4444, (err) => {
    if(err){
        return console.log(err);
    }

    console.log("Server Ok")
})