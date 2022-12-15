'use strict';

const btnNumGral = document.querySelectorAll(".btnNumber");
const btnOpeGral = document.querySelectorAll(".btnOperacion");
const btnDeleteAll = document.querySelector(".btnDeleteAll");
const btnDeleteOne = document.querySelector(".btndDeleteOne");
const btnResult = document.querySelector(".btnResult");
const btnSave = document.querySelector(".btnSave");
const btnChangeSign = document.querySelector(".btnChangeSign");
const firstD = document.getElementById("pFD");
const secondD = document.getElementById("pSD");


class Calculator {
    constructor (num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
        this.solution = 0;
    }

    addition (){ 
     this.solution = this.num1 + this.num2;
     return this.solution;
    }

    subtraction () {
        this.solution = this.num1 - this.num2;
        return this.solution;
    }

    division () { 
        this.solution = this.num1 / this.num2;
        return this.solution;
    }

    multiplication () {
        this.solution = this.num1 * this.num2;
        return this.solution;
    }
    
    percent () {
        this.solution = (this.num1*this.num2)/100;
        return this.solution;
    }

    square_root () {
        this.solution = Math.sqrt (this.num1);
        return this.solution
    }

    exponentiation () {
        this.solution = this.num1 ** this.num2;
        return this.solution
    }

    signMathop () {
        this.solution = this.solution * (-1);
    }
}

let number1 = "";
let number2 = "";
let numberSave = "";
let signMath = "";
let valueNum1 = "";
let valueNum2 = "";
let total = "";
let piE = 3.141592;


btnNumGral.forEach(function(number) {
    number.addEventListener('click', () => {
            number1 += number.innerText;
            secondD.innerText = number1;
        if (number1.startsWith(".") == true || number1.startsWith("0") == true) { 
            alert("Coloque un número");
            location.reload();
        } else if (number1.includes(".") == true) { 
            let revision1 = number1.lastIndexOf(".");
            let revision2 = number1.indexOf(".");
            if (revision1 != revision2) {
                alert("Coloque un número");
                number1 = number1.substring(0, revision1);
                secondD.innerText = number1;
            }
        }
        valueNum2 = parseFloat(number1); 
        return number1;
    });
});

btnOpeGral.forEach(function(ope) {
    ope.addEventListener('click', () => {
        signMath = ope.innerText;
        let number2 = number1;
        valueNum1 = parseFloat(number2); 
        firstD.innerText = number2 + signMath;
        secondD.innerText = ""
        number1 = ""
        return signMath
    });
});

btnDeleteAll.addEventListener('click', () => {
    confirm ("¿Desea borrar todo?");
    location.reload();
});

btnDeleteOne.addEventListener('click', () => {
    let nLength = number1.length - 1;
    number1 = number1.substring(0, nLength);
    secondD.innerText = number1;
    return number1;
}); 

btnResult.addEventListener('click', () => {
    let newResult = new Calculator (valueNum1, valueNum2);
    switch (signMath) {
        case "+":
            total = newResult.addition ();
            break;

        case "-":
            total = newResult.subtraction ();
            break;
            
        case "-":
            total = newResult.subtraction ();
            break;
    
        case "X":
            total = newResult.multiplication ();
            break;
    
        case "÷":
            total = newResult.division ();
            break;
    
        case "√":
            total = newResult.square_root ();
            break;
    
        case "%":
            total = newResult.percent ();
            break;
    
        case "^":
            total = newResult.exponentiation ();
            break;
            
        case "π":
            total = valueNum1 * piE;
            break;

        default:
            break;
    }
    console.log(total);
    number1 =""
    firstD.innerText = "";
    secondD.innerText = total;
    numberSave = total;
    return numberSave;  
});

btnSave.addEventListener('click', () => {
    console.log (numberSave);
    secondD.innerText = numberSave;
    return numberSave;
});

btnChangeSign.addEventListener('click', () => {
    total = total * (-1);
    secondD.innerText = total;
    numberSave = total;
    return numberSave;
})