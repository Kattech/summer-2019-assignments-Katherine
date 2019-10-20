//Create a function that will write to the console a pyramid of astricks
/* Use the following:
for loop
if statements
- or/and +
variables
1 argument allow the peak of pyramid
bonus: randomize peak
*
**
***
**
*

*/

//PYRAMID
//function ast1()
var ast1= " ";
for (var i=0; i<3; i++){
    ast1= ast1 + "* ";
    console.log(ast1);
}

//Going in Reverse
var astReverse= " ";
for(var e=4; e>0; e--){
astReverse = " ";

    //for (var i=3; i>0; i--){
    for (var i=e; i>0; i--){
    astReverse= astReverse + "* ";
}
console.log(astReverse);

}
/* Reverse Star for 2 stars loop
astReverse = " ";
for(var i=2;i>0; i--){
    astReverse = astReverse + "*";
}
console.log(astReverse);
*/





//ast1= ast1 + "*";


//var star ="*";


//f (){};

//for (var i = 0; i < 100; i++){
    //console.log(i);