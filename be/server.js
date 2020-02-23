const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors');

//*** Class Definition for Initiating the server ***
class Server {

	//*** Constructor ***
	constructor() {
		this.app = express();
		this.app.use(cors());
		this.initExpress();
		this.initExpressMiddleWare();
		this.initControllers();
		this.start();
	}


	//*** Initilization of the Express framework ***
	initExpress() {
		this.app.set("port", 8000);
	}


	//*** Initialization of the middleware modules ***
	initExpressMiddleWare() {
		this.app.use(bodyParser.urlencoded({ extended: true }));
		this.app.use(bodyParser.json());
	}


	//*** Initilization of all the controllers ***
	initControllers() {

    }


	//*** Starting the REST Api application ***
	start() {
		this.app.listen(this.app.get("port"), () => {
			console.log(`Server Listening on port: ${this.app.get("port")}`);
		});
	}

}

new Server();