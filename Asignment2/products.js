function sumOfProducts(n1, n2) {
    let str1 = n1.toString().split("").reverse();
    let str2 = n2.toString().split("").reverse();
    let len = Math.max(str1.length, str2.length);
    let sum = 0;

    for (let i = 0; i < len; i++) {
        let d1 = parseInt(str1[i] || 0);
        let d2 = parseInt(str2[i] || 0);
        sum += d1 * d2;
    }
    return sum;
}


console.log(sumOfProducts(6, 34));   
console.log(sumOfProducts(123, 456)); 
