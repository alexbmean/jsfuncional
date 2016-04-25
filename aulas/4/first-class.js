// First Class Citizen

	// Assinada a uma variável;

		var hello = function(name) {
			console.log('Olá ' + name);
		}

		// hello('Alex');

		// -- //

		var add = function(a,b) {
			return a + b;
		}

		console.log(add(400 , 20))

	// Retornada de uma função;	

		var hello2 = function(name) {
			return function() {
				console.log('Olá ' + name + ' 2');
			}
		}

		var fn = hello2('Alex');
		// fn();

		// -- //

		function adder(a) {
			 return function(b) {
			 	return a + b;
			 };
		};

		var _add = adder(20);
		
		// console.log(_add(400))
		// console.log(_add(646))

		// -- //

		function multiply(a) {
			var sum = 0;
			return function(b) {
				sum = b;
				for(i=1; i<a; i++) {
					sum += b;
				}
				return sum;
			};
		}

		console.log( multiply(2)(333) )

	// Ser passada por parâmetro;	

		var hello3 = function(name) {
			console.log(name);			
		}

		function ola(msg , name) {
			msg(name)
		}

		ola(hello , 'Alex 3');
	
	// Usando Filter

		var numeros = [1,2,3,4,5,6,7,8,9,10];
		var apenasPares = function(numero) {
			return !(numero % 2)
		}

		var resposta = numeros.filter(apenasPares)
		console.log(resposta)

// High-Order Functions

	// Exemplo utilizando jQuery

		$('html').on('click' , function() {
			console.log(true)
		});