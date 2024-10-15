fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        document.getElementById('dogImage').src = data.message;
    })
    .catch(error => console.log('Erreur lors de la récupération de l\'image du chien:', error));


fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => {
        document.getElementById('catImage').src = data[0].url;
    })
    .catch(error => console.log('Erreur lors de la récupération de l\'image du chat:', error));


fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        document.getElementById('adviceText').innerText = data.slip.advice;
    })
    .catch(error => console.log('Erreur lors de la récupération du conseil:', error));

fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ripple&vs_currencies=usd')
    .then(response => response.json())
    .then(data => {
        const cryptoPrices = document.getElementById('cryptoPrices');
        const cryptos = Object.keys(data);
        cryptos.forEach(crypto => {
            const li = document.createElement('li');
            li.innerText = `${crypto.toUpperCase()}: $${data[crypto].usd}`;
            cryptoPrices.appendChild(li);
        });
    })
    .catch(error => console.log('Erreur lors de la récupération des prix des cryptomonnaies:', error));

fetch('https://v2.jokeapi.dev/joke/Any')
    .then(response => response.json())
    .then(data => {
        const jokeText = data.joke || `${data.setup} ... ${data.delivery}`;
        document.getElementById('jokeText').innerText = jokeText;
    })
    .catch(error => console.log('Erreur lors de la récupération de la blague:', error));
