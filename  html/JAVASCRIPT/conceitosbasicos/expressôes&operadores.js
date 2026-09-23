//quando você remove um elemento do array, o elemento não vai sair, mas vai se tornar undefined

const arvores = new Array(
  "pau-brasil",
  "loureiro",
  "cedro",
  "carvalho",
  "sicômoro",
);
delete arvores[3];
if (3 in arvores) {
  // isto não é executado
}

/////////////////////////////////////////////////////
//o operador in retorna true se a propriedade do obj estiver especificada no obj especificado
nomePropriedadeOuNumero in nomeObjeto;

//EX:

const arvores = new Array(
  "pau-brasil",
  "loureiro",
  "cedro",
  "carvalho",
  "sicômoro",
);
0 in arvores; // retorna verdadeiro
3 in arvores; // retorna verdadeiro
6 in arvores; // retorna falso
"cedro" in arvores; // retorna falso (você deve especificar o número do índice,
// não o valor naquele índice)
"length" in arvores; // retorna verdadeiro (length é uma propriedade de Array)

// Objetos predefinidos
"PI" in Math; // retorna verdadeiro
let minhaString = new String("coral");
"length" in minhaString; // retorna verdadeiro

// Objetos personalizados
const meucarro = { marca: "Honda", modelo: "Accord", ano: 1998 };
"marca" in meucarro; // retorna verdadeiro
"modelo" in meucarro; // retorna verdadeiro

////////////////////////////////////////////
//intanceof retorna true se o objeto especificado for do tipo de objeto especificado
nomeObjeto instanceof tipoObjeto;
//EX:
//aqui ele vai avaliar se o objeto dia é do tipo date, se for, ele retorna true
let dia = new Date(1995, 12, 17);
if (dia instanceof Date) {
  // declarações a serem executadas
}

//////////////////////////////////////////////////////////////////////
//this se refere a uma palavra do objeto atual
this["nomePropriedade"];
this.nomePropriedade;

//////////////////////////////////////
//operador de argumento é igual em matematica, vai determinar a ordem da conta, primeiro vem a que está dentro do parenteses
let a = 1;
let b = 2;
let c = 3;

// Precedência padrão
a + b * c; // 7
// a avaliação padrão pode ser assim
a + b * c; // 7

// Agora substitui a precedência
// soma antes de multiplicar
(a + b) * c; // 9

// o que é equivalente a
a * c + b * c; // 9

////////////////////////////////////////////////////////////////////////////////////
//comprehensions
/*[for (i of [ 1, 2, 3 ]) i*i ]; os numeroos vai ser multiplicado por ele mesmo
// [ 1, 4, 9 ]

const abc = [ "A", "B", "C" ];
[for (letras of abc) letras.toLowerCase()]; montando array com base em uma existente
// [ "a", "b", "c" ]
*/

/*
Tipo de operador	Operadores individuais
membro	. []
chamada / criação de instância	() new
negação / incremento	! ~ - + ++ -- typeof void delete
multiplicação / divisão / resto ou módulo	* / %
adição / subtração	+ -
deslocamento bit a bit	<< >> >>>
relacional	< <= > >= in instanceof
igualdade	== != === !==
E bit a bit	&
OU exclusivo bit a bit	^
OU bit a bit	|
E lógico	&&
OU lógico	||
condicional	?:
atribuição	= += -= *= /= %= <<= >>= >>>= &= ^= |=
vírgula	,
*/
/////////////////////////////////////////////////////////////////////////////

//a palavra super serve para chamar a função pai de um objeto, util para usar nas classes em contructor
super([argumentos]); //chama o construtor pai.
super.funcaoDoPai([argumentos]);
