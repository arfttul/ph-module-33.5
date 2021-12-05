function kanyeQuotes() {
    fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then (data => displayQuotes(data))
}

function displayQuotes(randomQuote) {
    const freshQuotes = document.getElementById('kanye-quote');
    freshQuotes.innerText = randomQuote.quote;
}