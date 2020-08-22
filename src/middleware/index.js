const router = require("express").Router();

router.use('/', (req,res,next) => {
	res.writeHead(200, {'Content-Type':'text/html'});
	// console.log('tu si');
	next();
});
module.exports = router;