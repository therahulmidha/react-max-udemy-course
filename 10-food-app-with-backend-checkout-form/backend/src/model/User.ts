import * as mongoose from 'mongoose';
import * as jwt from 'jsonwebtoken';
import appSettings from '../appSettings';
import * as Joi from "joi";
import { EventSchema } from './Event';
const UserSchema: mongoose.Schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    events: {
        type: [EventSchema],
        required: false,
    }
});

// private key generated via following command and kept in env:
// node -e "console.log(require('crypto').randomBytes(32).toString('hex'));"
UserSchema.methods.generateAuthToken = function () {
    return jwt.sign({ _id: this._id }, <string>appSettings.ACCESS_TOKEN_SECRET);
}

export const User = mongoose.model('User', UserSchema);

// export const validateUser = (user: any) => {
//     const schema = Joi.object({
//         email: Joi.string().required().email(),
//         password: Joi.string().required()
//     });

//     return schema.validate(user);
// }
