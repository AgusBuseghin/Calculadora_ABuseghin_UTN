import { Calculadora } from "./clasecalc.mjs";
import { input } from "./utils.mjs";

const calc = new Calculadora();
while (true){
    console.clear()
    console.log("Calculadora")
    console.log("------------")
    console.log("1. Sumar")
    console.log("2. Restar")
    console.log("3. Multiplicar")
    console.log("4. Dividir")
    console.log("5. Potencia")
    console.log("6. Resto")
    console.log("7. Salir")
    const opcion = await input("Seleccione una opción: ")
    if(opcion == 7){
        console.clear()
        break
    }
    const a = Number(await input("Ingrese el primer número: "))
    const b = Number(await input("Ingrese el segundo número: "))
    if(opcion == 1){
        calc.sumar(a, b)
        console.log(`Resultado: ${calc.resultado}`)
        await input("")
        console.clear()
    }
    if(opcion == 2){
        calc.restar(a, b)
        console.log(`Resultado: ${calc.resultado}`)
        await input("")
        console.clear()
    }
    if(opcion == 3){
        calc.multiplicar(a, b)
        console.log(`Resultado: ${calc.resultado}`)
        await input("")
        console.clear()
    }
    if(opcion == 4){
        calc.dividir(a, b)
        console.log(`Resultado: ${calc.resultado}`)
        await input("")
        console.clear()
    }
    if(opcion == 5){
        calc.potencia(a, b)
        console.log(`Resultado: ${calc.resultado}`)
        await input("")
        console.clear()
    }
    if(opcion == 6){
        calc.resto(a, b)
        console.log(`Resultado: ${calc.resultado}`)
        await input("")
        console.clear()
    }
}