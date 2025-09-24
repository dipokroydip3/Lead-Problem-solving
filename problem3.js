function isPrime(num) {
  if (num <= 1) {
    return false; // 0 and 1 are not prime
  }

  // Loop from 2 to square root of num
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // divisible by i, so not prime
    }
  }

  return true; // no divisors found, so prime
}

// Test cases
console.log(isPrime(7));  // true
console.log(isPrime(10)); // false
console.log(isPrime(2));  // true
console.log(isPrime(1));  // false
console.log(isPrime(17)); // true