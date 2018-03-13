module.exports = {
	name: "Add HTTP statuses as methods",
	module: function(application) {
		console.log(this.name);
		return {status:"LOADED"};
	}
};