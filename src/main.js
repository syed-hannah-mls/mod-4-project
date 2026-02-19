import { getCharacter, getSingleCharacter } from "./fetch-helpers.js";

import { renderCharacterList, renderCharacterDetails } from "./dom-helpers.js";


const loadCharacter = async () => {
    try {
        const characters = await getAllCharacters();
        renderCharacterList(characters);
    } catch (error) {
        console.error(error);
    }
};

    if(result.error){
        console.warn(result.error)
        return
    } 
    renderCharacterList(result.data.results)
}

loadCharacter()

export const handleCharacterClick = async (id) => {
    const result = await getSingleCharacter(id);

    if (result.error) {
        console.warn(result.error);
        return;
    }

    renderCharacterDetails(result.data);
};
