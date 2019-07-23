//CONDITIONAL LOGIC
//writing code where you write every possible outcome

/* /if (1) {
    console.log("hello!")
}
*/


// 0 "" undefined null

// == double equal
//  != not equal
// && both sides must be true
// || pipe either side must be true
// <=
// >=
// <
// >
// !

//EQUAL TO: ==, ===
//ex:
/*if (100 == 100){ 
    console.log("Double Equal!")
}
*/

// ex
/*if (100 == 99){ 
    console.log("Double Equal!")
}
*/

//NOT EQUAL TO: !=, !==
//ex:
if (100 != 99){ 
    console.log("Not Equal!");
}

if (100 !== 99){ 
    console.log("Not Equal!");
}

//BOTH TRUE: &&
if (true && true){ 
    console.log("Both True!");
}
if (true && false){ 
    console.log("Both True!");
}

// NOT BOOLEAN: !
!true
!false

// OR: ||
if (false || false){ 
    console.log("Either is True!");
}

// MATH lesser or Equal <=
if (100 <= 50 ){ 
    console.log("Lesser than");
}
if (100 <= 100 ){ 
    console.log("Lesser than");
}

if (100 < 100 ){ 
    console.log("Lesser than");
}

if (100 <= "100" ){ 
    console.log("Lesser than");
}

if (-100 <= "" ){ 
    console.log("Lesser than");
}

//MATH Greater Than or Equal >=, >

if (100 >= 50){
    console.log("Greater than or equal");
}

if (100>100){
    console.log( "Greater than");
}


//CHALLENGE:
if ((!false && 100 ==100) && false == false) {
    console.log("I run!");
}

if (true || !false) {}


//NESTING

//if (true) {

    //WILL RUN var var1 = 100; 

        //if (false) {
            var var2 = 200;
        }

        // WILL RUN var var3 = 300;

        if (true) {

                // WILL RUN var var4 = 400;

            if (false) {

                var var5 =500; 
            }

        }
}