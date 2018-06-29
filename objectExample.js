//object example

var myComputer = {
	operatingSystem: 'mac',
	screenSize: '15 inches',
	purchaseYear: '2011'
};

console.log(myComputer.operatingSystem);
console.log(myComputer.screenSize);
console.log(myComputer.purchaseYear);


var person = {
	name: 'Chris',
	sayName: function() {
		console.log(this.name);
	}
}

person.sayName();
console.log(person.name)