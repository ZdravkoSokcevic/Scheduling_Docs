// const app = require("http");
const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");

const baseRouter = require("./src/controller/base");
const baseMiddleware = require("./src/middleware/index");
// app.get(express);
app.use(express.static('src/images'));
app.use(baseMiddleware);
app.use(router);

app.use("/", baseRouter);


app.listen(4444);