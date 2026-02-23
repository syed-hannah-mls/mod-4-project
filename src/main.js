import { getAllCharacters, getSingleCharacter } from "./fetch-helpers.js";

import { renderCharacterList, renderCharacterDetails, initSearch } from "./dom-helpers.js";

// Faction sorter
const factionForm = document.getElementById('faction-form');
const recruitInput = document.getElementById('recruit-name');
const factionResult = document.getElementById('faction-result');

const factions = [
  { name: 'REBEL ALLIANCE', class: 'rebellion', msg: (n) => `${n.toUpperCase()} — WELCOME TO THE REBELLION. MAY THE FORCE BE WITH YOU.` },
  { name: 'GALACTIC EMPIRE', class: 'empire',   msg: (n) => `${n.toUpperCase()} — YOU SERVE THE EMPIRE NOW. LONG LIVE THE EMPEROR.` },
];

factionForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = recruitInput.value.trim();
  if (!name) return;

  const assigned = factions[Math.floor(Math.random() * factions.length)];
  factionResult.className = assigned.class;
  factionResult.textContent = assigned.msg(name);
});

const loadCharacter = async () => {
    const result = await getAllCharacters();

    if (result.error) {
        console.warn(result.error);
        return;
    }

    renderCharacterList(result.data);
    initSearch(result.data)
};

loadCharacter();

export const handleCharacterClick = async (id) => {
    const result = await getSingleCharacter(id);

    if (result.error) {
        console.warn(result.error);
        return;
    }

    renderCharacterDetails(result.data);
};
