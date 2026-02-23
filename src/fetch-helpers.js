export const getAllCharacters = async () => {
  try {
    let allCharacters = [];
    let url = 'https://swapi.dev/api/people/';

    while (url) {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch characters');

      const data = await response.json();
      allCharacters = allCharacters.concat(data.results);
      url = data.next;
    }

    return { data: allCharacters, error: null };
  } catch (error) {
    console.warn(error);
    return { data: null, error: error.message };
  }
};

export const getSingleCharacter = async (id) => {
  try {
    const response = await fetch(`https://swapi.dev/api/people/${id}/`);
    if (!response.ok) throw new Error('Error fetching character');
    const data = await response.json();
    return { data: data, error: null };
  } catch (error) {
    console.warn('Single character fetch failed:', error);
    return { data: null, error: error.message };
  }
};