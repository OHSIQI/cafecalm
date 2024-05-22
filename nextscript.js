function getCaffeineContent() {
    var beverage = document.getElementById("beverage").value;
    var result = document.getElementById("result");
  
    switch (beverage) {
      case "brewed_coffee":
        result.textContent = "Brewed Coffee (8 oz): 95 mg";
        break;
      case "espresso":
        result.textContent = "Espresso (1 oz): 63 mg";
        break;
      case "instant_coffee":
        result.textContent = "Instant Coffee (8 oz): 63 mg";
        break;
      case "decaf_coffee":
        result.textContent = "Decaffeinated Coffee (8 oz): 2 mg";
        break;
      case "black_tea":
        result.textContent = "Black Tea (8 oz): 40-70 mg";
        break;
      case "green_tea":
        result.textContent = "Green Tea (8 oz): 35 mg";
        break;
      case "white_tea":
        result.textContent = "White Tea (8 oz): 20 mg";
        break;
      case "herbal_tea":
        result.textContent = "Herbal Tea (8 oz): 0 mg";
        break;
      case "latte":
        result.textContent = "Latte (12 oz): 126 mg";
        break;
      case "cappuccino":
        result.textContent = "Cappuccino (8 oz): 63 mg";
        break;
      case "americano":
        result.textContent = "Americano (12 oz): 126 mg";
        break;
      case "mocha":
        result.textContent = "Mocha (12 oz): 126 mg";
        break;
      case "macchiato":
        result.textContent = "Macchiato (8 oz): 63 mg";
        break;
      case "flat_white":
        result.textContent = "Flat White (8 oz): 126 mg";
        break;
      default:
        result.textContent = "Invalid selection";
    }
  }
  