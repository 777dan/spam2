const str1 =
    "Lorem Spam ipsum dolor sit amet consectetur adipisicing elit. Tempora id commodi neque, unde amet adipisci eius molestias error, quae cumque placeat quidem illum dolorem tenetur porro molestiae quas officia culpa.";

const str2 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora id commodi neque, unde amet adipisci eius molestias error, quae cumque placeat quidem illum dolorem tenetur porro molestiae quas officia culpa.";

function check(str) {
    let spam = "spam";
    str = str.trim().toLowerCase();
    return (str.search(spam) !== -1) ? true : false;
}

console.log(check(str1));