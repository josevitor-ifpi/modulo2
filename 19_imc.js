import { question } from "readline-sync";

function main(){
    const altura = Number(question('Altura: '))
    const peso = Number(question('Peso  : '))

    const imc = definir_imc(altura, peso)

}

function definir_imc(altura, peso){
    const calculo_imc = peso / (altura ** 2)

    if(calculo_imc <= 0){
        return false
    }
    
    if(calculo_imc < 25){
        console.log(`O seu IMC está NORMAL`)
    }else if(calculo_imc >= 25 && calculo_imc <= 30){
        console.log(`O seu IMC indica que você está OBESO`)
    }else{
        console.log(`O seu IMC indica que você está com OBESIDADE MÓRBIDA`)
    }

    
}
main()