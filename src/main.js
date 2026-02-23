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

// Load more
const loadMoreBtn = document.querySelector('#load-more-btn');
let allCharacters = [];
let visibleCount = 5;

const loadCharacter = async () => {
  const result = await getAllCharacters();

  if (result.error) {
    console.warn(result.error);
    return;
  }

  allCharacters = result.data;
  renderCharacterList(allCharacters.slice(0, visibleCount));
  initSearch(allCharacters);
  setupLoadMore();
};

function setupLoadMore() {
  loadMoreBtn.classList.remove('hidden');
  updateButtonLabel();

  loadMoreBtn.addEventListener('click', () => {
    if (visibleCount >= allCharacters.length) {
      // reset to top
      visibleCount = 5;
    } else {
      visibleCount += 5;
    }

    renderCharacterList(allCharacters.slice(0, visibleCount));
    updateButtonLabel();
  });
}

function updateButtonLabel() {
  loadMoreBtn.textContent = visibleCount >= allCharacters.length
    ? 'Show Less'
    : 'Load More';
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