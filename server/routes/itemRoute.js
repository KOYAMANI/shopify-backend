const express = require('express');
const {createItem, editItem, deleteItem, getItemById, getItemsByStatus} = require("../controllers/itemController");

const router = express.Router()

router.route("/:id").get(getItemById);
router.route("/sort/:status").get(getItemsByStatus);
router.route("/create").post(createItem);
router.route("/edit/:id").get(getItemById).put(editItem);
router.route("/delete/:id").get(getItemById).put(deleteItem);

module.exports = router;