let temp = prompt("Inserisci la temperatura esterna percepita:");

// if (temp < -10) {
//     console.log("copriti...ancora ti raffreddi!");
    
// } else if (temp <= 0) {
//     console.log("non è tanto il freddo quanto l'umidità");
    
// } else if (temp < 20) {
//     console.log("non ci sono più le mezze stagioni");
    
// } else if (temp < 30) {
//     console.log("mi dia una peroni sudata");
    
// } else {
//     console.log("Lu mare, lu sole, lu ientu");
    
// }

let messaggio;

switch (true) {
    case (temp < -10):
        messaggio = "copriti...ancora ti raffreddi!";
        break;
    case (temp <= 0):
        messaggio = "non è tanto il freddo quanto l'umidità";
        break;
    case (temp < 20):
        messaggio = "non ci sono più le mezze stagioni";
        break;
    case (temp < 30):
        messaggio = "mi dia una peroni sudata";
        break;
    default:
        messaggio = "Lu mare, lu sole, lu ientu";
}

console.log(messaggio);