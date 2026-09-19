//o finally retorna true porque se caso o case dar o retorno de erro, ele dar esse retorna, volta para o try e d
//depois passa pro finally, verificando o retoro da função, então o catch, primeiro resultado do finally e o primeiro do try
//retorna falso, porque aplicamos o return da função neles
function f() {
  try {
    console.log(0);
    throw "bogus";
  } catch (e) {
    console.log(1);
    // This return statement is suspended
    // until finally block has completed
    return true;
    console.log(2); // not reachable
  } finally {
    console.log(3);
    return false; // overwrites the previous "return"
    // `f` exits here
    console.log(4); // not reachable
  }
  console.log(5); // not reachable
}
console.log(f()); // 0, 1, 3, false

///////////////////////////////////////////////////////////////////////////////////
//utilizando obejto de erros para reportar o erro ou mensagem de erro
function doSomethingErrorProne() {
  if (ourCodeMakesAMistake()) {
    //mensagem de erro
    throw new Error("The message");
  }
  //retornando o erro ao javascript
  doSomethingToGetAJavaScriptError();
}

try {
  //retornando o erro
  doSomethingErrorProne();
} catch (e) {
  //mensagem de erro do javascript
  // Now, we actually use `console.error()`
  console.error(e.name); // 'Error'
  console.error(e.message); // 'The message', or a JavaScript error message
}
