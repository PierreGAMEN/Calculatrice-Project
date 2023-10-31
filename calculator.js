

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
    document.getElementById("valeur").innerHTML = calculatorText;
    console.log(calcul, calculatorText);
}

function compute() {
    let result = 0;
    let operator = "+";

    for (let i = 0; i < calcul.length; i++) {
        if (calcul[i] === "+" || calcul[i] === "-" || calcul[i] === "*" || calcul[i] === "/") {
            operator = calcul[i];
        } else {
            switch (operator) {
                case "+":
                    result += parseFloat(calcul[i]);
                    break;
                case "-":
                    result -= parseFloat(calcul[i]);
                    break;
                case "*":
                    result *= parseFloat(calcul[i]);
                    break;
                case "/":
                    result /= parseFloat(calcul[i]);
                    break;
            }
        }
        calculatorText = result;
    } 

    calcul = [];
    calculIndex = 0;
    calculatorText = "";

    document.getElementById("valeur").innerHTML = result;
    return result;
}

