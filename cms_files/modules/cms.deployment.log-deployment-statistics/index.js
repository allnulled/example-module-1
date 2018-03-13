module.exports = {
	name: "Log deployment statistics",
	module: function(application) {
		console.log(this.name);
		return {status:"LOADED"};
	}
};