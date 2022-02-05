var valor;
var resultador;

function botao(num){
     valor = document.calc.visor.value += num; 
}

function reset(){
    document.calc.visor.value = "";
}

function calcula(){
    resultado = eval(valor);
    document.calc.visor.value = resultado.toLocaleString();
}