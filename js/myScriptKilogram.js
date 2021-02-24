/* Input: the user enters a pounds measurement.
   Processing: 1° convert the measurement from pounds to kilograms.
               2° round the displayed answer to one decimal.
   Output: the measurement converted to Kilograms.
*/

function convertKilograms() {
    // INPUT: read as a number the typed pounds measurement from the user.
    let lb = parseFloat(document.getElementById('pounds').value);

    // PROCESS: 1° convert the pounds measurement into Kilograms.
    let kg = lb / 2.2046;

    // PROCESS: 2° round the Kilograms to one decimal after the decimal.
    let digits = 1;
    let multiplier = Math.pow(10, digits);
    kg = Math.round(kg * multiplier) / multiplier;

    // OUTPUT: Display the kilogram masurement to the user.
    document.getElementById('output').innerHTML = lb + " pounds equals " + kg + " kilograms";
}