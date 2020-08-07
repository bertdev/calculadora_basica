function calcular(tipo, valor) {
    if(tipo === "acao") {
        //logica do clear
        if(valor === "c") {
            //limpar o campo de resultado
            document.getElementById("resultado").value = ''
        } 

        //logica de operadores matematicos 
        if(valor === "+" || valor === "-" || valor === "/" || valor === "*" || valor === ".") {
            document.getElementById("resultado").value += valor
        }

        //logica do botão resultado (=) 
        if(valor === "=") {
            var valorCampo = document.getElementById("resultado").value
            //a função eval pega a string e realiza a operação matematica contida nela
            document.getElementById("resultado").value = eval(valorCampo)
        }

    } else if(tipo === "valor") {
        //concatena pois o valor passado(como parametro da função e o recuperado) está em formato de steing
        document.getElementById("resultado").value += valor
    }

}    