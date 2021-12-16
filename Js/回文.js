function palindrome(str) {
    let reg = /\W|_/g;
    str = str.replace(reg, "").split("").map(t => t.toUpperCase());
    let length = Math.floor(str.length / 2);
    for (let i = 0; i < length; i++)
        if (str[i] != str[str.length - 1 - i])
            return false;
    return true;
}

palindrome("eye");