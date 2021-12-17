function rot13(str) {
    let all = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = [];
    for (let i = 0; i < str.length; i++) {
        let word = str[i].toUpperCase();
        if (all.includes(word)) {
            let index = all.indexOf(word) + 13;
            if (index > 25)
                index -= 26;
            result.push(all[index]);
        } else {
            result.push(word);
        }
    }
    return result.join("");
}

rot13("SERR PBQR PNZC");