var operacao = document.getElementById('operacao');
var input1 = document.getElementById('input1')  ;
var input2 = document.getElementById('input2');
var resultado = document.getElementById('resultado');
var botao_calculo = document.getElementById('botao');
var calculo = 0;

botao_calculo.addEventListener('click', function(){
    console.log("TESTE")
    var numero1 = Number(input1.value);
    var numero2 = Number(input2.value);
    var operacao_selecionada = operacao.value;
    console.log(operacao_selecionada)
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