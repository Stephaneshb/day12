let currentPage = 1;
let totalPages = 1;  


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
        planetList.appendChild(listItem);
    });
}

function fetch_planets(page = 1) {
    fetch(`https://swapi.dev/api/planets/?page=${page}`)
        .then(response => response.json())
        .then(data => {
            display_planet_info(data.results);
            totalPages = Math.ceil(data.count / 10); 
            updateButtons();
        })
        .catch(error => console.error('Error fetching planet data:', error));
}


function updateButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
}

document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        fetch_planets(currentPage);
    }
});

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        fetch_planets(currentPage);
    }
});

document.getElementById('search-input').addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    fetch(`https://swapi.dev/api/planets/?search=${query}`)
        .then(response => response.json())
        .then(data => {
            display_planet_info(data.results);
        })
        .catch(error => console.error('Error fetching planet data:', error));
});

fetch_planets(currentPage);
