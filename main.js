let temp = prompt("Inserisci la temperatura esterna percepita:");

if (temp < 20) {
    console.log("Non ci sono più le mezze stagioni");
} else if (temp >= 30) {
    console.log("Lu mare, lu sole, lu ientu");
} else if (temp < 30) {
    console.log("mi dia una peroni sudata");
} else if (temp < 0) {
    console.log("non e’ tanto il freddo quanto l’umidità");
} else if (temp < -10) {
    console.log("copriti…ancora ti raffreddi");
}