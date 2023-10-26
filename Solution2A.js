function SolutionReverseWordsInSentence() {
    const inputSentence = prompt("Enter a sentence:"); 
    if (inputSentence === null) {
        alert("No input provided.");
        return;
    }
    const reversedSentence = inputSentence
        .split(' ')
        .map(word => reverseWord(word))
        .join(' ');
    alert("Reversed sentence: " + reversedSentence);
}

function reverseWord(word) {
    return word.split('').reverse().join('');
}

reverseWordsInSentence();