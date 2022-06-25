const POKE_API = `https://pokeapi.co/api/v2/`

// export const pokemonImageLink = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated'
// export const pokemonImageLinkAlternative = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon'

export const pokemonImageLink = 'https://raw.githubusercontent.com/andre23arruda/pokemons-gifs/main/'
export const pokemonImageLinkAlternative = 'https://raw.githubusercontent.com/andre23arruda/pokemons-gifs/main/'

export const itemImageLink = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dream-world'

export const nullImageLink = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png'


export function getApi(route) {
    return fetch(POKE_API + route)
    .then(response => response.json())
}
