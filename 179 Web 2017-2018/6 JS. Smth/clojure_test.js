'use strict'

var creature = function() {
	var health = 100;
	this.deal_damage = function() {
		health -= 10;
		console.log(health);
	}
}

alert(this);

var func1 = function() {
	function func2() {alert(this)};
	func2();
	alert(this.name);
	// func1.a = func2;
	// func1.func2 = func2;
}