function doPayment() {
    // INPUT get the data from the user
    let prin = parseFloat(document.getElementById('principal').value);
    let ar = parseFloat(document.getElementById('annualrate').value);
    let num = parseFloat(document.getElementById('years').value);
    let payment = parseFloat(document.getElementById('payments').value);
    

    
    //PROCESS call another function to calculate the value with the data from the user.
    result = computepayment(prin, ar, num, payment);
    
    //OUTPUT to give the payment to the user
    document.getElementById('output').innerHTML = result;
    
}
function doBalance() {
    let paid = parseFloat(document.getElementById('numpaid').value);
    let prin = parseFloat(document.getElementById('principal').value);
    let ar = parseFloat(document.getElementById('annualrate').value);
    let num = parseFloat(document.getElementById('years').value);
    let payment = parseFloat(document.getElementById('payments').value);

    //PROCESS call another function to calculate the value with the data from the user.
    result2 = computeBalance(prin, ar, num, payment, paid);

     //OUTPUT to give the payoff amount to the user
     document.getElementById('output2').innerHTML = result2;
}
function computepayment(principal, annualrate, years, periodsperyear) {
    a = principal;
    r = annualrate / periodsperyear;
    n = years * periodsperyear;
    p = (a * r) / (1 - Math.pow((1 + r), -n))
    let digits = 2;
    let multiplier = Math.pow(10, digits);
    p = Math.round(p * multiplier) / multiplier;
    return p;
}
function computeBalance (principal, annualrate, years, periodsperyear, numberOfPaymentPaidToDate) {
    a = principal;
    r = annualrate / periodsperyear;
    d = numberOfPaymentPaidToDate
    p = computepayment(principal, annualrate, years, periodsperyear);
    b = (a * Math.pow((1+r), d)) - ((p * (Math.pow((1 + r), d) - 1)) / r)
    let digits = 2;
    let multiplier = Math.pow(10, digits);
    b = Math.round(b * multiplier) / multiplier;
    return b;
}