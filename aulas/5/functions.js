var name = 'Alex';

function foo() {
	console.log(name);
}

foo();

var x  = 1;

function bar() {
	var x = 420;
	var y = 666;

	console.log(x,y);
}

bar();

console.log(x)

var x2 = 1;

function bar2() {
	x2 = 420;
	console.log(x2)
}

bar2();
console.log(x2);

// Variável global passada por parâmetro para uma função não tem o seu valor alterado.

	var x3 = 1;
	var y = 11;

	function meh(x3) {
		console.log("Dentro: ", x3, y);
		x3++;
		y++;
		console.log("Dentro: ", x3, y);
	}

	meh(x3);
	console.log("Fora: ", x3, y);

	