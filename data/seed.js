
function GetInitialSeed() {
	var seed = {
		entities: [
			{ x: 10, y: 50, type: 'tree' },
			{ x: 80, y: 70, type: 'tree' },
			{ x: 20, y: 90, type: 'tree' },
			{ x: 80, y: 10, type: 'rock' },
			{ x: 15, y: 80, type: 'rock' }
		]
	};

	for (var i = 0; i < 2; i++) seed.entities.push({ x: Math.random() * 100, y: Math.random() * 100, type: 'iron' });

	return seed;
}
