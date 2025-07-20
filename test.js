
const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 3.75 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
        expect(fromEuroToDollar(3.5)).toBe(3.75); 
})

test("One dolar should be 146.26 yen", function(){
    const { fromDollarToYen } = require('./app.js')
        expect(fromDollarToYen(1)).toBe(146.26); 
})

test("One yen should be  0.01 pounds", function(){
    const { fromYenToPound } = require('./app.js')
        expect(fromYenToPound(1)).toBe(0.01); 
})