
let nomeHero = "Tester"
let nivelHeroi = "2"


switch(nivelHeroi) {

    case(nivelHeroi < 1000):
        console.log("Nível Ferro");

    case(nivelHeroi > 1001 && nivelHeroi < 2000):
        console.log("Nivel Bronze");
    
    case(nivelHeroi > 2001 && nivelHeroi < 5000):
        console.log("Nivel Prata");
       
    case(nivelHeroi > 6001 && nivelHeroi < 7000):
        console.log("Nivel Ouro");

    case(nivelHeroi > 7001 && nivelHeroi < 8000):
        console.log("Nivel Platina");

    case(nivelHeroi > 8001 && nivelHeroi < 9000):
        console.log("Nivel Ascedente");
    
    case(nivelHeroi > 9001 && nivelHeroi < 10000):
        console.log("Nivel Imortal");
    
    case(nivelHeroi <= 10001):
        console.log("Nivel Ascedente");

}

console.log("Fim" + nivelHeroi)