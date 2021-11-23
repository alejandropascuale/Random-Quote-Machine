/* document.addEventListener('load', () => {
    const dataQuotes = await (await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')).json();
    const firstQuote = dataQuotes.quotes[0];

    const insertMessage = document.querySelector('#text');
    const h2 = document.createElement('h2');

    h2.innerText = firstQuote;
    insertMessage.appendChild(h2);
    console.log(firstQuote);
}) */