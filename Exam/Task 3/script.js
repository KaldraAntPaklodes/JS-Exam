/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
2. Informacija, kuri pateikiama: "login" ir "avatar_url" (kaip nuotrauka) kortelėje
3. Žinutė - Press "Show Users" button to see users - turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const button = document.querySelector(`#btn`)

button.addEventListener(`click`, () =>{
    fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => outputData(data))
})

function outputData(data) {
    const output = []
    data.forEach(user => {
      const img = document.createElement('img')
      img.src = user.avatar_url
      img.style.width = `100px`
      const li = document.createElement('li')
      li.innerHTML = `Login: <b>${user.login}</b> <br>`
      li.appendChild(img)
      output.push(li)
      li.style.listStyleType = `none`
      img.style.margin = `0.2rem`
      li.style.margin = `2rem`
    });
    const outputContainer = document.querySelector('#output')
    outputContainer.innerHTML = ''
    outputContainer.style.textAlign = `center`
    output.forEach(item => {
      outputContainer.appendChild(item)
    });
  }