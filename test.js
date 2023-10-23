test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("One dollars should be 146.26 yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(2);
    const expected = 2 * 146.26;
    expect(fromDollarToYen(2)).toBe(292.52);
})

test("One yen should be 0.0055 pound", function() {
    const { fromYenToPound } = require('./app.js');
    const pound = fromYenToPound(5);
    const expected = 5 * 0.00556;
    expect(fromYenToPound(5)).toBe(0.0278);
})


