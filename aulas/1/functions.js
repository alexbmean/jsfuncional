// Programação Tradicional

function HelloMotherFucher(motherfuckersname) {
	console.log("Oie: " + motherfuckersname + ', como vai sua mãe?');
}

HelloMotherFucher("Alex")

// Base da Programação Funcional

function setIdade(idade) {
	return idade;
}

var idade = setIdade(32);
console.log(idade)

function maiordade(idade) {
	return idade >= 18
}

console.log( maiordade(idade) )

// Outra ideia quando tivermos a diferença entre Number e String

var repeat = function(s) {
	return s + s;
}

console.log( repeat("Na") )
console.log( repeat(10) )

// Para resolver o problema usamos um "contrato"

var str = function(s) {
	if(typeof s !== 'string') {
		throw new TypeError('Expected a String');
	} else {
		return s;
	}
}

// Refatorando
	
var repeat2 = function(s) {
	var s = str(s)
	return s + s;
}

console.log( repeat2("Na") )
console.log( repeat2(10) )	

