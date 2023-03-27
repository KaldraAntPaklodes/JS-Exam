/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objektą 
ir grąžins visus jo "keys" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};


function showObjectKeys(object){
  const newArray = Object.keys(object)
  return newArray

}

function showObjectValues(object){
  const newArray = Object.values(object)
  return newArray
}

console.log(showObjectKeys(audi))
console.log(showObjectValues(audi))