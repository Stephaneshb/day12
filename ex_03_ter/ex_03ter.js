function display_planet_info(planets) {
    const planetList = document.getElementById('planet-list');
    planetList.innerHTML = '';
    planets.forEach(planet => {
        const listItem = document.createElement('li');
        listItem.classList.add('planet');
        listItem.innerHTML = `
            <h2>${planet.name}</h2>
            <p><strong>Diameter:</strong> ${planet.diameter}</p>
            <p><strong>Climate:</strong> ${planet.climate}</p>
            <p><strong>Terrain:</strong> ${planet.terrain}</p>
            <p><strong>Population:</strong> ${planet.population}</p>
        `;
        listItem.addEventListener('click', () => {
            fetch_planet_details(planet.url);
        });

        planetList.appendChild(listItem);
    });
}
function fetch_planet_details(url) {
    fetch(url)
        .then(response => response.json())
        .then(planet => {
            display_planet_report(planet);
        })
        .catch(error => console.error('Error fetching planet details:', error));
}
function display_planet_report(planet) {
    const planetReport = document.getElementById('planet-report');
    planetReport.innerHTML = '';
    planetReport.innerHTML = `
        <h2>${planet.name}</h2>
        <p><strong>Diameter:</strong> ${planet.diameter}</p>
        <p><strong>Climate:</strong> ${planet.climate}</p>
        <p><strong>Terrain:</strong> ${planet.terrain}</p>
        <p><strong>Population:</strong> ${planet.population}</p>
        <h3>Films:</h3>
        <ul id="film-list"></ul>
        <h3>Residents:</h3>
        <ul id="resident-list"></ul>
    `;
    document.getElementById('planet-list').style.display = 'none';
    planetReport.style.display = 'block';
    const filmList = document.getElementById('film-list');
    planet.films.forEach(filmUrl => {
        fetch(filmUrl)
            .then(response => response.json())
            .then(film => {
                const filmItem = document.createElement('li');
                filmItem.textContent = film.title;
                filmList.appendChild(filmItem);
            });
    });
    const residentList = document.getElementById('resident-list');
    if (planet.residents.length === 0) {
        residentList.innerHTML = '<li>No known residents.</li>';
    } else {
        planet.residents.forEach(residentUrl => {
            fetch(residentUrl)
                .then(response => response.json())
                .then(resident => {
                    const residentItem = document.createElement('li');
                    residentItem.textContent = resident.name;
                    residentList.appendChild(residentItem);
                });
        });
    }
}
fetch('https://swapi.dev/api/planets/')
    .then(response => response.json())
    .then(data => {
        display_planet_info(data.results);
    })
    .catch(error => console.error('Error fetching planet data:', error));
