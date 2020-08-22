const router = require("express").Router();
const fs = require("fs");
const markdown = require("markdown").markdown;
const showdown   = require('showdown');

let converter = new showdown.Converter();

router.get("/", (req,res) => {
	let stream = fs.createReadStream(__dirname + "/../markdown/index.md", {});
	let data = '';
	stream.on("data", chunk => {
		data+=chunk;
	});
	stream.on("end", () => {
		let html = converter.makeHtml(data);
		res.writeHead('200', {"Content-Type":"text/html"});
		res.write(html);
		res.end();
	});
});

module.exports = router;