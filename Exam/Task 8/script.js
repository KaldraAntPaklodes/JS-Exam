/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(firstNumber, secondNumber) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
    this.sum = function (){
        return this.firstNumber + this.secondNumber
    }

    this.substraction = function () {
        return this.firstNumber - this.secondNumber
    }

    this.miltiplication = function() {
        return this.firstNumber * this.secondNumber
    }

    this.division = function () {
        return this.firstNumber / this.secondNumber
    }
}


const calculation = new Calculator(5, 5)

console.log(calculation.sum())
console.log(calculation.substraction())
console.log(calculation.miltiplication())
console.log(calculation.division())