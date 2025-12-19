// let arr = [1, 2, 3, 4, 5];

// let sum = 0;

// for(let i = 0; i < arr.length; i++){
//      sum += arr[i];
// }

// console.log(sum);


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let even = [];
let odd = [];

for(let i = 0; i < arr.length; i++){
     if(arr[i] % 2 === 0){
          even.push(arr[i]);
     }
     else{
          odd.push(arr[i]);
     }
}
console.log(even);
console.log(odd);





