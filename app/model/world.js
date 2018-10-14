
function Entity(world, data) {
	var self = this;
	data = data || {};

	self.x = ko.observable(data.x || 0);
	self.y = ko.observable(data.y || 0);
	self.type = ko.observable(data.type || '');


	switch (self.type()) {
		case 'tree':
			self.fruitAge = ko.observable(-1);
			self.tick = function () {
				self.fruitAge(self.fruitAge() >= 2. ? -1 : (self.fruitAge() + .01));
			}
			break;
	}
}

function World(data) {
	var self = this;
	data = data || {};

	self.entities = ko.observableArray((data.entities || []).map(function (r) {
		return new Entity(self, r);
	}));

	self.update = function () {
		for (var i = 0; i < self.entities().length; i++)
			if (typeof (self.entities()[i].tick) === 'function')
				self.entities()[i].tick();
	}
}
