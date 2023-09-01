import CardModel from "../models/cardModel.js";

export const getAll = async (req, res) => {
    try{
        const posts = await CardModel.find({});
        console.log(posts)
        res.json(posts); 
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message: "Не вдалось отримати товари",
        }); 
    }
}