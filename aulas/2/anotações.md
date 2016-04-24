LAMBDA - Uma regra de transformação

Uma variável X do TIPO INTEIRO

int x;

int f(int x) {
	return x;
}

Outra forma

x: int
f: int -> int
________________________

x: a
f: a -> a

x ∈ Z = X PERTENCE AOS INTEIROS 

Composição

x: a
f: a -> a
g: a -> a

f(g(a)) 

Anotação de composição de funções

(f . g) = h
(f . g) = h : a -> a

Lambda - λ - Exemplos

x (Apenas uma variável)
λx.x 
λx.y
(λx,x x)(λx.x x)
λm.λn.λa.λb. m (n b a) (n a b)

// Significados

a - ABSTRAÇÕES: dada uma empressão-lambda ∈, podemos formar uma abastração de ∈ usando:
#
	λ + variável + '.' + ∈
	
	// Exemplo: 

		λx.x		

#

// Expressões LAMBDAS

(λx.x) 

== (LAMBDA X DE X | ENTRA COM UM VALOR E RETORNA ELE MESMO);

function(x) {
	return x;	
}

OU

(λy.x) * Expressão errada, apenas para exemplo

== (LAMBDA DE Y | Y é o ARGUMENTO da função, enquanto X é o retorno)

function(y) {
	return x;
}

// Exemplos:

#
	(λx.(λy.x))

	λx.λy.x
	
	// JS

	function(x) {
		return function(y) {
			return x;
		}
	}

#

Passando valores para uma expressão LAMBDA, vamos usar uma APLICAÇÃO Lambda

// Exemplos: 

(λx.E) F == E = x | F = y

#
	
	λx.x. UNICORNIO -> UNICORNIO
	
	JS

	function(x) {
		return x;
	}(UNICORNIO);

#

Agora a conversão-β 

# 	
	
	- LAMBDA

		(λx. + x 1) 4
	
	- JS

		(function(x) {
			return x + 1
		})(4);

#