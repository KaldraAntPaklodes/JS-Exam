/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodui:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie{
    constructor(title, director, budget){
        this.title = title
        this.director = director
        this.budget = budget
    }
    wasExpensive = function (){
        if(this.budget > 100000000){
            return true
        }else{
            return false
        }
    }
}

const HarryPotter = new Movie(`Harry Potter`, `Jack`, 200000000)
const Zero = new Movie(`Zero`, `Velyvis`, 50000)

console.log(HarryPotter.wasExpensive())
console.log(Zero.wasExpensive())