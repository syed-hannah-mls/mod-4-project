const detailsContainer = document.querySelector('#character-details-container');

export const renderCharacterDetails = (character) => {
  const detailsSection = document.querySelector('#character-details');
  detailsSection.classList.remove('hidden');

  detailsContainer.innerHTML = `
    <h3>${character.name}</h3>
    <p><strong>Birth Year:</strong> ${character.birth_year}</p>
    <p><strong>Height:</strong> ${character.height}</p>
    <p><strong>Mass:</strong> ${character.mass}</p>
    <p><strong>Gender:</strong> ${character.gender}</p>
  `;
};
