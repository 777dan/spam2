const strokes = ["Lorem Spam ipsum dolor sit", "Lorem ipsum dolor sit"];

function check(str, word) {
    for (let i = 0; i < str.length; i++) {
        str = str.trim().toLowerCase();
        return str.includes(word);
    }
}

function replace(str, word, newWord) {
    for (let i = 0; i < str.length; i++) {
        if (check(str, word)) {
            str = str.trim().toLowerCase();
            str = str.replaceAll(word, newWord);
        }
        return str;
    }
}

for (let i = 0; i < strokes.length; i++) {
    console.log(replace(strokes[i], "spam", "flud"));
}