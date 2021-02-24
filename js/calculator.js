/* Input: the user enters two numbers, an operator and his or her answer.
   Processing: To compute the correct answer and compare it to the user's answer. 
   Output: either "Correct! 🏆" or "Incorrect 😢".
*/

function myresult() {
    // INPUT: read as a number the typed elements from the user.
    let num1 = parseFloat(document.getElementById('firstnumber').value);
    let operator = document.getElementById('operator').value;
    let num2 = parseFloat(document.getElementById('secondnumber').value);
    let answer = parseFloat(document.getElementById('answer').value);

    // PROCESS: To compute the correct answer.
    let result;
    switch (operator) {
        case "+" : result = num1 + num2; break;
        case "-" : result = num1 - num2; break;
        case "/" : result = num1 / num2; break;
        case "*" : result = num1 * num2; break;
        default: result = "none"; break;
    }
    let digits = 3;
    let multiplier = Math.pow(10, digits);
    result = Math.round(result * multiplier) / multiplier;

    // PROCESS: To compare it to the user's answer.
    let programanswer;
    if (result == answer) {
        programanswer = "Correct! 🏆";
    } else {
        programanswer = "Incorrect 😢. The correct answer is " + result;
}

    // OUTPUT: Display if the answer from the user is correct or incorrect.
    document.getElementById('output').innerHTML = programanswer;
}