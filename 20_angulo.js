import { question } from "readline-sync";

function main(){
    const angulo = Number(question(`Informe um angulo (0° a 360°): `))

    const quadrante = definir_quadrante(angulo)

}

function definir_quadrante(angulo){
    //fail fast
    if(angulo <= 0){
        return false
    }

    if(angulo <= 90){
        console.log(`O angulo pertence ao 1° QUADRANTE`)
    }else if(angulo <= 180){
        console.log(`O angulo pertence ao 2° QUADRANTE`)
    }else if(angulo <= 270){
        console.log(`O angulo pertence ao 3° QUADRANTE`)
    }else{
        console.log(`O angulo pertence ao 4° QUADRANTE`)
    }
}

main()