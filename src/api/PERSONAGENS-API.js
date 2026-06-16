
const URL_BASE = 'https://hp-api.onrender.com/api'

export async function getCharacters() {
  //https://rickandmortyapi.com/api/character
  const url = URL_BASE + '/characters'

  // await fetch
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Deu ruim')
  }

  const data = await response.json()

  return data
} 


  
    