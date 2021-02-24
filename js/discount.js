/* Input: The user enter the subtotal amount.
   Process 1: If the subtotal is greater than $50 and today is Tuesday or Wednesday, 
              subtract 10% from the subtotal. 
   Process 2: Adding sales tax of 6% to the subtotal.
   Output: The total amount due.
*/

function mydiscount() {
    // INPUT: Read the input from the computer and the user.
    let now = new Date();
    let dayOfWeek = now.getDay();
    let subt = parseFloat(document.getElementById('subtotal').value);
    
    // PROCESS: Subtracting 10% from the subtotal.
    if (subt > 50 && (dayOfWeek == 2 || dayOfWeek == 3)) {
        subt *= 0.9; 
    }
    
    // PROCESS: Adding sales tax of 6%.
    tax = subt * 0.06;
    result = subt + tax;

    //PROCESS: two decimals.
    let digits = 2;
    let multiplier = Math.pow(10, digits);
    result = Math.round(result * multiplier) / multiplier;

    // OUTPUT: Display if I can sleep in or get up..
    document.getElementById('output').innerHTML = result;
}