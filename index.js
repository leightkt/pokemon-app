const pokemons = [
    {
        "id": 2,
        "name": "ivysaur",
        "sprites": {
            "official-artwork": {
                "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
            }
        }
    },
    {
        "id": 4,
        "name": "charmander",
        "sprites": {
            "official-artwork": {
                "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
            }
        }
    }
]

const $pokemonContainer = document.querySelector(".pokemon-container")

function displayPokemons(pokemons) {
    pokemons.forEach(pokemon => showPokemon(pokemon))
}

function showPokemon(pokemon){
    const $pokemonCard = document.createElement('div')
    $pokemonCard.classList.add('pokemon-card') //add class to existing list
    //$pokemonCard.className = 'pokemon-card' will overwrite existing class
    const $pokemonName = document.createElement('h2')
    $pokemonName.textContent = pokemon.name
    const $pokemonImage = document.createElement('img')
    $pokemonImage.src = pokemon.sprites["official-artwork"].front_default
    $pokemonCard.append($pokemonName, $pokemonImage)
    $pokemonContainer.append($pokemonCard)
}

displayPokemons(pokemons)