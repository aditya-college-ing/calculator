let result = document.getElementById("result");

function appendNumber(num) {
    result.value += num;
}

function appendOperator(op) {
    result.value += op;
}

function appendDecimal() {
    result.value += ".";
}

function clearResult() {
    result.value = "";
}

function calculateResult() {
    result.value = eval(result.value);
}
