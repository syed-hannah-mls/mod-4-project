import { getAllCharacters } from './fetch-helpers';
import { renderCharacterList } from './dom-helpers';

const loadCharacter = async () => {
    try {
        const characters = await getAllCharacters();
        renderCharacterList(characters);
    } catch (error) {
        console.error(error);
    }
};

loadCharacter();
