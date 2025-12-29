const answer = (n) => {
    let sum = BigInt(0)
    const maxOdd = (n%2 === 0)? n-1 : n
    for (let i = 1; i <= maxOdd; i+=2) {
        if (i % 2 === 0) continue;
        sum += BigInt(i) * BigInt(i);
    }
    return sum
}
