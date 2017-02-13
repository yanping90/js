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


function stars(){
	var star="";
	var i, j;
	for(i=0;i<5;i++){
		for(j =0;j<i+1;j++){
			star += "*";
		}
		star +="\n";
	}
	return star;
}