// LAMBDAS

var fn = function(UNICORNIO) {
	return function(y) {
		return UNICORNIO;
	}
}

// console.log(fn(1))
// console.log(fn(1)(2))

var fn2 = function(UNICORNIO) {
	return function(y) {
		return UNICORNIO * y;
	}
}

// console.log( fn2(2) )
// console.log( fn2(2)(3) )

// Usando programação funcional

function setIdade(idade) {
	var idade = idade;
	return idade;
}

// console.log(setIdade(32))

function maiorIdade(idade) {
	return idade >= 18
}

// console.log( maiorIdade( setIdade(32) ) )

// IIFE

// Entendendo Escopos
function makeCounter() {
	var i =0;

	return function() {
		console.log(++i);
	};
}

var counter = makeCounter();
var counter2 = makeCounter();

// Executando uma IIFE

(function(x) {
	console.log(x)
})(true);

// OU

(function(){
	console.log(true)
})();

