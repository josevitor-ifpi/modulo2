import { question } from "readline-sync";

function main(){

    const senha = Number(question('Digite sua senha: ')) //1234

    if(senha === 1234){
        console.log(`Acesso Concedido`)
    }else{
        console.log(`Acesso Negado`)
    }
}

main()