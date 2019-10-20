
// Takes in two strings, concatenates them and console logs the result.
function concatSentence() {

    var brickHouse = "She's mighty mighty.";
    var smokin = "Hello world.";

    console.log(string1 + string2);
}

concatSentence("$", "10.50");
concatSentence("100", "c");

function concatItself(string1, string2){
    concatSentence(string1, string2);
    concatSentence(string2, string1);
    }

    concatItself("ra","dar");
}

/* PARAMETERS & ARGUMENTS
function functionName(parameter1, parameter2){

}
finctionName ();
