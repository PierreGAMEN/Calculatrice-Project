

function ClearValue() {
    let value = document.getElementById("valeur");
    value.innerHTML = "0";
    calcul = [];
    calculIndex = 0;
    calculatorText = "";
}

function AddPlus() {
    calcul[calculIndex] += "+";
}

let calculatorText = "";
let calcul = [];
let calculIndex = 0;


function AddValue(clickedButton) {
    if (calcul[calculIndex] === undefined) {
        calcul[calculIndex] = "";
    }

    if (clickedButton === "+" || clickedButton === "-" || clickedButton === "*" || clickedButton === "/") {
        calculIndex++;
        calcul[calculIndex] = clickedButton;
        calculIndex++;
    } else {
        calcul[calculIndex] += clickedButton;
    }

    calculatorText += clickedButton;
    let value = document.getElementById("valeur");
    value.innerHTML = calcul[calculIndex];
    console.log(calcul[calculIndex]);
}

function resultat() {
    let result = 0;
    let operator = "+";

    for (let i = 0; i < calcul.length; i++) {
        if (calcul[i] === "+" || calcul[i] === "-" || calcul[i] === "*" || calcul[i] === "/") {
            operator = calcul[i];
        } else {
            switch (operator) {
                case "+":
                    result += parseInt(calcul[i]);
                    break;
                case "-":
                    result -= parseInt(calcul[i]);
                    break;
                case "*":
                    result *= parseInt(calcul[i]);
                    break;
                case "/":
                    result /= parseInt(calcul[i]);
                    break;

                   
            }
        }
        calculatorText = result;
        return result;
    } 
}

console.log(calcul);
console.log(calculatorText);


