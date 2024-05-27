//Determine Your Body Weight:
//Body weight plays a significant role in how much caffeine a person should consume daily. 
//Typically, a general rule of thumb is to consume between 2.5 to 4 milligrams of caffeine per kilogram of body weight.

//Caffeine Sensitivity: 
//More Sensitive: 2.5mg per kg of body weight / Normal: 3.25mg per kg of body weight  / More Tolerant: 4.0mg per kg of body weight

function calculateCaffeine() {
    // Get the user to input weight
    var userInputWeight = parseFloat(document.getElementById("userInputWeight").value);

    // Get the sensitivity to caffeine value
    // for (var i = 0; i < radios.length; i++): This is a for loop that iterates over each element in the 'radios' collection.
    // var i = 0: Initializes a variable 'i' to 0, which represents the index of the first element in the collection.
    // i < radios.length: Specifies the condition for continuing the loop. It will iterate as long as 'i' is less than the length of the 'radios' collection.
    // i++: Increments the value of 'i' by 1 after each iteration, moving to the next element in the collection.
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
    // Approximately 95mg of caffeine in 8oz brewed coffee
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


function getCaffeineContent() {
    var beverage = document.getElementById("beverage").value;
    var result = document.getElementById("beverage-result");
  
    switch (beverage) {
    case "select_from_list":
        result.textContent = "0 mg";
        break;
      case "nanyang_coffee":
        result.textContent = "95 mg";
        break;
      case "espresso":
        result.textContent = "63 mg";
        break;
      case "instant_coffee":
        result.textContent = "63 mg";
        break;
      case "decaf_coffee":
        result.textContent = "2-5 mg";
        break;
      case "black_tea":
        result.textContent = "40-70 mg";
        break;
      case "green_tea":
        result.textContent = "20-45 mg";
        break;
      case "white_tea":
        result.textContent = "15-30 mg";
        break;
      case "herbal_tea":
        result.textContent = "0 mg";
        break;
      case "latte":
        result.textContent = "126 mg";
        break;
      case "cappuccino":
        result.textContent = "63 mg";
        break;
      case "americano":
        result.textContent = "126 mg";
        break;
      case "mocha":
        result.textContent = "126 mg";
        break;
      case "macchiato":
        result.textContent = "63 mg";
        break;
      case "flat_white":
        result.textContent = "63-126 mg";
        break;
      default:
        result.textContent = "Invalid selection";
    }
  }
