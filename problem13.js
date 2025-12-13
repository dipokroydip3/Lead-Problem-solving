function sumAndPrimeCheck(n) {
    let sum = 0;

    // Step 1: sum of digits
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }

    // Step 2: check prime
    let isPrime = true;

    if (sum < 2) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(sum); i++) {
            if (sum % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    console.log("Sum =", sum);
    console.log("Prime =", isPrime ? "Yes" : "No");
}

// Example
sumAndPrimeCheck(256);
