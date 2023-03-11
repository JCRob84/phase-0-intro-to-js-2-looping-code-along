const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(namesArray, eventName) {
    const messagesArray = [];
  
    for (let i = 0; i < namesArray.length; i++) {
      const message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
      messagesArray.push(message);
    }
  
    return messagesArray;
  }

  const names = ["Charlie", "Samip", "Ali"];
const event = "birthday";

const messages = writeCards(names, event);

console.log(messages);

function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--;
    }
  }
  countDown(10);