const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors');

//*** Class Definition for Initiating the server ***
class App {

	//*** Constructor ***
	constructor() {
		this.app = express();
		this.app.use(cors());
		this.initExpressMiddleWare();
		this.initRoutes();
	}

	//*** Initialization of the middleware modules ***
	initExpressMiddleWare() {
		this.app.use(bodyParser.urlencoded({ extended: true }));
		this.app.use(bodyParser.json());
	}


	//*** Initilization of all the Routes ***
	initRoutes() {

    }

}

module.exports = new App();