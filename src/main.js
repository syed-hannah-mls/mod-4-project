import { getCharacter, getSingleCharacter } from "./fetch-helpers.js";

import { renderCharacterList, renderCharacterDetails } from "./dom-helpers.js";


const loadCharacter = async () => {
    const result = await getCharacter()

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