function varTest() {
	var x = 420;
	if(true) {
		var x = 666;
		console.log(x)
	}
	console.log(x);
}

varTest()

function letTest() {
	let x = 420;
	if(true) {
		let x = 666;
		console.log(x)
	}
	console.log(x);
}

letTest();

// let

	// Comentados para não gerar mais erros

		// var x;
		// if(x) {
		// 	let foo;
		// 	// let foo; - Uncaught SyntaxError: Identifier 'foo' has already been declared
		// }

		// function do_somenthing() {
		// 	console.log(foo); // Uncaught ReferenceError: foo is not defined
		// 	let foo = 2;
		// }

		// // do_somenthing();

		// switch (x) {
		// 	case 0:
		// 		let foo;
		// 		break;
		// 	case 1:
		// 		let foo; // Uncaught SyntaxError: Identifier 'foo' has already been declared
		// 		break;
		// }


// default parameters

	function makeRequest( url, timeout = 2000, callback = function() {} ) {

	}

	makeRequest("/foo");
	
	makeRequest("/foo" , 500);

	makeRequest("/foo" , 500, function(body) {
		console.log(true)
	});


// destructuring
	
	function setCookie( name, value, { secure, path, domain, expires } ) {
		// ...
	}

	setCookie("type" , "js", {
		secure: true,
		expires: 60000
	});


// spread operator	

	let values = [25, 50, 75, 100];
	console.log(Math.max(...values));


// arrow function

	 // function (arguments) { expression }
	 // arguments => expression

	 // Função normal em JS
	 
		 var hello = function(name) {
		 	return 'Oi, ' + name + '!';
		 }

		 console.log(hello("Alex"));

	// Arrow function

		 let hello2 = name2 => 'Hello, ${name2}!';
		 console.log(hello2('Alex'));
		 console.log(hello2());

		 let sum = (num1, num2) => num1 + num2;
		 // ou
		 // let sum = function(num1, num2) {
		 // 	return num1 + num2;
		 // }

		 console.log(sum(1,2));


 // iterators

	let arr = [3, 5, 7];
	arr.foo = "hello" ;

	for(let i in arr) {
		console.log(i);
	}

	for(let i of arr) {
		console.log(i)
	}

	arr.forEach(function (e, i) {
		console.log(e)
		console.log(i)
	});

	Object.keys(arr).forEach(function(e,i){
		console.log(arr[e])
		console.log(arr[i])
	});

	let arr_webschool = [
		{name: "Suissa" , course: "JS Funcional"},
		{name: "Caio Cutrim" , course: "Node.js"}
	];

	for(let i in arr_webschool) {
		console.log(i)
	}

	for(let i of arr_webschool) {
		console.log(i)
	}

// promise
	
	httpGet('google.com.br')
		.then(
			function(value) {
				console.log('Contents: ' + value);
			},
			function(reason) {
				console.log('Somenthing went wrong', reason);
			}
		)

// currying

	



	





