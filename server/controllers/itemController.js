const asyncHandler = require('express-async-handler');
const Item = require('../models/itemModel');
const logger = require('../utils/logger');

const createItem = asyncHandler(
    async(req, res, next) => {
        const {
            name,
            tag,
            status
        } = req.body;

        const itemExists = await Item.findOne({name});

        if(itemExists){
            res.status(400);
            throw new Error('Item already exists');

        }

        const item = await Item.create({
            name,
            tag,
            status
        })

        if(item){
            res.status(200).json({
                _id: item._id,
                name: item.name,
                tag: item.tag,
                status: item.status,
            });
            logger.info(`Item successfully created: ${item._id}`)
        } else {
            res.status(400);
            throw new Error('Error cannot create an item')
        }

        res.json({
            name,
        });
    });

const getItemsByStatus = asyncHandler(async (req, res) => {
    const items = await Item.find({status: req.params.status})

    if (items) {
        res.json(items);
        logger.info(`Items found`);
    } else {
        res.status(404);
        throw new Error("Item not found" );
    }

});

const getItemById = asyncHandler(async (req, res) => {
    const item = await Item.findOne(req.params.id);

    if (item) {
        res.json(item);
        logger.info(`Item found: ${item._id}`)
    } else {
        res.status(404);
        throw new Error("Item not found" );
    }
});

const editItem = asyncHandler(
    async(req, res, next) => {
        const { name, tag, status } = req.body;

        const item = await Item.findById(req.params.id);

        if(item){
            item.name = name;
            item.tag = tag;
            item.status = status;

            const updatedItem = await item.save();

            res.json({updatedItem})
            logger.info(`Item successfully udpated: ${item._id}`)
        } else{
            res.status(404);
            throw new Error("Item not found")
        }

    });

const deleteItem = asyncHandler(
    async(req, res, next) => {

        const item = await Item.findById(req.params.id);

        if(item){
            await item.deleteOne();
            res.status(200).json({
                _id: item._id,
            });
            logger.info(`Item successfully deleted: ${item._id}`)
        } else{
            res.status(404);
            throw new Error("Item not found")
        }
    });

module.exports = {createItem, getItemById, editItem, deleteItem, getItemsByStatus};