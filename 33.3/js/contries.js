
const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => displayCountryName(data))
}

loadCountries();

const displayCountryName = countries => {
    const section = document.getElementById('section');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.innerHTML = `
        <h3>${country.name.common}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryDetails('${country.name.common}')">Details</button>`;
        section.appendChild(div);
    });
}

const loadCountryDetails = countryName => {
    // console.log(countryName);
    const url = `https://restcountries.com/v3.1/name/${countryName}`;
    fetch(url)
        .then(response => response.json())
        .then(data => countryDetails(data[0]))
}

function countryDetails(details) {
    
    const showCountryDetails = document.getElementById('show-country');
    const div = document.createElement('div');
    div.innerHTML = `
    <h3>${details.name.official}</h3>
    <h4> population ${details.population}</h4>
    <h4> region ${details.region}</h4>
    <img width="150px" src="${details.flags.png}"></img>`;
    div.style.backgroundColor = '#6699CC';
    div.style.borderRadius = '15px';
    div.style.color = 'white';
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.alignItems = 'center';
    div.style.padding = '20px';
    div.style.margin = '5px';
    showCountryDetails.appendChild(div);
}

