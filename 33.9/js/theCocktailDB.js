const searchBtn = document.getElementById('search-drink-btn');
searchBtn.addEventListener('click', function () {
    const inputTag = document.getElementById('drink-value');
    let drinkName = inputTag.value;
    console.log(drinkName);
    if (drinkName == '') {
        drinkName = '....';
    }
    fetchUrl(drinkName);
});
const fetchUrl = drinkName => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`;

    // const response = async () => fetch(url);
    // const data = await (response)=> {response.json();
    // displayDrinks(data.drinks);
    fetch(url)
        .then(res => res.json())
        .then(data => displayDrinks(data.drinks))


}

const displayDrinks = drinksArr => {
    // console.log(drinksArr);
    if (drinksArr == null) {
        const searchSection = document.getElementById('search-section');
        const warningP = document.createElement('p');
        warningP.innerText = `Please Enter your Drink!!`;
        setTimeout(() => {
            warningP.innerText = ``;
        }, 1200);
        warningP.classList.add('text-danger', 'text-center');
        searchSection.appendChild(warningP);

    }
    else {
        console.log('else');
        const drinkRow = document.getElementById('drink-row');
        drinkRow.textContent = ``;
        drinksArr.forEach(drink => {
            const divCol = document.createElement('div');
            divCol.classList.add('col');
            divCol.textContent = ``;
            divCol.innerHTML = `
            <div class="card">
                <img src=" ${drink.strDrinkThumb}" class="card-img-top" alt="${drink.strDrinkThumb}">
                <div class="card-body">
                <h5 class="card-title">${drink.strDrink}</h5>
                <p class="card-text">${drink.strInstructions}</p>
            </div>
      </div>
        `;
            // console.log(drinkRow);
            drinkRow.appendChild(divCol);
            divCol.addEventListener('click', function () {
                readMore(drink, drinkRow);
            })
        });
    }
}

const readMore = (drink, showMore) => {
    const drinkDetails = document.getElementById('drink-details');
    console.log(drink, showMore);
    const divCol = document.createElement('div');
    drinkDetails.textContent = ``;
    divCol.classList.add('col');
    divCol.textContent = ``;
    divCol.innerHTML = `
            <div class="card">
                <img src=" ${drink.strDrinkThumb}" class="card-img-top" alt="${drink.strDrinkThumb}">
                <div class="card-body">
                <h5 class="card-title">${drink.strDrink}</h5>
                <p class="card-text">${drink.strInstructions}</p>
            </div>
      </div>
        `;
    // console.log(drinkRow);
    divCol.style.width = '35rem';
    divCol.style.margin = '10px auto';
    drinkDetails.textContent = ``;
    drinkDetails.appendChild(divCol);
    drinkDetails.appendChild(showMore);

}