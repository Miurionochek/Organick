import OrderModel from "../models/orderModel.js";

export const createOrder = async (req, res) => {
    try{
         const doc = new OrderModel({
            name: req.body.name,
            email: req.body.email,
            address: req.body.address,
            phone: req.body.phone,
            message: req.body.message,
            order: req.body.order,
         });

         const post = await doc.save();

         res.json(post);
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message: "Не вдалось створити статтю",
        }); 
    }
}