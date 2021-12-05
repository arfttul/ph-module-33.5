const searchBtn = document.getElementById('search-drink-btn');
searchBtn.addEventListener('click', function () {
    const inputTag = document.getElementById('drink-value');
    const drinkName = inputTag.value;
    fetchUrl(drinkName);
});
const fetchUrl = drinkName=> {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`;
    
}

