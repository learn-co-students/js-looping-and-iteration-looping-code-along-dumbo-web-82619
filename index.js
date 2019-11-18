// Code your solutions in this file

/* Created a function called write cards, this function take in two params a name
and an event. I created an array to push/shovel the interations into so that I 
can return the the array it'self with all the greetings. Let's look at this in steps.

Step 1. Create a function called writeCards that accepts a name and an event.

Step 2. Create an array(create array within function,second line) that you can call on later if you would like to return all
of the greetings. The array can be empty for now we will shovel the greetings in later

Step 3. Create a for loop that iterates through the nameArray by length.

Step 4. Use emoty array.push() to push the greetings for each iteration into 
the new empty array

Step 5. Return the array.

*/

function writeCards(name,eventName ){
let thankYouGreet = [];
    for(let i=0; i< name.length; i++){
        thankYouGreet.push(`Thank you, ${name[i]}, for the wonderful ${eventName} gift!`)
    }
 return thankYouGreet
}

function countDown(num){
let i = -1;

while (i < num ) {
    console.log(num)
    num--;
}

}



