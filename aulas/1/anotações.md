A base da programação funcional são as funções. E no JS uma função é um OBJETO que possue atributos como:

- arguments
- name
- length

E todas essas funções possuem também 2 funções:

- apply
- call

#

	function HelloMotherFucher(motherfuckersname) {
		console.log("Oie: " + motherfuckersname + ', como vai sua mãe?');
	}

	HelloMotherFucher("Alex")

#

Todas as funções precisam retornar um valor, esse é o princípio básico para Programação Funcional

#
	
	function setIdade(idade) {
	return idade;
	}

	var idade = setIdade(32);
	console.log(idade)

	function maiordade(idade) {
	return idade >= 18
	}

	console.log( maiordade(idade) )
	
#

Um pequeno exemplo

#

	var repeat = function(s) {
		return s + s;
	}

	console.log( repeat("Na") )

#
