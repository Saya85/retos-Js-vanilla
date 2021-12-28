//mayor o igual

function mayorIgual(num1, num2) {
    if (num1 < num2) {
        alert('el segundo numero es mayor');
    }else if(num1 > num2){
        alert('el primer numero es mayor');
    }else{
        alert('los dos numeros son iguales');
    }
}
   

//bienvenido

function bienvenido(nombre) {
    console.log('Bienvenido ' + nombre);
}


// calculo radio circulo

function areaCirculo(radio, PI) {
        let areaCirculo = (radio * radio) * PI;
    console.log(areaCirculo);
}

//divisible por 2

function divisible(num) {
    if (num % 2 === 0) {
        console.log('es divisible por dos')
    } else{
        console.log('no es divisible') 
    }console.log(num);
}

//precio iva

function preciototal(precio){
    console.log( precio + (iva * precio))
}

//del 1 al 100 

function unoCien() {
    while (numero < 100) {
       numero++;
        console.log(numero);
    }
}

//del 1 al 100 por for

function unaCien() {
    for (let num = 1; num <= 100;num++){
        console.log(num);
    } 
}

