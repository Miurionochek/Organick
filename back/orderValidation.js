import { body } from "express-validator";

export const orderValidation = [
    body("quantity", "quantity should be more than 0 and integer").isInt().isLength({min: 1}),
    body("name", "Name length should have min 3 symbols").isLength({min: 3}),
    body("email", "Wrong email address").isEmail(),
    body("address", "Your location must contain more than 5 symbols").isLength({min: 5}),
    body("phone", "Fill this field").notEmpty(),
    body("message").optional(),
]