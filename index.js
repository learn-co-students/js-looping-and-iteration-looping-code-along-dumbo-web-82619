function writeCards(nameArray,eventName) {
  let messageArray = [];
  for (let i = 0; i < nameArray.length; i++) {
    messageArray.push(`Thank you, ${nameArray[i]}, for the wonderful ${eventName} gift!`);
  }
  return messageArray;
}

function countdown(num) {
  while (num >= 0) {
    console.log(num--);
  }
}