const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Zadej číslo: ', (input) => {
    let cislo = Number(input);

    if (cislo === 0) {
        console.log("Číslo je nula.");
    } else if (cislo > 0) {
        console.log("Číslo je kladné.");
    } else {
        console.log("Číslo je záporné.");
    }
    
    readline.close();
});