// Code your solutions in this file
 function writeCards(names, event_name) {
     let cards = []
     for(let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
     }
     return cards
 }

 function countdown( countdown ) {
    while (countdown > 0) {
      console.log(countdown)
      countdown -= 1
    }
    console.log(countdown)
}