var operacao = document.getElementById('operacao');
var input1 = document.getElementById('input1')  ;
var input2 = document.getElementById('input2');
var resultado = document.getElementById('resultado');
var botao_calculo = document.getElementById('botao');
var calculo = 0;

botao_calculo.addEventListener('click', function(){
    var numero1 = Number(input1.value); // value faz com que tenha acesso somente ao que o usuário digitou
    var numero2 = Number(input2.value);
    var operacao_selecionada = operacao.value;
    if (operacao_selecionada === '+'){
        calculo = (numero1+numero2)
        resultado.innerHTML = calculo
    } else if (operacao_selecionada === '-'){
        calculo = (numero1-numero2)
        resultado.innerHTML = calculo
    } else if (operacao_selecionada === 'x'){
        calculo = (numero1*numero2)
        resultado.innerHTML = calculo
    } else if (operacao_selecionada === '/') {
        calculo = numero1/numero2
        resultado.innerHTML = calculo
    }
});