function jsonphotos() {
    const url = `https://jsonplaceholder.typicode.com/photos`;
    fetch(url)
        .then(res => res.json())
        .then(data => showOnlyPhotos(data))
}

const showOnlyPhotos = data => {
    console.log(data[0].thumbnailUrl);
    const body = document.getElementById('body');
    body.style.display = 'flex';
    body.style.flexWrap = 'wrap';
    body.style.justifyContent = 'space-between';

    const len = data.length;
    for (i = 0; i < len; i++) {
        const imgContainer = document.createElement('div');
        imgContainer.style.margin = '12px 4px'
        imgContainer.innerHTML = `
            <img src="${data[i].thumbnailUrl}" alt="data[i].title">
        `;
        body.appendChild(imgContainer);
        console.log(data[i].title);
    }
}
jsonphotos();