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

const loadMore = document.querySelector('#load-more-btn')
let allCharacters = []
let visibleCount = 15

const loadCharacter = async () => {
    const result = await getAllCharacters();

    if (result.error) {
        console.warn(result.error);
        return;
    }

    allCharacters = result.data

    renderCharacterList(allCharacters.slice(0, visibleCount));
    initSearch(allCharacters)
    handleMoreCharacter()
}

loadCharacter();

export const handleCharacterClick = async (id) => {
  const result = await getSingleCharacter(id);

  if (result.error) {
    console.warn(result.error);
    return;
  }

  renderCharacterDetails(result.data);
};


function handleMoreCharacter() {
    loadMore.classList.remove('hidden')

    loadMore.addEventListener(('click'), () => {
        if (visibleCount >= allCharacters.length){
            visibleCount = 15
            loadMore.textContent = 'Load More'
        } else {
            visibleCount += 15

            if (visibleCount >= allCharacters.length){
                loadMore.textContent = 'Show Less'
            }
        }
    renderCharacterList(allCharacters.slice(0, visibleCount));
        
    })
    }
