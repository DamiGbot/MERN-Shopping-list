const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const items = require("./routes/api/items");

require("dotenv").config({ path: path.join(__dirname, "config", ".env") });

const app = express();
const DB = process.env.DATABASE;
const PORT = process.env.PORT || 5000;
console.log(DB);

//Bodyparser Middleware
app.use(bodyParser.json());

main()
	.then(() => {
		console.log("Connected to Database");
	})
	.catch((err) => {
		console.log(err);
	});

async function main() {
	await mongoose.connect(DB);
}

//Use Routes
app.use("/api/items", items);

//Serve static assets if in production
if (process.env.NODE_ENV === "production") {
	//set static folder
	app.use(express.static("client/build"));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
