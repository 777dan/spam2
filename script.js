const str1 =
    "Lorem Spam ipsum dolor sit amet consectetur adipisicing elit. Tempora id commodi neque, unde amet adipisci eius molestias error, quae cumque placeat quidem illum dolorem tenetur porro molestiae quas officia culpa.";

const str2 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora id commodi neque, unde amet adipisci eius molestias error, quae cumque placeat quidem illum dolorem tenetur porro molestiae quas officia culpa.";

function check(str, word) {
    str = str.trim().toLowerCase();
    return str.includes(word);
}

console.log(check(str1, "spam"));