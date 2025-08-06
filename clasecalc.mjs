export class Calculadora{
    constructor() {
        this.resultado = 0
    }
    sumar(a, b){
        this.resultado = a+b
        return this.resultado
    }
    restar(a, b){
        this.resultado = a-b
        return this.resultado
    }
    multiplicar(a, b){
        this.resultado = a*b
        return this.resultado
    }
    dividir(a, b){
        if(b === 0){
            this.resultado = "No se puede dividir por cero"
            return this.resultado
        } else{
            this.resultado = a/b
            return this.resultado
        }
    }
    potencia(a, b){
        this.resultado = a**b
        return this.resultado
    }
    resto(a, b){
        this.resultado = a%b
        return this.resultado
    }
}
