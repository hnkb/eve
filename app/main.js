
function AppViewModel(data) {
	var self = this;
	self.world = new World(data);


	self.update = function () {
		self.world.update();
		window.setTimeout(update, 250);
	}
	self.update();
}


if (document.getElementById('app')) {
	var viewModel = AppViewModel(GetInitialSeed());
	ko.options.deferUpdates = true;
	ko.applyBindings(viewModel);
}
