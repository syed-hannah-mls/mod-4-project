export const getCharacter = async () => {
    try {
        const response = await fetch(`https://swapi.dev/api/people/`)
        if(!response.ok){

            throw new Error('Error occurred')
        }
            const data = await response.json()
            return { data: data, error: null}
    } 
    catch (error) {
        console.warn(error)
        return { data: null, error: error.message }
    }
};

