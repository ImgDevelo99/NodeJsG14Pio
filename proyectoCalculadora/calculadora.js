export function sumar(a, b){
    return a + b;
}

export function restar(a, b){
    return a - b;
}

export function multiplicar(a, b){
    return a * b;
}

export function dividir(a , b){
    if( b === 0) throw new Error ("no se puede dividir entre cero");
    return  a / b;
}

export default function calcular(operacion, a , b){
    switch (operacion) {
        case "sumar":
            return sumar(a,b);
        case "restar":
            return restar(a,b); 
        case "multiplicar":
            return multiplicar(a,b);    
        case "dividir":
            return dividir(a,b);   
        default:
            throw new Error("opcion no valida");
    }
}

