import { getAllCharacters, getSingleCharacter } from "./fetch-helpers.js";

import { renderCharacterList, renderCharacterDetails } from "./dom-helpers.js";


const loadCharacter = async () => {
    const result = await getAllCharacters();

    if (result.error) {
        console.warn(result.error);
        return;
    }

    renderCharacterList(result.data);
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
