abbrev = function (str1) {
    let split = str1.split(" ");
    if (split.length > 1) {
        return (split[0].charAt(0) + "." + split[1].charAt(0) + ".");
    }

    return split[0];
};

console.log(abbrev("Kateryna Doroshenko"));