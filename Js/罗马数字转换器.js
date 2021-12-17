function convertToRoman(num) {
    if (mapping.hasOwnProperty(num)) {
        return mapping[num];
    } else if (num >= 11 && num <= 99) {
        let index = Math.floor(num / 10) * 10;
        return mapping[index] + convertToRoman(num - index);
    } else if (num >= 101 && num <= 999) {
        let index = Math.floor(num / 100) * 100;
        return mapping[index] + convertToRoman(num - index);
    } else {
        let index = Math.floor(num / 1000);
        let result = "";
        for (let i = 0; i < index; i++)
            result += mapping[1000];
        return result + convertToRoman(num - index * 1000);
    }
}

let mapping = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
    20: "XX",
    30: "XXX",
    40: "XL",
    50: "L",
    60: "LX",
    70: "LXX",
    80: "LXXX",
    90: "XC",
    100: "C",
    200: "CC",
    300: "CCC",
    400: "CD",
    500: "D",
    600: "DC",
    700: "DCC",
    800: "DCCC",
    900: "CM",
    1000: "M"
}

convertToRoman(36);