function thetable() {
    let output = "";
    let i = 1;
    while (i <= 12) {
      result = 5 * i;
      output += `5 x ${i} = ${result}<br>`;
      i++
    }
    document.getElementById('display').innerHTML = output;
}