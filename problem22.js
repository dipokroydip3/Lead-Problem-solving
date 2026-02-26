const events = [9, 8, 7, 2, 12, 23, 4];

const findEven = [];

for(let i = 0; i < events.length; i++) {
     if(events[i] % 2 === 0)
          findEven.push(events[i]);
}

let sum = 0;

for(let i = 0; i < findEven.length; i++){
     sum += findEven[i];
}

console.log(findEven);
console.log("Total even sum =", sum);

