
function Resource(world, data) {
	var self = this;
	data = data || {};

	self.x = ko.observable(data.x || 0);
	self.y = ko.observable(data.y || 0);
	self.type = ko.observable(data.type || '');


	switch (self.type()) {
		case 'tree':
			self.fruitAge = ko.observable(-1);
			break;
	}


	self.tick = function () {
		switch (self.type()) {
			case 'tree':
				self.fruitAge(self.fruitAge() >= 2. ? -1 : (self.fruitAge() + .01));
				break;
		}
	}
}

function World(data) {
	var self = this;
	data = data || {};

	self.resources = ko.observableArray((data.resources || []).map(function (r) { return new Resource(self, r); }));

	self.update = function () {
		for (var i = 0; i < self.resources().length; i++)
			self.resources()[i].tick();
	}
}
