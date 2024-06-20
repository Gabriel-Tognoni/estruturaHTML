let numero1 = document.querySelector('#entada1');
let numero2 = document.querySelector('#entrada2');
let resultado = document.querySelector('#resultado');

function somar(){
    resultado.innerHTML = numero1.value + numero2.value;
    
}

function somar(){
   let final = Number(numero1.value) + Number(numero2.value);

   resultado.value = final;

}
function multiplicacao(){
    let final = Number(numero1.value) * Number(numero2.value);

    resultado.value = final;

}
function divisao(){
    let final = Number(numero1.value) / Number(numero2.value);
    
    resultado.value = final

}
function subtracao(){
    let final = Number(numero1.value) - Number(numero2.value);

    resultado.value = final

}


function imc(){
    let altura = document.querySelector('#altura');
let peso = document.querySelector('#peso');
let resultadoIMC = Number (peso) / (Number(altura) * Number(altura));
document.querySelector('#imcResultado').value = resultadoIMC;
if(resultadoIMC < 18.5){
    consideracoes.textContent = 'abaixo do peso';
}else if( resultadoIMC >= 18.5&& resultadoIMC <= 24.9 ){
    concideracoes.textContent = 'PesoNormal';
}else if(resultadoIMC >=24.9&&resultadoIMC <=30,0){
    concideracoes.textContent = 'levemente acima do peso';
}else if(resultadoIMC >=30.0&& resultadoIMC <=34.9){
    concideracoes.textContent = 'obesidade grau 1 (severa)';
}else if(resultadoIMC >=34.9&& resultadoIMC <=35.0){
    concideracoes.textContent = 'obesidade grau 2(Morbida)';
}else if(resultadoIMC >=35.0&& resultadoIMC <=39.9){
    concideracoes.textContent = 'obesidade grau3';
}else if(resultadoIMC >=40)
    concideracoes.textContent = 'obesidade (morbida)';
   
}
