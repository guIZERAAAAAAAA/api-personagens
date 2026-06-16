
const URL_BASE = 'https://hp-api.onrender.com/api/characters'

    export async function getCharacters() {
    const url = URL_BASE + '/characters'
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error('Deu ruim')
    }
    const data = await response.json()
    console.log(data)
    const data = await response.json
    return data 


}


  
    