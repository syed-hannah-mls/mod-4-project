const detailsContainer = document.querySelector('#character-details');
const overlay = document.querySelector('#overlay');
const characterList = document.getElementById('characters-list');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('query');
const characterCount = document.getElementById('character-count');

let allCharactersCache = []; // store all characters for search filtering

const closeModal = () => {
    detailsContainer.classList.remove('visible');
    detailsContainer.classList.add('hidden');
    overlay.classList.remove('visible');
};

overlay.addEventListener('click', closeModal);

export const renderCharacterDetails = (character) => {
    detailsContainer.classList.remove('hidden');
    overlay.classList.add('visible');
    // slight delay lets the display:block register before animating
    requestAnimationFrame(() => detailsContainer.classList.add('visible'));

    detailsContainer.innerHTML = `
        <h3>${character.name}</h3>
        <p><strong>Birth Year:</strong> ${character.birth_year}</p>
        <p><strong>Height:</strong> ${character.height} cm</p>
        <p><strong>Mass:</strong> ${character.mass} kg</p>
        <p><strong>Gender:</strong> ${character.gender}</p>
        <p><strong>eye_color:</strong> ${character.eye_color}</p>
        <p><strong>skin_color:</strong> ${character.skin_color}</p>
        <p><strong>hair_color:</strong> ${character.hair_color}</p>
        <button id="close-details">Close Dossier</button>
    `;

    document.getElementById('close-details').addEventListener('click', closeModal);
};

export const renderCharacterList = (characters) => {
    characterList.innerHTML = '';
    characterCount.textContent = characters.length;

    characters.forEach(character => {
        const li = document.createElement('li');
        li.textContent = character.name;
        li.addEventListener('click', () => renderCharacterDetails(character));
        characterList.appendChild(li);
    });
};

export const initSearch = (characters) => {
    allCharactersCache = characters;

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchInput.value.toLowerCase().trim();
        const filtered = allCharactersCache.filter(c =>
            c.name.toLowerCase().includes(query)
        );
        renderCharacterList(filtered);
    });
};