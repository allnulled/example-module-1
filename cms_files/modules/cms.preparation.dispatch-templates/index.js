module.exports = {
	name: "Dispatch templates",
	module: function(application) {
		console.log(this.name);
		return {status:"LOADED"};
	}
};