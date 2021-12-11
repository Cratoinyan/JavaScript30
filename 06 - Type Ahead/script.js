const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const search = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
const cities = [];


fetch(endpoint)
    .then(rawData => rawData.json())
    .then(jsonData => cities.push(...jsonData));

search.addEventListener('input',findMatches);


function findMatches(e){
    const matches = cities.filter(place => {
        const regex = new RegExp(e.target.value,"gi");
        return place.city.match(regex) || place.state.match(regex);
    });

    const html = matches.map(place => {
        return `
        <li>
            <span> ${place.city}, ${place.state}</span>
            <span> ${place.population}</span>
        </li>`;
    }).join("");

    suggestions.innerHTML = html;

}