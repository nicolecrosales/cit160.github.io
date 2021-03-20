function doFV() {
    // INPUT get the data from the user
    let p = parseFloat(document.getElementById('principal').value);
    let ar = parseFloat(document.getElementById('annualrate').value);
    let y = parseFloat(document.getElementById('years').value);
    let per = parseFloat(document.getElementById('period').value);

    
    //PROCESS call another function to calculate the value with the data from the user.
    
    futurevalue = computefuturevalue(p, ar, y, per);
    
    //OUTPUT to give the future value to the user
    document.getElementById('output').innerHTML = futurevalue;
    
}
function computefuturevalue(principal, annualrate, years, periodsperyear) {
    a = principal;
    r = annualrate / periodsperyear;
    n = years * periodsperyear;
    f = a * Math.pow((1 + r), n);
    let digits = 2;
    let multiplier = Math.pow(10, digits);
    f = Math.round(f * multiplier) / multiplier;
    return f;
}