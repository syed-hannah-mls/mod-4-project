// ❌ You were importing getCharacter (doesn't exist / not used)
// ✅ Import getAllCharacters instead
import { getAllCharacters, getSingleCharacter } from "./fetch-helpers.js";

import { renderCharacterList, renderCharacterDetails } from "./dom-helpers.js";

const loadMore = document.querySelector('#load-more-btn')
let allCharacters = []
let visibleCount = 5

const loadCharacter = async () => {
  try {
    const result = await getAllCharacters();

    if (result.error) {
      console.warn(result.error);
      return;
    }

    allCharacters = result.data
    renderCharacterList(allCharacters.slice(0, visibleCount));

    handleMoreCharacter()
  } catch (error) {
    console.error(error);
  }
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


function handleMoreCharacter() {
    loadMore.classList.remove('hidden')

    loadMore.addEventListener(('click'), () => {
        if (visibleCount >= allCharacters.length){
            visibleCount = 5
            loadMore.textContent = 'Load More'
        } else {
            visibleCount += 5

            if (visibleCount >= allCharacters.length){
                loadMore.textContent = 'Show Less'
            }
        }
    renderCharacterList(allCharacters.slice(0, visibleCount));
        
    })
    }
