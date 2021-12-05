function randomUsers() {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => displayData(data))
}

function displayData(userInfo) {
    const randomUserObj = userInfo.results;
    const section = document.getElementById('section');
    const randomUserContainer = document.getElementById('randomUserContainer');
    const nameContainer = document.createElement('div');
    const emailContainer = document.createElement('div');
    randomUserContainer.appendChild(nameContainer);
    randomUserContainer.appendChild(emailContainer);
    section.style.border = '2px solid red';
    for (const user of randomUserObj) {
        const randomUserEmailContainer = document.createElement('p');
        const randomUserNameContainer = document.createElement('p');
        randomUserEmailContainer.innerText =`Email: ${user.email}`;
        randomUserNameContainer.innerText = `Name:${user.name.title} ${user.name.first} ${user.name.last}`;
        nameContainer.style.padding = '5px';
        nameContainer.style.border = '3px solid blue';
        emailContainer.style.padding = '5px';
        emailContainer.style.border = '3px solid green';
        randomUserContainer.classList.add('flex');
        randomUserContainer.style.width = '100vw';

        nameContainer.appendChild(randomUserNameContainer);
        emailContainer.appendChild(randomUserEmailContainer);
        section.appendChild(randomUserContainer);
        console.log(user);
    }
    
}