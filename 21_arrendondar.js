import { question } from "readline-sync";

function main(){
    const numero = Number(question(`Numero: `))
    
    const decimal = Math.trunc(numero) - numero // ex: 1.35; 1 - 1.35 = 0.35

    if(decimal >= 0.5){
         console.log(`${ Math.trunc(numero) + Math.ceil(decimal)}`) // ex: 1.5; 1 + (0.5 -> 1) = 2
    }else{
        console.log(`${numero}`)
    }

}


main()