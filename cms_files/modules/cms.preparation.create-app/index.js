module.exports = {
	name: "Create application",
	module: function(application) {
		var express = require("express");
		application.app = express();
		return {status:"LOADED"};
	}
};