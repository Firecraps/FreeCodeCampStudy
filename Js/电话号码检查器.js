function telephoneCheck(str) {
    let reg = /^(\d{3}|\(\d{3}\))(-\d{3}| \d{3}|\d{3})(\d{4}|-\d{4}| \d{4})$/;
    if (str[0] == 1) {
        str = str.slice(1);
        if (str[0] == " ") {
            str = str.slice(1);
        }
    }
    return reg.test(str);
}

telephoneCheck("1 555-555-5555");