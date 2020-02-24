const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const AdminRoutes = require('./routes/admin');

//*** Class Definition for Initiating the server ***
class App {

	//*** Constructor ***
	constructor() {
		this.express = express();
		this.express.use(cors());
		this.initExpressMiddleWare();
		this.initRoutes();
	}

	//*** Initialization of the middleware modules ***
	initExpressMiddleWare() {
		this.express.use(bodyParser.urlencoded({ extended: true }));
		this.express.use(bodyParser.json());
	}

	//*** Initilization of all the Routes ***
	initRoutes() {
		this.express.use(process.env.APP_REST_BASE_URL, AdminRoutes)
	}

}

module.exports = new App();