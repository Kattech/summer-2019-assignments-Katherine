console.log (process.argv);

var randomNumber = process.argv[2];



Math
//Math with a capital M is a class for the Math Library

//functionName();
//Math.random

//RANDOMIZER
//var randomNumber = Math.random();
//console.log(randomNumber);

//var randomNumber = Math.random() * 4;
//console.log(randomNumber);

//Math.floor rounds down, seal rounds up, round to .
// var randomNumber = Math.random() * 4;
// randomNumber = Math.floor(randomNumber);

console.log(randomNumber);
var vehicle;
if (randomNumber== 0){
    vehicle = "bus";
    } else if (randomNumber == 1) {
            vehicle = "car";
    } else if (randomNumber == 2) {
            vehicle = "carpet";
    } else if (randomNumber == 3) {
            vehicle = "";
    }



var accident = "";
var tardinessMinutes = 0; // minutes units

console.log ("Value of Vehicle.", vehicle);
console.log ("Value of accident.", accident);



//This decides what the output is based on the variable vehicle
if (vehicle == "bus") {

    console.log ("John takes the Bus.");
    tardinessMinutes = tardinessMinutes + 5;

} else if ( vehicle == "car") {
    console.log ("John takes his car.");
    tardinessMinutes = tardinessMinutes + 1;
} else if (vehicle == "carpet") {
    console.log ("John takes his magic carpet.");
} else {
    console.log("John doesn't know what to commute on.");
    tardinessMinutes = tardinessMinutes + 1000;
}


if (accident == "flat tire") {

    if (vehicle == "car") {
        console.log("John had a flat, but luckily he had a spare tires, he is a lttle late to work.");
        tardinessMinutes = tardinessMinutes + 10;
    } else if (vehicle == "bus") {
        console.log("John's bus tire popped off and left John stranded, the next bus came 3 hrs later.");
        tardinessMinutes = tardinessMinutes + 180;
    }

} else {
    console.log("John's morning was the usual.");
}

if (tardinessMinutes>= 15) {
    console.log("John arrived " + tardinessMinutes + " minutes late. to work, he was fired on the spot." );
} else if (tardinessMinutes > 0 && tardinessMinutes < 15) {
    console.log("John arrived a little late, he dodged his bosses fury.");
}else{ 
    console.log("John arrived on time, thanks to a event less commute.");
}

//CONCATENATE
// 100 + 100
// 200

// "Hello" + "World"
// "Hello World"

// "Hello" +100
// "Hello 100"
