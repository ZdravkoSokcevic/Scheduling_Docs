// const app = require("http");
const express = require("express");
const app = express();
const router = express.Router();

const baseRouter = require("./src/controller/base");
// app.get(express);
app.use(router);
app.use("/", baseRouter);

router.get("/proba", function(req,res) {
	res.end(JSON.stringify("To je to"));
});

app.listen(4444);