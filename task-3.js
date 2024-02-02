// Check whether a string contains all the vowels a, e, i, o, u

const sentence = 'qck brwn fx jmps vr th lzy dg';
// console.log(sentence)

// loop
let hasVowel = false;
for (let i of sentence) {
    // console.log(i)
    if (i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u') {
        // console.log('Sentence has vowels');
        hasVowel = true;
    }
    else {
        // console.log("sentence hasn't any vowels");
        hasVowel = false;
    }
}

if (hasVowel === true) {
    console.log("The string has vowel")
}
else {
    console.log("The string hasn't vowel")
}