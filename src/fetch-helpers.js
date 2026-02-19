export const getAllCharacters = async () => {
    let allCharacters = [];
    let url = 'https://swapi.dev/api/people/';

    while (url) {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch characters');

        const data = await response.json();
        allCharacters = allCharacters.concat(data.results);
        url = data.next; 
    }

    return allCharacters;
};
