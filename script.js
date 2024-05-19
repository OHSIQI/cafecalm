function calculateCaffeine() {
    // Get the user input weight
    var userInputWeight = parseFloat(document.getElementById("userInputWeight").value);

    // Get the sensitivity to caffeine value
    var sensitivityValue;
    var radios = document.getElementsByName('Sensitivity');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            if (radios[i].value === 'moreSensitive') {
                sensitivityValue = 2.5;
            } else if (radios[i].value === 'normal') {
                sensitivityValue = 3.25;
            } else if (radios[i].value === 'moreTolerant') {
                sensitivityValue = 4;
            }
            break;
        }
    }

    // Calculate the result
    var result = userInputWeight * sensitivityValue;

    // Update the result-box with the calculated result
    document.getElementById("result-box").innerHTML = result + " mg";
}