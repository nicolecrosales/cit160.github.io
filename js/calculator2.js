/* Input: the user enters a integer number.
   Processing: Identify the odd integers between 1 and the entered integer and sum them.
   Output: The sum of the all odd integers between 1 and the entered integer.
*/

function calculateodd() {
    // INPUT: read the number entered from the user as an integer.
    let integernum = parseInt(document.getElementById('thenumber').value);
    

    // PROCESS: Identify the odd integers between 1 and integernum and sum them.
    result = 0;
    for (let i = 1; i <= integernum; i += 2) {
        result += i; 
    }

    
    // OUTPUT: Display the sum of the odd integers.
    document.getElementById('output').innerHTML = result;
}