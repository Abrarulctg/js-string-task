// Count how many times a string has the letter a or A
const sentence = 'Amar sonar banglA, Ami tomai vlobashi, cirodin tomar Akash, tomar batash.';

// console.log(sentence)
let hasA = 0;
for (let i of sentence) {
    // if(i)
    if (i === 'a' || i === 'A') {
        hasA = hasA + 1;
    }
    // console.log(sentence.length);
}
console.log('The sentence has ', hasA, 'a or A')