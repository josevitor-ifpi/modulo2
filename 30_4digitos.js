import { question } from "readline-sync";

function main(){
    const numero = Number(question(`Numero de 4 digitos: `))

    //divide os 4 digitos em duas partes // 2025 -> 20, 25
    const parte_um = Math.floor(numero/100)
    const parte_dois = numero % 100

    // 20 + 25 = 45
    const soma = parte_um + parte_dois

    // 45 ** 2 = 2025
    const quadrado = soma ** 2

    //Saída
    if(soma === quadrado){
        console.log(`O numero ${numero} cortado ao meio fica ${parte_um} e ${parte_dois} que
    somados dá ${soma} e seu quadrado é igual a ${quadrado}, que é o numero original`)
    }else{
        console.log(`ERRO!`)
    }
}

main()