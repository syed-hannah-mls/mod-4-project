export const getAllCharacters = async () => {
    let allCharacters = [];
    let url = 'https://swapi.dev/api/people/';

    while (url) { //This loop is to keep making fetch calls to recieve more than 10 people
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch characters');

        const data = await response.json();
        allCharacters = allCharacters.concat(data.results);
        url = data.next; //at some point this will make the url falsy
            throw new Error('Error occurred')
        }
            const data = await response.json()
            return { data: data, error: null}
    }
    
    //resolved
    catch (error) {
        console.warn(error)
        return { data: null, error: error.message }
    }

export const getSingleCharacter = async (id) => {
    try {
        const response = await fetch(`https://swapi.dev/api/people/${id}/`);

        if (!response.ok) {
            throw new Error('Error fetching character');
        }

        const data = await response.json();

        return { data: data, error: null };

    } catch (error) {
        console.warn('Single character fetch failed:', error);
        return { data: null, error: error.message };
    }
};

