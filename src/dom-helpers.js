const detailsContainer = document.querySelector('#character-details');

export const renderCharacterDetails = (character) => {
    detailsContainer.classList.remove('hidden');

    detailsContainer.innerHTML = `
        <h3>${character.name}</h3>
        <p><strong>Birth Year:</strong> ${character.birth_year}</p>
        <p><strong>Height:</strong> ${character.height}</p>
        <p><strong>Mass:</strong> ${character.mass}</p>
        <p><strong>Gender:</strong> ${character.gender}</p>
    `;
};

const characterList = document.getElementById('characters-list');

export const renderCharacterList = (characters) => {
    characterList.innerHTML = ''; 

    characters.forEach(character => {
        const li = document.createElement('li'); 
        li.textContent = character.name;

        li.addEventListener('click', () => {
            renderCharacterDetails(character);
        });

        characterList.appendChild(li);
    });
};
