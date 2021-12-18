const express = require("express");
const router = express.Router();

//Item Model
const Item = require("../../models/items");

// @route GET api/items
// @desc GET All items
// @access Public
router.get("/", async (req, res) => {
	try {
		const items = await Item.find().sort({ date: -1 });
		res.json(items);
	} catch (err) {
		res.json({ message: err.message });
	}
});

// @route POST api/items
// @desc Create a Item
// @access Public
router.post("/", async (req, res) => {
	const item = new Item({
		name: req.body.name,
	});

	try {
		const newItem = await item.save();
		res.json(newItem);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

// @route Delete api/items/:id
// @desc Delete a Item
// @access Public
router.delete("/:id", getItem, async (req, res) => {
	try {
		await res.item.remove();
		res.json({ message: "Deleted the Item", success: true });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

//Middleware function used to get an item
async function getItem(req, res, next) {
	let item = undefined;
	try {
		item = await Item.findById(req.params.id);
		if (item === null) {
			return res.status(404).json({ message: "Cannot find Item" });
		}
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}

	res.item = item;
	next();
}

module.exports = router;
