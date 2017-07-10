//console.log("El area de un triangulo de base 5 y altura 7: " + 5 * 7/2 );

/*let base = 5
let height = 7
console.log(`El area de un triangulo de base 5 y altura 7:  ${base * height / 2}` );*/

let base = 5;
let height = 7;
const triangleArea = (base, height)=> base * height / 2;
console.log(`El area de un triangulo de base 5 y altura 7:  
${triangleArea(base, height)}` );

let r = 5;
const PI = Math.PI;
const circleArea = (radio, pi) => pi * Math.pow(r, 2);
console.log(`El area del circulo de radio ${r}:  ${circleArea(r, PI)}` );

let l = 4;
const squareArea = (lado) => Math.pow(l, 2);
console.log(`El area del cuadrado de lado ${l}:  ${squareArea(l)}` );

let baseR = 5;
let heightR = 7;
const rectangleArea = (base, height) => base * height;
console.log(`El area del rectangulo de base ${baseR} y altura ${heightR}:  ${rectangleArea(baseR, heightR)}` );