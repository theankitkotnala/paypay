const mongoose = require('mongoose');
const datbaseStates = {
	[0]: 'disconnected',
	[1]: 'connected',
	[2]: 'connecting',
	[3]: 'disconnecting'
}

const connect = function () {
	return new Promise((resolve, reject) => {
		const dbURI = `${process.env.APP_DB_PROTOCOL}://${process.env.APP_DB_USER ? process.env.APP_DB_USER + ":" + process.env.APP_DB_PASS + "@" : ""}${process.env.APP_DB_URL}${process.env.APP_DB_PORT ? ':' + process.env.APP_DB_PORT : ''}/${process.env.APP_DB_NAME}`;
		console.log('dbURI :: ', dbURI , process.env.APP_DB_PROTOCOL)
		mongoose.connect(dbURI, { useUnifiedTopology: true, autoIndex: true, autoCreate: true, auto_reconnect: true, useFindAndModify: false, useNewUrlParser: true, useCreateIndex: true });
		mongoose.connection.setMaxListeners(0);
		mongoose.connection.on('connected', function () {
			resolve({ value: true })
		});
		mongoose.connection.on('error', function (error) {
			resolve({ error: { type: 'error', ...error, location: { file: __filename, function: 'connect' } } })
		});
		mongoose.connection.on('disconnected', function () {
			console.log('Mongoose disconnected');
			// mongoose.connect(dbURI, {auto_reconnect:true, useNewUrlParser: true });
		});
	})
}


function getDbConnectionState() {
	try {
		return { value: datbaseStates[mongoose.connection.readyState], error: null }
	} catch (error) {
		return { value: null, error: new Error('database : something went wrong') }
	}
}

module.exports = { connect, getDbConnectionState }
