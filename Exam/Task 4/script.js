/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const result = document.querySelector(`#output`)


window.onload = ()=>{
    fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => carBrandData(data))
    }


    function carBrandData(data) {
        result.style.display = 'flex'
        result.style.flexWrap = 'wrap'
      
        data.forEach(car => {
          const brandDiv = document.createElement('div')
          const brandName = document.createElement('h3')
          const modelNames = document.createElement('p')
      
          brandName.textContent = car.brand
          brandDiv.appendChild(brandName)
          modelNames.textContent = car.models
          const modelArray = modelNames.textContent.split(',')
          modelArray.forEach(model => {
            const modelP = document.createElement('p')
            modelP.textContent = model.trim()
            brandDiv.appendChild(modelP)
        })       
          result.appendChild(brandDiv)
          brandDiv.style.margin = `0.5rem`
        });
      }