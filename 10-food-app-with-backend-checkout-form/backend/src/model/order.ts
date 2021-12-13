import * as mongoose from 'mongoose';
const OrderSchema: mongoose.Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: JSON,
        required: true
    },
    items: {
        type: JSON,
        required: true
    },
});

export const Order = mongoose.model('Order', OrderSchema);
