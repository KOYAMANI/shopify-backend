const mongoose = require('mongoose');

const itemSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        tag:{
            type: String,
            required: false,
        },
        status:{
            type: String,
            enum:['InStock', 'Shipped', 'Delivered'],
            default:'InStock'
        }
    },
    {
        timestamps: true,
    }
);

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;