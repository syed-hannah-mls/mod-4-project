import { getCharacter } from "./fetch-helpers";
import {renderCharacterList} from "./dom-helpers"

const loadCharacter = async () => {
    const result = await getCharacter()

    if(result.error){
        console.warn(result.error)
        return
    } 
    renderCharacterList(result.data.results)
}

loadCharacter()