import * as mongoose from 'mongoose';
import * as jwt from 'jsonwebtoken';
import appSettings from '../appSettings';
import * as Joi from "joi";
import { EventSchema } from './Event';
const MealItemSchema: mongoose.Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
});

// private key generated via following command and kept in env:
// node -e "console.log(require('crypto').randomBytes(32).toString('hex'));"
// MealItemSchema.methods.generateAuthToken = function () {
//     return jwt.sign({ _id: this._id }, <string>appSettings.ACCESS_TOKEN_SECRET);
// }

export const MealItem = mongoose.model('MealItem', MealItemSchema);

// export const validateUser = (user: any) => {
//     const schema = Joi.object({
//         email: Joi.string().required().email(),
//         password: Joi.string().required()
//     });

//     return schema.validate(user);
// }
