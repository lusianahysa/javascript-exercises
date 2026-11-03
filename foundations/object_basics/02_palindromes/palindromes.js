const palindromes = function (string) {
    let palindromeString = string.toLowerCase();
    for (let i = 0; i < palindromeString.length/2; i++) {
        if (palindromeString[i] !== palindromeString[palindromeString.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
