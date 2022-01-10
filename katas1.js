function oneThroughTwenty() { //contador de 1 a 20
  
  let meuRetorno = []
  let n = 1;

  while (n <= 20){
    meuRetorno.push(n)
    n++
  }
  return meuRetorno;
    
}
console.log(oneThroughTwenty());

//call function oneThroughTwenty

function evensToTwenty() { // contador de 2 a 20 apenas pares
    
  let meuRetorno = []
  let n = 2;

  while (n <= 20){
    meuRetorno.push(n)
    n = n + 2;
  }
  return meuRetorno;
  
}
console.log(evensToTwenty());

//call function evensToTwenty

function oddsToTwenty() { //contador de 1 a 20 apenas ímpares
    
  let meuRetorno = []
  let n = 1;

while (n <= 20){
  meuRetorno.push(n)
  n = n + 2;
}
return meuRetorno;
   
}
console.log(oddsToTwenty());

//call function oddsToTwenty

function multiplesOfFive() { //contador de 1 a 100 apenas multiplos de 5
  
  let meuRetorno = []
  let n = 0;

while (n <= 100){
  meuRetorno.push(n)
  n = n + 5;
}
return meuRetorno;
}
console.log(multiplesOfFive());

//call function multiplesOfFive

function squareNumbers() { //quadrados perfeitos de 0 a 100
  
  let meuRetorno = []
  let n = 1;
  let quadradoPerfeito; 

  while (n <= 10){
    quadradoPerfeito = n**2;
    n++
    meuRetorno.push(quadradoPerfeito);
}
  return meuRetorno;
}
console.log(squareNumbers());

//call function squareNumbers

function countingBackwards() {

  let meuRetorno = [];
  for (let contador = 20; contador > 0; contador -= 1){
    meuRetorno.push(contador);
  }
  return meuRetorno;
}
console.log(countingBackwards());

//call function countingBackwards

function evenNumbersBackwards() { //contador de 20 ate 1 apenas impares
    
  let meuRetorno = [];
  for (let contador = 19; contador > 0; contador -= 2){
    meuRetorno.push(contador);
  }
  return meuRetorno;
}
console.log(evenNumbersBackwards());

//call function evenNumbersBackwards

function oddNumbersBackwards() { //cotnador de 20 ate 0 apenas pares
    
  let meuRetorno = [];
  for (let contador = 20; contador >= 0; contador -= 2){
    meuRetorno.push(contador);
  }
  return meuRetorno;
}
console.log(oddNumbersBackwards());

//call function oddNumbersBackwards
    
  function x() { //contador de 100 a 5 apenas multiplos de 5
  
    let meuRetorno = []
    let n = 100;
  
  while (n > 0){
    meuRetorno.push(n)
    n = n - 5;
  }
  return meuRetorno;
  }
  console.log(x());

//call function multiplesOfFiveBackwards

  function y() { //quadrados perfeitos de 0 a 100
  
    let meuRetorno = []
    let n = 10;
    let quadradoPerfeito; 
  
    while (n >= 1){
      quadradoPerfeito = n ** 2;
      n--
      meuRetorno.push(quadradoPerfeito);
  }
    return meuRetorno;
  }
  console.log(y());

//call function squareNumbersBackwards
