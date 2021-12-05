const searchBtn = () => {
    const foodInputTag = document.getElementById('searched-food');
    let foodName = foodInputTag.value;
    if (!foodName) {
        foodName = '.....';
    }
    fetchUrl(`${foodName}`);
    console.log('foodName', foodName);
    foodInputTag.value = '';
}

const fetchUrl = async foodName => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => displayFood(data.meals))

    // const response = await fetch(url);
    // const data = await response.json();
    // displayFood(data.meals);
};

const displayFood = showFood => {
    console.log('showfood', showFood);
    if (showFood == null) {
        const foodCard = document.getElementById('food-card');
        foodCard.innerHTML = ``;
        const searchSection = document.getElementById('search-section');
        const displaySection = document.getElementById('display-section');
        displaySection.textContent = ``;
        const warningParagraph = document.createElement('p');
        warningParagraph.innerText = `Please Enter a food name!!`;
        warningParagraph.style.color = 'red';
        warningParagraph.classList.add('text-center');
        searchSection.appendChild(warningParagraph);
        const d = new Date();
        setTimeout(() => {
            warningParagraph.innerText = ``;
        }, 700);
    }
    else {
        const foodCard = document.getElementById('food-card');
        foodCard.textContent = ``;
        showFood.forEach(food => {
            console.log('foodCard', foodCard);
            //console.log('food',food);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
                <div class="card ">
                     <img  class="img-fluid p-2 " style="border-radius: 52px"  src="${food.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                         <h5 class="card-title">${food.strMeal}</h5>
                         <p class="card-text">${food.strInstructions.slice(0, 180)}
                         <span class="text-primary" onclick ="readMore('${food.idMeal}')"> Read More </span>
                         </p>
                     </div>
                     <button type="button" class="btn btn-danger">Order Now</button>
                </div>
    `;
            console.log('foodCard', foodCard);
            foodCard.appendChild(div);
        })
    }

}

const readMore = showFood => {
    //console.log('showFood', showFood);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${showFood}`;
    //console.log('readMore', url);
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log('data', data.meals[0]);
            const foodDetails = document.getElementById('food-details');
            foodDetails.innerHTML = ``;
            const div = document.createElement('div');
            foodDetails.style.margin = '10px';
            div.style.margin = '0 auto';
            div.style.width = '50rem';
            div.classList.add('card');
            div.innerHTML = `
            <img src="${data.meals[0].strMealThumb}" class="card-img-top" alt="${data.meals[0].strMealThumb}">
            <div class="card-body">
                <h5 class="card-title">${data.meals[0].strMeal}</h5>
                <p class="card-text">${data.meals[0].strInstructions}</p>
                <a href="${data.meals[0].strYoutube}" class="btn btn-primary">Go Youtube</a>
            </div>
    `;

            foodDetails.appendChild(div);


        })

}
document.body.style.backgroundColor = '#faebd7';





