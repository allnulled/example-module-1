module.exports = {
	name: "Deploy the server",
	module: function(application) {
		console.log(this.name);
		return {status:"LOADED"};
	}
};