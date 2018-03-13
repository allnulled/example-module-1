module.exports = {
	name: "Add route for exceptions on requests/response",
	module: function(application) {
		console.log(this.name);
		return {status:"LOADED"};
	}
};