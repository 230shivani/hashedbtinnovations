let text = "JavaScript is a powerful programming language";
let vowels = text.match(/[aeiouAEIOU]/g)?.length || 0;
let consonants = text.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g)?.length || 0;

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);