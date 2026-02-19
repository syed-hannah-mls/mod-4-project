export const getCharacter = async () => {
    try {
        const response = await fetch(`https://swapi.dev/api/people/`)
        if(!response.ok){

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
};

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

