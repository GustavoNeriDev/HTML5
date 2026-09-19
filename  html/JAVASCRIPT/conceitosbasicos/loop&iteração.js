//nesse codigo está varias opções de musica para percorrer e o loop vai percorrer e deppois o usuario seleciona oque ele quer

function countSelected(selectObject) {
  //variavel para selecionar
  let numberSelected = 0;
  //percorrendo as opções de musicas
  for (let i = 0; i < selectObject.options.length; i++) {
    //condicão para selecionar a musica, lembre que o [i] acessa cada uma das que foi percorrida
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

const btn = document.getElementById("btn");
//quando o usuario clicar, vai selecionar as musicas e mostrar o tipos dela
btn.addEventListener("click", () => {
  const musicTypes = document.selectForm.musicTypes;
  console.log(`You have selected ${countSelected(musicTypes)} option(s).`);
});

///////////////////////////////////////////////////

const obj = { foo: 1, bar: 2 };
//este loop percorre simultanemente os valores e as chaves do objeto
for (const [key, val] of Object.entries(obj)) {
  console.log(key, val);
}
//resultado:
// "foo" 1
// "bar" 2
