const palindromes = function (string) {
    noPunct = string.toLowerCase().replace(/[^a-z]/g, "");
    return (
        noPunct
        .split("")
        .reverse()
        .join("") == noPunct
    );
};

// Do not edit below this line
module.exports = palindromes;
