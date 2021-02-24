/* Input: the input is obtained from the computer.
   Processing: The program determines the result from the variables. 
   Output: To know if I can sleep in or I must get up.
*/

function myalarm() {
    // INPUT: read the input from the computer.
    let now = new Date();
    let month = now.getMonth();
    let dayOfMonth = now.getDate();
    let dayOfWeek = now.getDay();
    
    // PROCESS: 
    let result;
    if (dayOfWeek == 0 || dayOfWeek == 6) {
        result = "Sleep in!";
    } else if (dayOfMonth == 1 && month == 0) {
        result = "Sleep in";
    } else if (dayOfMonth == 4 && month == 6) {
        result = "Sleep in";
    } else if (dayOfMonth == 25 && month == 11) {
        result = "Sleep in";
    } else {
        result = "Get up!";
    }
    

    // OUTPUT: Display if I can sleep in or get up..
    document.getElementById('output').innerHTML = result;
}