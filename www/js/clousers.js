var nombre = "Sacha";

function saludar(){
    if(true){ //HOISTING declara todas la variables en la funcion del scope
        var nombre = "Eric";
    }
    
    console.log(`Hola ${nombre}`);
}

function saludar10(){
   for(let i=0; i<10; i++){
       console.log(`Hola ${nombre}`)
   }
    console.log(`El valor de i es ${i}`);
}

function saludarAlonso(){
    const nombre = "Alonso"

   for(let i=0; i<10; i++){
       console.log(`Hola ${nombre}`)
   }
}

saludarAlonso()
console.log(`La variable nombre tiene el valor ${nombre}`)