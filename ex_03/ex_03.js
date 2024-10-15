function display_planet_info(planet) {
    const planetList = document.getElementById('planet-list');
    const listItem = document.createElement('li');
    listItem.classList.add('planet');
    listItem.innerHTML = `
        <h2>${planet.name}</h2>
        <p><strong>Diameter:</strong> ${planet.diameter}</p>
        <p><strong>Climate:</strong> ${planet.climate}</p>
        <p><strong>Terrain:</strong> ${planet.terrain}</p>
        <p><strong>Population:</strong> ${planet.population}</p>
    `;

    planetList.appendChild(listItem);
}
fetch('https://swapi.dev/api/planets/1/')
    .then(response => response.json())
    .then(data => {
        display_planet_info(data);
    })
    .catch(error => console.error('Error fetching planet data:', error));
