var valor;
var resultado;

function botao (num){
    valor = document.calculadora.tela.value += num;
}

function limpar(){
    document.calculadora.tela.value = " ";
}

function calcula(){
    resultado = eval(valor);
    document.calculadora.tela.value = resultado.toLocaleString("pt-BR");
}
