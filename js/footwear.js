/* Input: the user select a weather.
   Processing: Selecting a footwear according to the weather. 
   Output: The footwear.
*/

function footwear() {
    // INPUT: read the weather selected.
    let theweather = document.getElementById('weather').value;
    
    // PROCESS: Selecting a footwear according to the weather..
    let thefootwear;
    switch (theweather) {
        case "hot" : thefootwear = "Sandals"; break;
        case "rain" : thefootwear = "Galoshes"; break;
        case "snow" : thefootwear = "Bots"; break;
        case "another": thefootwear = "Shoes"; break;
        default: thefootwear = "Choose an option"; break;
    }

    // OUTPUT: Display the footwear that the user must use.
    document.getElementById('output').innerHTML = thefootwear;
}