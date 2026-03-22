// function findMedianSortedArrays(nums1, nums2) {

//     const merged = [...nums1, ...nums2].sort((a,b)=>a-b);

//     const n = merged.length;

//     if(n % 2 === 0){
//         return (merged[n/2 - 1] + merged[n/2]) / 2;
//     }else{
//         return merged[Math.floor(n/2)];
//     }
// }

// console.log(findMedianSortedArrays([1,3],[2]));



// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     return `Hello, I am ${this.name}`;
//   }
// }

// const user1 = new User("Dipak", 22);

// console.log(user1.greet());


class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, I am ${this.name}`;
    }

}

const user1 = new User("Dipak", 22);
console.log(user1.greet());
