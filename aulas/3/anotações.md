Finalizando LAMBDAS

E começando a entender e aplicar JS Funcional

Relação com Atomic Design

Uso de funções anônimas - ao invés de usar a palavra reservada VAR já trazer no callback funções anônimas

* IIFE - Immediately-Invoked Function Expression

#
	function makeCounter() {
		var i =0;

		return function() {
			console.log(++i);
		};
	}
#