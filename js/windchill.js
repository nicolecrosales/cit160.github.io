function doInputOutput() {
    // INPUT get the temperature value and wind speed value from the user
    let temperature = parseFloat(document.getElementById('temp').value);
    let windspeed = parseFloat(document.getElementById('winds').value);

    /*In addition, wind chill is not calculated for temperatures above 50 degrees 
    Fahrenheit nor for wind speeds below 3 miles per hour. 
    You should NOT call the function if the input does not meet these specifications.
    */
    //PROCESS To set conditions
    if (temperature <= 50 && windspeed >= 3) {
        windchill = windChill(temperature, windspeed);
    } else {
        alert("wind chill is not calculated for temperatures above 50 degrees Fahrenheit nor for wind speeds below 3 miles per hour.");
    }
    document.getElementById('output').innerHTML = windchill;
    
}
function windChill(tempF, speed) {
    let t = tempF;
    let s = speed;
    let f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
    return f;
}