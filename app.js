const sum = function(a, b) {
    return a + b;
};


let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}


const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * oneEuroIs["USD"];
    return Number(valueInDollar.toFixed(2));
}
const fromDollarToYen = function(valueInDollar) {
    let valueInYen = (valueInDollar / oneEuroIs["USD"]) * oneEuroIs["JPY"];
    return Number(valueInYen.toFixed(2));
};

const fromYenToPound = function(valueInYen) {
    let valueInPound = (valueInYen / oneEuroIs["JPY"]) * oneEuroIs["GBP"];
    return Number(valueInPound.toFixed(2));
};


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };