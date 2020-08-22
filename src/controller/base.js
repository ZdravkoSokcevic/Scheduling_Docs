const router = require("express").Router();
const fs = require("fs");

const helper = require('../helper/index');


router.get("/", async(req,res) => {
	let content = await helper.getContents('base');
	res.end(content);
});

router.get("/installation", async(req,res) => {
	let content = await helper.getContents('installation');
	res.end(content);
});

router.get("/requirements", async(req,res) => {
	let content = await helper.getContents('requirements');
	res.end(content);
});

router.get("/readme", async(req,res) => {
	let content = await helper.getContents('readme');
	res.end(content);
});

router.get("/structure", async(req,res) => {
	let content = await helper.getContents('structure');
	res.end(content);
});

module.exports = router;