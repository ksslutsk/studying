function countPositivesSumNegatives(input) {
    if (input && input.length != 0) {
        let count = 0;
        let summ = 0;
        input.forEach(x => {
            x > 0 ? count++ : summ += x
        });
        return [count, summ];
    }
    return [];
}

function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}
