import CardModel from "../models/cardModel.js";

export const getAll = async (req, res) => {
    try{
        const posts = await CardModel.find({});
        res.json(posts); 
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message: "Не вдалось отримати товари",
        }); 
    }
}