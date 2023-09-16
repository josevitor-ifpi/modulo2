import { question } from "readline-sync";

function main(){
const lado_a = Number(question("Lado a: "))
const lado_b = Number(question("Lado b: "))
const lado_c = Number(question("Lado c: "))

if(eh_triangulo(lado_a, lado_b, lado_c)){
    console.log(`\nSim, formam um triângulo.`)
    const tipo_lado = classificacao_lado(lado_a, lado_b, lado_c)
    console.log(`\nInclusive, ${tipo_lado}`)
    }else{
        console.log(`\nNão, não formam um triângulo.`)
    }
}

//features

function eh_triangulo(lado_a, lado_b, lado_c){
    if(lado_a === 0 || lado_b === 0 || lado_c === 0){
        return false
    }

    if(lado_a <= lado_b + lado_c || lado_b <= lado_a + lado_c || lado_c <= lado_a + lado_b){
        return true
    }
}

function classificacao_lado(a, b, c){
    if(a > b && a > c){
        return 'o lado A é a HIPOTENUSA e os lados B e C são seus CATETOS'
    }else if(b > a && b > c){
        return 'o lado B é a HIPOTENUSA e os lados A e C são seus CATETOS'
    }else{
        return 'o lado C é a HIPOTENUSA e os lados A e B são seus CATETOS'
    }
}

main()