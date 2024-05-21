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

    // Calculate the result
    var result = userInputWeight * sensitivityValue;

    // Update the result-box with the calculated result
    document.getElementById("result-box").innerHTML = result + " mg";

    // Calculate the average number of cups of coffee and round to the nearest decimal
    var cups = Math.round(result / 95 * 10) / 10;

    // Set the cups-value with the rounded cups value
    document.getElementById("cups-value").textContent = cups + " cups of coffee";
}

function resetCaffeine() {
    // Clear user input weight
    document.getElementById("userInputWeight").value = "";

    // Clear sensitivity to caffeine
    var radios = document.getElementsByName('Sensitivity');
    for (var i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }

    // Clear result-box
    document.getElementById("result-box").innerHTML = "0 mg";

    // Clear cups-value
    document.getElementById("cups-value").innerHTML = "0 cups of coffee";
}