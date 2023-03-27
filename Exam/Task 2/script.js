/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const result = document.querySelector(`#btn__state`)

document.querySelector(`#btn__element`).addEventListener(`click`, () =>{
    let count = +result.textContent
    count += 1
    result.textContent = count
})
