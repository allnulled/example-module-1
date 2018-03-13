module.exports = {
	name: "Log requests",
	module: function(application) {
		console.log(this.name);
		return {status:"LOADED"};
	}
};