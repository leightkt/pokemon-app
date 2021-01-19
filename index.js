fetch("http://localhost:3000/pokemons")
    .then(response => response.json())
    .then(pokemons => displayPokemons(pokemons))

const $pokemonContainer = document.querySelector(".pokemon-container")

function displayPokemons(pokemons) {
    pokemons.forEach(pokemon => showPokemon(pokemon))

    const loading = document.querySelector('.loading')
    loading.remove()
}

function showPokemon(pokemon){
    const $pokemonCard = document.createElement('div')
    $pokemonCard.classList.add('pokemon-card') //add class to existing list
    //$pokemonCard.className = 'pokemon-card' will overwrite existing class
    const $pokemonName = document.createElement('h2')
    $pokemonName.textContent = pokemon.name
    const $pokemonImage = document.createElement('img')
    $pokemonImage.src = pokemon.sprites.other["official-artwork"].front_default
    $pokemonCard.append($pokemonName, $pokemonImage)
    $pokemonContainer.append($pokemonCard)
}