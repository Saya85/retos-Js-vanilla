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

//divisible por 2 y 3

function unocienDivisible() {
    for (let num = 1; num <= 100;num++){
        if (num % 2 === 0 || num % 3 === 0)
        console.log(num);
    } 
}
//compra

function totalCompra(num){
   let total = 0;
   for (let contador = 1; contador <= num; contador++) {
       let valor = parseFloat(prompt('precio producto'));
       valor = valor + (iva * valor);
       total = total + valor;    
   }
    console.log(total);
}

// dias laborables

function laborable(dias) {
    switch (dias) {
        case 'lunes':
        case 'martes':
        case 'miercoles':
        case 'jueves':
        case 'viernes':
           console.log('dia de trabajo');
        break;
        case 'sabado':
        case 'domingo':
            console.log('festivo');
        break;   
        default:
            console.log('no es un dia valido') ;  
    }
}

// contraseña

function pasword(){
for (var intentos = 3; intentos > 0; intentos--) {
    let contraseña = prompt('pon contraseña');
    console.log(intentos);
   if (contraseña === contraseñaOk) {
       alert("¡¡¡Enhorabuena!!!");
       break;
   } else {
       alert("contraseña incorrecta")
   }
}
if (intentos === 0) {
    alert("no tienes mas intentos")
}
}





// calculadora


function calculadora(n1, n2, simbolo) {
    switch (simbolo) {
        case '+':
            alert(n1 + n2);
            break;
        case '-':
            alert(n1 - n2);
            break;
        case '*':
            alert(n1 * n2);
            break;
        case '/':
            alert(n1 / n2);
            break;
        case '^':
            alert(n1 ^ n2);
            break;
        case '%':
            alert(n1 % n2);
            break;                    
        default:
            alert('no es un simbolo de los aceptados +, -, *, /, ^, %')
            break;
    }
}

