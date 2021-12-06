const fetchApi = (urlExtension) => {
    if (urlExtension != '') {
        console.log(urlExtension);
        // const randomApiUrl = `https://randomuser.me/api/?results=${urlExtension}`;
        // const randomApiUrl = `https://randomuser.me/api/?exc=${urlExtension}`;
        const randomApiUrl = `https://randomuser.me/api/?results=5`;
        fetch(randomApiUrl)
            .then(res => res.json())
            .then(data => {
                showPeople(data);
            })
    }
    else {
        const sectionSearch = document.getElementById('search');
        const warningParagraph = document.createElement('p');
        warningParagraph.classList.add('text-danger');
        warningParagraph.classList.add('text-center');
        sectionSearch.appendChild(warningParagraph);
    }
}

const showPeople = (data) => {
    const peopleInfoArr = data.results;
    const rowInRandomApiDisplay = document.getElementById('row');
    rowInRandomApiDisplay.textContent = ``;
    console.log(peopleInfoArr);
    peopleInfoArr.forEach(personInfo => {
        const divCol = document.createElement('div');
        divCol.classList.add('col');
        // divCol.textContent = ``;
        divCol.innerHTML = `
        <div class="card">
        <img width="100" src="${personInfo.picture.large}" class="card-img-top" alt="random-user-img">
        <div class="card-body">
          <h5 class="card-title">${personInfo.name.title} ${personInfo.name.first} ${personInfo.name.last}</h5>
          <p class="card-text">
            <p>Gender: ${personInfo.gender} </p>
            <p>Date of Birth: ${personInfo.dob.date} </p>
            <p>Age: ${personInfo.dob.age} </p>
            <p>Email: ${personInfo.email} </p>
            <p>Location:  ${personInfo.location.street.number},${personInfo.location.street.name},${personInfo.location.city},${personInfo.location.state},${personInfo.location.country}</p>
            <p>Postcode: ${personInfo.postcode} </p>
            <p>Phone: ${personInfo.phone} </p>
            <p>Registered Date: ${personInfo.registered.date}</p>
            <p>Registered Age: ${personInfo.registered.age}</p>
          </p>
        </div>
        `;
        rowInRandomApiDisplay.appendChild(divCol);
    })
}
const searchBtn = document.getElementById('search-btn');
searchBtn.style.cursor = 'pointer';
searchBtn.addEventListener('click', function () {
    const inputTag = document.getElementById('user-input-field');
    const inputVal = inputTag.value;
    fetchApi(inputVal);
});
