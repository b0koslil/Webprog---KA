
function osszeadas(a, b) {
    return a + b;
}

function kivonas(a, b) {
    return a - b;
}

function szorzas(a, b) {
    return a * b;
}

function osztas(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        console.error('Nullával nem oszthatunk');
        return NaN;
    }
}

function szamolas(alapmuvelet, operandus1, operandus2, callback) {
    const eredmeny = alapmuvelet(operandus1, operandus2);
    callback(eredmeny);
}

function eredmenyKiiratas(eredmeny) {
    console.log('A számolt érték: ' + eredmeny);
}

szamolas(osszeadas, 5, 3, eredmenyKiiratas);
szamolas(kivonas, 8, 2, eredmenyKiiratas);
szamolas(szorzas, 4, 6, eredmenyKiiratas);
szamolas(osztas, 9, 3, eredmenyKiiratas);
