function convertValute(valuta1, valuta2, summa) {
    const courseUSD = 100;
    const courseEUR = 110;
    
    if (valuta1 == 'rub' && valuta2 == 'usd') {
        return summa / courseUSD;
    } else if (valuta1 == 'rub' && valuta2 == 'eur') {
        return summa / courseEUR;
    } else {
        return null;
    }
}

console.log(convertValute('rub', 'usd', 2000));