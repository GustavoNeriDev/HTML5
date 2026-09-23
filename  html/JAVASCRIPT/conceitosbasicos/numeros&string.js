//OBJETO NUMBER
const maiorNum = Number.MAX_VALUE; //Valor máximo
const menorNum = Number.MIN_VALUE; //Valor mínimo
const infiniteNum = Number.POSITIVE_INFINITY; //Infinito positivo
const negInfiniteNum = Number.NEGATIVE_INFINITY; //Infinito negativo
const notANum = Number.NaN; //Não é numeral

/*
Propriedade	        Descrição
Number.MAX_VALUE	O maior número representável.
Number.MIN_VALUE	O menor número representável.
Number.NaN	Valor "not a number" especial
Number.NEGATIVE_INFINITY	Valor especial infinito negativo; retornado em overflow
Number.POSITIVE_INFINITY	Valor especial infinito positivo; retornado em overflow
Number.EPSILON	Diferença entre um e o menor valor maior do que um que pode ser representado como um Number.
Number.MIN_SAFE_INTEGER	Mínimo safe integer em JavaScript.
Number.MAX_SAFE_INTEGER	Máximo safe integer em JavaScript




Método	            Descrição
Number.parseFloat()	Analisa um argumento string e retorna um número float. O mesmo que a função global parseFloat().
Number.parseInt()	Analisa um argumento string e retorna um inteiro da raiz ou base especificada. O mesmo que a função globalparseInt().
Number.isFinite()	Determina se o valor passado é um número finito.
Number.isInteger()	Determina se o valor passado é um inteiro.
Number.isNaN()	Determina se o valor passado é NaN. A versão mais robusta da original isNaN().
Number.isSafeInteger()	Determina se o valor passado é um safe integer


PROTOTIPO NUMBERS PREVE METODOS PARA RESGATAR OBJETOS NUMBER DO JAAVASCRIPT

Método	         Descrição
toExponential()	Retorna uma string representando o número em uma notação exponencial.
toFixed()	    Retorna uma string representando o número em notação com ponto-fíxo.
toPrecision()	Retorna uma string representando o número em uma precisão especificada na notação de ponto-fíxo




MATH É USADO EM METAMATICAS E FUNÇÕES, EX PI, ETC

Método	Descrição
abs()	Valor absoluto
sin(), cos(), tan()	Funções trigonométricas padrão; Argumentos em radianos
asin(), acos(), atan(), atan2()	Funções trigonométricas inversas; retorna valores em radianos
sinh(), cosh(), tanh()	Funções trigonométricas hiperbólicas; retorna valores em radianos.
asinh(), acosh(), atanh()	Funções trigonométricas hiperbólicas inversas; retorna valores em radianos.
pow(), exp(), expm1(), log10(), log1p(), log2()	Funções exponenciais e logarítmicas.
floor(), ceil()	Retorna o maior/menor inteiro que é menor/maior inteiro que ou igual ao argumento.
min(), max()	Retorna menor ou maior (respectivamente) de uma lista separada por vírgula de argumentos numéricos
random()	Retorna um número aleatório entre 0 e 1.
round(), fround(), trunc(),	Funções de arredondamento e truncamento.
sqrt(), cbrt(), hypot()	Raiz quadrada, raiz cúbica, raiz quadrada da soma de argumentos ao quadrado.
sign()	O sinal de um número, indicando se o número é positivo, negativo ou zero.
clz32(), imul()	Número de zeros à esquerda na representação binária de 32-bits. The result of the C-like 32-bit multiplication of the two arguments.




OBJETOS DATE
METODOS DATE, USADO PARA APLICAR DATA, HORA, SEGUDOS ETC

Os métodos do objeto Date para manipular data e hora pertencem às seguintes categorias:

Métodos "set", para setar valores de data e hora em objetos Date.
Métodos "get", para recuperar valores de data e hora de objetos Date.
Métodos "to", para retornar valores de string de objetos Date.
Métodos parse e UTC, para parsear string de Data.
*/

let hoje = new Date();
let fimAno = new Date(1995, 11, 31, 23, 59, 59, 999); // Seta dia e mês
fimAno.setFullYear(hoje.getFullYear()); // Seta o ano para esse ano
let msPorDia = 24 * 60 * 60 * 1000; // Quantidade de milisegundos por dia
let diasRestantes = (fimAno.getTime() - hoje.getTime()) / msPorDia; //getTime retorna os mililesimmos de segundos desde 1 de jan de 1970 para o objetoDate, neste codigo está sendo usado para arredondar os dias
let diasRestantes = Math.round(diasRestantes); //retorna os dias restantes no ano

///////////////////////////////////////////////////////////////////
// a função retorna o tempo em formato de um relogio
function JSClock() {
  let tempo = new Date();
  let hora = tempo.getHours();
  let minuto = tempo.getMinutes();
  let segundo = tempo.getSeconds();
  //se hora for maior que 12, se não é só hora
  let temp = "" + (hora > 12 ? hora - 12 : hora);
  if (hora == 0) temp = "12";
  //se o minuto for menor que 10, vai adicionar a string 0, se não adiciona a string :
  temp += (minuto < 10 ? ":0" : ":") + minuto;
  temp += (segundo < 10 ? ":0" : ":") + segundo;
  //se hora for igual ou maior que 12 ela retorna P.M, se não retorna A.M
  temp += hora >= 12 ? " P.M." : " A.M.";
  return temp;
}
