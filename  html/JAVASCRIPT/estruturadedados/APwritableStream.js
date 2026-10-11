const registrar = document.getElementById("registrar");
const resultado = document.getElementById("resultado");

async function registrarEstoque() {
    resultado.textContent = "";
//fluxo de escrita
    const fluxo = new WritableStream({
        //metodo que vai enviar ao fluxo acessando pela propriedade chunk
        write(chunk) {
            resultado.textContent += `${chunk}\n`
        },

        close() {
            resultado.textContent += `\nregistro finalizado`
        }
    });
//fornece o escritor que o write e close retornam promisses
    const escritor = fluxo.getWriter();
 
    try {
        //aguarda cada operação escrita
        await escritor.write("Notebook: +5 unidades");
        await escritor.write("Mouse: -2 unidades");
        await escritor.write("Teclado: +8 unidades");

        await escritor.close();

    } catch (erro) {
        resultado.textContent += `Erro: ${erro.message}`;
    }
}

registrar.addEventListener("click", registrarEstoque);


//sink: é o destino que recebe os dados enviados pelo fluxo. Neste exercício, o objeto passado ao WritableStream define esse destino por meio dos métodos write() e close().