import { question } from "readline-sync";

function main(){

    const numero = Number(question("Numero de 4 digitos: "))

    if(soma === numero){
        console.log(`O numero é um quadrado perfeito`)
    }else{
        console.log(`O numero não é um quadrado perfeito`)

    }
}

main()