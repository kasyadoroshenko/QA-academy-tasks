function integer(a, b) {
    if (a >= 0 && b >= 0 && a != b) {
        return (Math.max(a, b));
    }
}

console.log(integer(3, 2));