/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiama
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */


const input = document.querySelector(`#search`)
const result = document.querySelector(`#output`)

document.querySelector(`form`).addEventListener(`submit`, (e) =>{
    e.preventDefault()
    result.textContent = ``
    const kg = input.value
    const lb = kg * 2.2046
    const g = kg / 0.0010000
    const oz = kg * 35.274

    const lbText = document.createElement(`h2`)
    const gText = document.createElement(`h2`)
    const ozText = document.createElement(`h2`)
    lbText.textContent = `${kg}kg yra ${lb}lb`
    gText.textContent = `${kg}kg yra ${g}g`
    ozText.textContent = `${kg}kg yra ${oz}oz`
    result.append(lbText)
    result.append(gText)
    result.append(ozText)
    result.style.marginLeft = `10rem`
})
