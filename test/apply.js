function add() {
	var sum = 0;
	for (var i in arguments) {
		sum += arguments[i];
	}
	return sum;
}


function Person(n){
	this.name = n;
}

p1 = new Person("Jack");

function displayName(){
	console.log(this.name);
}

displayName.apply(p1);
Math.max.apply(null, [1,2,3]);
