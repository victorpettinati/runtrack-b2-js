function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    if (number <= 3) {
        return true;
    }
    if (number % 2 === 0 || number % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i <= number) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}

function myPrimeList(limit) {
    const primes = [];
    for (let number = 2; number <= limit; number++) {
        if (isPrime(number)) {
            primes.push(number);
        }
    }
    return primes;
}

function showPrimeNumbers() {
    const limitInput = document.getElementById("limitInput");
    const primeList = document.getElementById("primeList");
    const limit = parseInt(limitInput.value);

    const primeNumbers = myPrimeList(limit);

    primeList.innerHTML = "";

    primeNumbers.forEach((prime) => {
        const li = document.createElement("li");
        li.textContent = prime;
        primeList.appendChild(li);
    });
}
